// src/dao/bookingDao.ts
import { Prisma } from '@prisma/client';

import prisma from '../../prisma/prisma.js';
import type {
	Booking,
	BookingHistoryLog,
	CreateBookingInput,
	UpdateBookingInput,
	CreateBookingHistoryLogInput,
	ListBookingsParams,
} from '../../types/reservation/Booking.ts'; // <-- adjust path if different

/**
 * Narrow and rethrow Prisma errors with a consistent message prefix.
 * Logs useful context for known Prisma error types.
 *
 * @param {string} prefix - A short context string to prepend to the thrown error message.
 * @param {unknown} error - The caught error instance (Prisma or generic).
 * @returns {never} Always throws; does not return.
 * @throws {Error} Re-throws as a standard Error with the prefixed message.
 */
function throwPrisma(prefix: string, error: unknown): never {
	if (error instanceof Prisma.PrismaClientKnownRequestError) {
		if (error.code === 'P2002') {
			console.error('Unique constraint failed on field:', error.meta?.target);
		}
	} else if (error instanceof Prisma.PrismaClientValidationError) {
		console.error('Validation error:', error.message);
	} else {
		console.error('Unexpected error:', error);
	}
	const msg = error instanceof Error ? error.message : 'Unknown error';
	throw new Error(`${prefix}: ${msg}`);
}

/**
 * Composes a single telephone string from either a full `telephone` value
 * or a combination of `telephone_code` + `telephone_number`.
 *
 * Priority:
 * 1) `telephone` if provided
 * 2) `telephone_code` + `telephone_number` (joined by a space)
 *
 * @param {{ telephone?: string; telephone_code?: string; telephone_number?: string }} input
 *   - `telephone` Full phone value (optional).
 *   - `telephone_code` Country/area code (optional).
 *   - `telephone_number` Local number (optional).
 * @returns {string | undefined} A trimmed phone string, or `undefined` if nothing usable was provided.
 */
function composeTelephone(input: {
	telephone?: string;
	telephone_code?: string;
	telephone_number?: string;
}): string | undefined {
	if (input.telephone) return input.telephone;
	if (input.telephone_code || input.telephone_number) {
		return [input.telephone_code, input.telephone_number].filter(Boolean).join(' ').trim() || undefined;
	}
	return undefined;
}

/**
 * Resolves a customer ID for a given reservation module:
 * - If `customer_id` is provided, returns it.
 * - Else tries to find an existing customer by (reservation_module_id, email) or (reservation_module_id, telephone).
 * - Else creates a new customer under the reservation module and returns the new ID.
 *
 * Uses Prisma `connect` on the module and respects composite unique constraints in your schema:
 *  - @@unique([reservation_module_id, email], name: "unique_customer_email")
 *  - @@unique([reservation_module_id, telephone], name: "unique_customer_telephone")
 *
 * @param {Prisma.TransactionClient} tx - The Prisma transaction client.
 * @param {{
 *   reservation_module_id: string;
 *   customer_id?: string;
 *   first_name?: string;
 *   last_name?: string;
 *   email?: string;
 *   telephone?: string;
 * }} args - Resolver arguments.
 * @returns {Promise<string>} The resolved or newly created `customer_id`.
 * @throws {Error} If Prisma encounters an error while querying or creating the customer.
 */
async function resolveOrCreateCustomer(
	tx: Prisma.TransactionClient,
	args: {
		reservation_module_id: string;
		customer_id?: string;
		first_name?: string;
		last_name?: string;
		email?: string;
		telephone?: string;
	}
): Promise<string> {
	const { reservation_module_id, customer_id, first_name, last_name, email, telephone } = args;

	if (customer_id) return customer_id;

	// Try find by (module,email) or (module,telephone) to avoid unique violations
	if (email) {
		const existingByEmail = await tx.customers.findFirst({
			where: { reservation_module_id, email },
			select: { customer_id: true },
		});
		if (existingByEmail) return existingByEmail.customer_id;
	}
	if (telephone) {
		const existingByTel = await tx.customers.findFirst({
			where: { reservation_module_id, telephone },
			select: { customer_id: true },
		});
		if (existingByTel) return existingByTel.customer_id;
	}

	const created = await tx.customers.create({
		data: {
			reservation_module: { connect: { reservation_module_id } },
			first_name: first_name ?? '',
			last_name: last_name ?? '',
			email: email ?? undefined,
			telephone: telephone ?? undefined,
		},
		select: { customer_id: true },
	});

	return created.customer_id;
}

/** Input for list; built to keep things simple (no cursor) */

/**
 * Create a booking (creates or connects a customer). Uses Prisma connect for all relations.
 *
 * @export
 * @async
 * @param {CreateBookingInput} input
 * @returns {Promise<Booking>}
 */
export async function createBooking(input: CreateBookingInput): Promise<Booking> {
	try {
		const tel = composeTelephone(input);

		return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			// guard module
			const mod = await tx.reservation_module.findUnique({
				where: { reservation_module_id: input.reservation_module_id },
				select: { reservation_module_id: true },
			});
			if (!mod) throw new Error('Reservation module not found');

			const customerId = await resolveOrCreateCustomer(tx, {
				reservation_module_id: input.reservation_module_id,
				customer_id: input.customer_id ?? undefined,
				first_name: input.first_name ?? undefined,
				last_name: input.last_name ?? undefined,
				email: input.email ?? undefined,
				telephone: tel ?? undefined,
			});
			// TODO: check if booking slot is still empty before creating
			const created = await tx.booking.create({
				data: {
					status: input.status,
					comment: input.comment ?? null,
					price_cents: input.price_cents ?? null,
					start_time: input.start_time ? new Date(input.start_time) : null,
					end_time: input.end_time ? new Date(input.end_time) : null,

					reservation_module: { connect: { reservation_module_id: input.reservation_module_id } },
					service: { connect: { service_id: input.service_id } },
					customer: { connect: { customer_id: customerId } },

					location: input.location_id ? { connect: { location_id: input.location_id } } : undefined,
					employee: input.assigned_employee_id
						? { connect: { employee_id: input.assigned_employee_id } }
						: undefined,
					parent_booking: input.parent_booking_id
						? { connect: { booking_id: input.parent_booking_id } }
						: undefined,
				},
			});

			await tx.booking_history_log.create({
				data: {
					status: created.status,
					type: 'created',
					title: 'Booking Created',
					description: input.comment ?? null,
					booking: { connect: { booking_id: created.booking_id } },
				},
			});

			return created as Booking;
		});
	} catch (error) {
		throwPrisma('Error creating booking', error);
	}
}

/**
 * Update a booking using UpdateBookingInput. Will connect to provided customer_id,
 * otherwise patch the currently linked customer (or create one if missing and fields provided).
 *
 * @export
 * @async
 * @param {UpdateBookingInput} input
 * @returns {Promise<Booking>}
 */
export async function updateBooking(input: UpdateBookingInput): Promise<Booking> {
	try {
		const tel = composeTelephone(input);

		return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			const existing = await tx.booking.findUnique({
				where: { booking_id: input.booking_id },
				select: { booking_id: true, reservation_module_id: true, customer_id: true },
			});
			if (!existing) throw new Error('Booking not found');

			if (input.reservation_module_id && input.reservation_module_id !== existing.reservation_module_id) {
				throw new Error('Cannot move booking across reservation modules');
			}

			// Handle customer linkage / patch
			if (input.customer_id) {
				await tx.booking.update({
					where: { booking_id: input.booking_id },
					data: { customer: { connect: { customer_id: input.customer_id } } },
				});
			} else if (
				input.first_name !== undefined ||
				input.last_name !== undefined ||
				input.email !== undefined ||
				tel !== undefined
			) {
				if (existing.customer_id) {
					await tx.customers.update({
						where: { customer_id: existing.customer_id },
						data: {
							first_name: input.first_name ?? undefined,
							last_name: input.last_name ?? undefined,
							email: input.email ?? undefined,
							telephone: tel ?? undefined,
						},
					});
				} else {
					const newCustomerId = await resolveOrCreateCustomer(tx, {
						reservation_module_id: existing.reservation_module_id,
						first_name: input.first_name ?? undefined,
						last_name: input.last_name ?? undefined,
						email: input.email ?? undefined,
						telephone: tel ?? undefined,
					});
					await tx.booking.update({
						where: { booking_id: input.booking_id },
						data: { customer: { connect: { customer_id: newCustomerId } } },
					});
				}
			}

			const updated = await tx.booking.update({
				where: { booking_id: input.booking_id },
				data: {
					status: input.status ?? undefined,
					comment: input.comment ?? undefined,
					price_cents: input.price_cents ?? undefined,
					start_time: input.start_time ? new Date(input.start_time) : undefined,
					end_time: input.end_time ? new Date(input.end_time) : undefined,

					reservation_module: input.reservation_module_id
						? { connect: { reservation_module_id: input.reservation_module_id } }
						: undefined,
					service: input.service_id ? { connect: { service_id: input.service_id } } : undefined,
					location:
						input.location_id !== undefined
							? input.location_id
								? { connect: { location_id: input.location_id } }
								: { disconnect: true }
							: undefined,
					employee:
						input.assigned_employee_id !== undefined
							? input.assigned_employee_id
								? { connect: { employee_id: input.assigned_employee_id } }
								: { disconnect: true }
							: undefined,
					parent_booking:
						input.parent_booking_id !== undefined
							? input.parent_booking_id
								? { connect: { booking_id: input.parent_booking_id } }
								: { disconnect: true }
							: undefined,
				},
			});

			if (input.status !== undefined) {
				await tx.booking_history_log.create({
					data: {
						status: updated.status,
						type: 'updated',
						title: 'Booking Updated',
						description: input.comment ?? null,
						booking: { connect: { booking_id: updated.booking_id } },
					},
				});
			}

			return updated as Booking;
		});
	} catch (error) {
		throwPrisma('Error updating booking', error);
	}
}

/**
 * Delete a booking.
 *
 * @export
 * @async
 * @param {{ booking_id: string }} input
 * @returns {Promise<Booking>}
 */
export async function deleteBooking(input: { booking_id: string }): Promise<Booking> {
	try {
		return (await prisma.booking.delete({ where: { booking_id: input.booking_id } })) as Booking;
	} catch (error) {
		throwPrisma('Error deleting booking', error);
	}
}

/**
 * Get booking by id (with relations + condensed history).
 *
 * @export
 * @async
 * @param {{ booking_id: string }} input
 * @returns {Promise<(Booking & { history: Pick<BookingHistoryLog, 'booking_history_id' | 'status' | 'created_at'>[] }) | null>}
 */
export async function getBookingById(input: { booking_id: string }): Promise<
	| (Booking & {
			history: Pick<BookingHistoryLog, 'booking_history_id' | 'status' | 'created_at'>[];
	  })
	| null
> {
	try {
		const row = await prisma.booking.findUnique({
			where: { booking_id: input.booking_id },
			include: {
				customer: true,
				location: true,
				service: true,
				employee: true,
				booking_history_log: {
					select: { booking_history_id: true, status: true, created_at: true },
					orderBy: { created_at: 'desc' },
				},
			},
		});
		if (!row) return null;
		const { booking_history_log, ...rest } = row;
		return { ...(rest as Booking), history: booking_history_log };
	} catch (error) {
		throwPrisma('Error fetching booking by id', error);
	}
}

/**
 * List bookings for a reservation module (no cursor).
 *
 * @export
 * @async
 * @param {ListBookingsParams} params
 * @returns {Promise<Booking[]>}
 */
export async function listBookingsByReservationModuleId(params: ListBookingsParams): Promise<Booking[]> {
	try {
		const { reservation_module_id, status, from, to, location_id, employee_id, limit, offset } = params;

		return (await prisma.booking.findMany({
			where: {
				reservation_module_id,
				...(status && status.length ? { status: { in: status } } : {}),
				...(from || to
					? {
							start_time: {
								...(from ? { gte: from } : {}),
								...(to ? { lte: to } : {}),
							},
						}
					: {}),
				...(location_id ? { location_id } : {}),
				...(employee_id ? { assigned_employee_id: employee_id } : {}),
			},
			orderBy: [{ created_at: 'desc' }, { booking_id: 'desc' }],
			...(limit != null ? { take: limit } : {}),
			...(offset != null ? { skip: offset } : {}),
		})) as Booking[];
	} catch (error) {
		throwPrisma('Error listing bookings', error);
	}
}

/**
 * Create a booking history log entry.
 *
 * @export
 * @async
 * @param {CreateBookingHistoryLogInput} input
 * @returns {Promise<BookingHistoryLog>}
 */
export async function createBookingHistoryLog(input: CreateBookingHistoryLogInput): Promise<BookingHistoryLog> {
	try {
		const row = await prisma.booking_history_log.create({
			data: {
				status: input.status,
				comment: input.comment ?? null,
				type: input.type ?? null,
				title: input.title ?? null,
				description: input.description ?? null,
				booking: { connect: { booking_id: input.booking_id } },
				user: input.user_id ? { connect: { user_id: input.user_id } } : undefined,
			},
		});
		return row as BookingHistoryLog;
	} catch (error) {
		throwPrisma('Error creating booking history log', error);
	}
}

export default {
	createBooking,
	updateBooking,
	deleteBooking,
	getBookingById,
	listBookingsByReservationModuleId,
	createBookingHistoryLog,
};
