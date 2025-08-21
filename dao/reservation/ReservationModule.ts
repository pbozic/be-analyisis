import crypto from 'crypto';

import type { Prisma as TPrisma } from '@prisma/client';

import prisma from '../../prisma/prisma';
import type {
	ReservationModule,
	UpdateReservationModuleInput,
	UpdateReservationSettingsInput,
} from '../../types/reservation/ReservationModule.ts';

async function generateUniqueReservationHash(tx: TPrisma.TransactionClient | null): Promise<string> {
	let unique = false;
	let public_link_hash: string;
	const prisma_client = tx || prisma;

	while (!unique) {
		// Generate a 16-char random string (base36: [0-9a-z])
		public_link_hash = crypto.randomBytes(8).toString('hex').slice(0, 16);

		const existing = await prisma_client.reservation_module.findUnique({
			where: { public_link_hash },
		});

		if (!existing) {
			unique = true;
		}
	}

	return public_link_hash!;
}

/**
 * Retrieves a reservation module by its ID.
 */
export async function getReservationModuleById(
	reservationModuleId: string,
	tx?: TPrisma.TransactionClient
): Promise<ReservationModule | null> {
	const prisma_client = tx || prisma;
	try {
		return await prisma_client.reservation_module.findUnique({
			where: { reservation_module_id: reservationModuleId },
			include: {
				business: true,
				locations: true,
				services: true,
				employees: true,
			},
		});
	} catch {
		throw new Error('Error retrieving reservation module');
	}
}

/**
 * Retrieves a reservation module by its business ID.
 */
export async function getReservationModuleByBusinessId(
	businessId: string,
	tx?: TPrisma.TransactionClient
): Promise<ReservationModule | null> {
	const prisma_client = tx || prisma;
	try {
		return await prisma_client.reservation_module.findUnique({
			where: { business_id: businessId },
			include: { business: true },
		});
	} catch {
		throw new Error('Error retrieving reservation module by business ID');
	}
}

/**
 * Creates a new reservation module.
 */
export async function createReservationModule(
	business_id: string,
	tx?: TPrisma.TransactionClient
): Promise<ReservationModule> {
	const prisma_client = tx || prisma;
	try {
		return await prisma_client.reservation_module.create({
			data: {
				public_link_hash: await generateUniqueReservationHash(tx || null),
				business: { connect: { business_id } },
			},
		});
	} catch {
		throw new Error('Error creating reservation module');
	}
}

/**
 * Updates an existing reservation module.
 */
export async function updateReservationModule(
	reservationModuleId: string,
	data: UpdateReservationModuleInput,
	tx?: TPrisma.TransactionClient
): Promise<ReservationModule> {
	const prisma_client = tx || prisma;
	try {
		return await prisma_client.reservation_module.update({
			where: { reservation_module_id: reservationModuleId },
			data: {
				hours_before_reschedule: data.hours_before_reschedule,
				hours_before_cancel: data.hours_before_cancel,
				publicly_visible: data.publicly_visible,
				subscription_id: data.subscription_id,
				subscription_active_until: data.subscription_active_until,
				subscription_expires_at: data.subscription_expires_at,
			},
		});
	} catch {
		throw new Error('Error updating reservation module');
	}
}

/**
 * Updates an existing reservation module.
 */
export async function updateReservationModuleSettings(
	reservationModuleId: string,
	data: UpdateReservationSettingsInput,
	tx?: TPrisma.TransactionClient
): Promise<ReservationModule> {
	const prisma_client = tx || prisma;
	try {
		return await prisma_client.reservation_module.update({
			where: { reservation_module_id: reservationModuleId },
			data: {
				hours_before_reschedule: data.hours_before_reschedule,
				hours_before_cancel: data.hours_before_cancel,
				publicly_visible: data.publicly_visible,
			},
		});
	} catch {
		throw new Error('Error updating reservation module');
	}
}

/**
 * Deletes a reservation module by its ID.
 */
export async function deleteReservationModule(
	reservationModuleId: string,
	tx?: TPrisma.TransactionClient
): Promise<void> {
	const prisma_client = tx || prisma;
	try {
		await prisma_client.reservation_module.delete({
			where: { reservation_module_id: reservationModuleId },
		});
	} catch {
		throw new Error('Error deleting reservation module');
	}
}

/**
 * Retrieves a reservation module by its public link hash.
 */
export async function getReservationModuleByPublicLinkHash(
	hash: string,
	tx?: TPrisma.TransactionClient
): Promise<ReservationModule | null> {
	const prisma_client = tx || prisma;
	try {
		return await prisma_client.reservation_module.findUnique({
			where: { public_link_hash: hash },
			select: {
				reservation_module_id: true,
				public_link_hash: true,
				business_id: true,
				hours_before_reschedule: true,
				hours_before_cancel: true,

				// include employees (skip phone fields)
				employees: {
					select: {
						employee_id: true,
						reservation_module_id: true,
						first_name: true,
						last_name: true,
						email: true,
						business_users_id: true,
						created_at: true,
						deleted_at: true,
						assignments: true,
						schedules: true,
						bookings: true,
						schedule_slots: true,
					},
				},
				services: true,
				locations: true,
			},
		});
	} catch {
		throw new Error('Error retrieving reservation module by public link hash');
	}
}

export default {
	getReservationModuleById,
	getReservationModuleByBusinessId,
	createReservationModule,
	updateReservationModule,
	updateReservationModuleSettings,
	deleteReservationModule,
	getReservationModuleByPublicLinkHash,
};
