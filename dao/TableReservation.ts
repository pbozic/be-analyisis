import { RESERVATION_STATUS } from '@prisma/client';
import { integer } from '@elastic/elasticsearch/lib/api/types.js';

import prisma from '../prisma/prisma.js';
import { DOCUMENT_TYPE } from '../lib/constants.js';
import { TableReservationDetail, TableReservationBase } from '../schemas/dto/TableReservation/table-reservation.dto.js';
import { CreateReservationRequest } from '../schemas/dto/TableReservation/tableReservation.validators.js';

/**
 * Get reservations with optional args and includes for business and user.
 *
 * @param {object} args - Prisma findMany args (where, orderBy, etc.).
 * @returns {Promise<object[]>} Reservations.
 */

/**
 * Retrieve reservations with optional prisma args and include relations.
 *
 * @param {object} [args] - Optional Prisma findMany args (where, orderBy, include, etc.).
 * @returns {Promise<TableReservationBase | []>} Array of reservation records (raw Prisma payload).
 */
export async function getReservations(args?: any): Promise<TableReservationBase | []> {
	try {
		return await prisma.reservations.findMany({
			...args,
			include: {
				table_reservations: {
					include: {
						business: true,
					},
				},
				user: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving reservations:', error);
		throw new Error(String(error));
	}
}

/**
 * Resolve the reservations identifier for a given business.
 *
 * @param {string} business_id - Business UUID to lookup.
 * @returns {Promise<TableReservationBase | null>} The reservation module id or null if not found.
 */
export async function getReservationsbyBusinessId(business_id: string): Promise<TableReservationBase | null> {
	try {
		const reservation = await prisma.reservation.findMany({
			where: { table_reservations: { business_id: business_id } },
			include: {
				table_reservations: {
					include: {
						business: true,
					},
				},
			},
		});
		return reservation ? (reservation as any).reservation_id : null;
	} catch (error) {
		console.error('Error retrieving reservation ID by business ID:', error);
		throw new Error(String(error));
	}
}

/**
 * Get the next upcoming (or in-progress) reservation for a user that is not completed or rejected.
 * Excludes reservations older than two hours.
 *
 * @param {string} user_id - User ID to search reservations for.
 * @returns {Promise<TableReservationDetail | null>} The found reservation converted to DTO (or null).
 */
export async function getReservationIfNotCompleted(user_id: string): Promise<TableReservationDetail | null> {
	try {
		const now = new Date();
		const twoHoursBeforeNow = new Date(now.getTime() - 2 * 60 * 60 * 1000);
		const reservation = await prisma.reservations.findFirst({
			orderBy: [
				{
					datetime: 'asc',
				},
			],
			where: {
				user_id: user_id,
				status: {
					notIn: ['TABLE_RESERVATION_COMPLETED', 'TABLE_RESERVATION_REJECTED'],
				},
				datetime: {
					gte: twoHoursBeforeNow,
				},
			},
			include: {
				table_reservations: {
					include: {
						business: {
							select: {
								business_id: true,
								name: true,
								email: true,
								telephone: true,
								address: true,
								documents: {
									where: {
										document_type: { in: [DOCUMENT_TYPE.LOGO, DOCUMENT_TYPE.BANNER] },
									},
									include: {
										files: true,
									},
								},
							},
						},
					},
				},
			},
		});

		if (reservation) {
			const documents = reservation?.table_reservations?.business?.documents as any | undefined;
			const businessDetails = reservation?.table_reservations?.business_details as any | undefined;

			let logo: string | null = null;
			let banner: string | null = null;

			if (documents && Array.isArray(documents)) {
				for (let d of documents) {
					if (d.document_type === 'LOGO') {
						logo = d.files[0].url;
					} else if (d.document_type === 'BANNER') {
						banner = d.files[0].url;
					}
				}
			}
			if (businessDetails) {
				businessDetails.logo = logo;
				businessDetails.banner = banner;
			}
			return reservation;
		} else {
			return null;
		}
	} catch (e: any) {
		console.error('Error fetching reservation:', e);
		throw new Error(e?.message ?? String(e));
	}
}

/**
 * Find a reservation by its reservation_id including business and user relations.
 *
 * @param {string} reservation_id - UUID of the reservation.
 * @returns {Promise<TableReservationBase | null>} The reservation record or null if not found.
 */
export async function getReservationById(reservation_id: string): Promise<TableReservationBase | null> {
	try {
		return await prisma.reservations.findUnique({
			where: {
				reservation_id: reservation_id,
			},
			include: {
				table_reservations: {
					include: {
						business: true,
					},
				},
				user: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving reservation:', error);
		throw new Error(String(error));
	}
}

/**
 * Resolve the table_reservations_module identifier for a given business.
 *
 * @param {string} business_id - Business UUID to lookup.
 * @returns {Promise<string | null>} The reservation module id or null if not found.
 */
export async function getReservationIdbyBusinessId(business_id: string): Promise<string | null> {
	try {
		const reservation = await prisma.table_reservations_module.findFirst({
			where: { business_id },
			select: { id: true },
		});
		return reservation ? (reservation as any).reservation_id : null;
	} catch (error) {
		console.error('Error retrieving reservation ID by business ID:', error);
		throw new Error(String(error));
	}
}

/**
 * Create a new reservation and include nested table_reservations.business documents.
 * This function flattens logo/banner URLs onto the returned nested business for convenience.
 *
 * @param {CreateReservationRequest|any} reservationData - Reservation payload.
 * @returns {Promise<TableReservationDetail | null>} The created reservation record (raw Prisma payload) or null.
 */
export async function createReservation(
	reservationData: CreateReservationRequest | any
): Promise<TableReservationDetail | null> {
	try {
		const reservation = await prisma.reservations.create({
			data: {
				...reservationData,
			},
			include: {
				table_reservations: {
					include: {
						business: {
							select: {
								business_id: true,
								name: true,
								email: true,
								telephone: true,
								address: true,
								documents: {
									where: {
										document_type: { in: [DOCUMENT_TYPE.LOGO, DOCUMENT_TYPE.BANNER] },
									},
									include: {
										files: true,
									},
								},
							},
						},
					},
				},
			},
		});
		if (reservation) {
			const documents = reservation?.table_reservations?.business?.documents as any | undefined;
			const businessDetails = reservation?.table_reservations?.business_details as any | undefined;

			let logo: string | null = null;
			let banner: string | null = null;

			if (documents && Array.isArray(documents)) {
				for (let d of documents) {
					if (d.document_type === 'LOGO') {
						logo = d.files[0].url;
					} else if (d.document_type === 'BANNER') {
						banner = d.files[0].url;
					}
				}
			}
			if (businessDetails) {
				businessDetails.logo = logo;
				businessDetails.banner = banner;
			}
			return reservation;
		} else {
			return null;
		}
	} catch (e: any) {
		console.error('Error fetching reservation:', e);
		throw new Error(e?.message ?? String(e));
	}
}

/**
 * Update the status of a reservation.
 *
 * @param {string} reservation_id - UUID of reservation to update.
 * @param {RESERVATION_STATUS} status - New reservation status.
 * @returns {Promise<TableReservationBase | null>} The updated reservation record.
 */
export async function updateReservationStatus(
	reservation_id: string,
	status: RESERVATION_STATUS
): Promise<TableReservationBase | null> {
	try {
		return await prisma.reservations.update({
			where: {
				reservation_id: reservation_id,
			},
			data: {
				status: status,
			},
		});
	} catch (error) {
		console.error('Error updating reservation status:', error);
		throw new Error(String(error));
	}
}

/**
 * Set or update the table number for a reservation.
 *
 * @param {string} reservation_id - UUID of reservation to update.
 * @param {number|string} table - Table identifier (number or string).
 * @returns {Promise<TableReservationBase | null>} The updated reservation record.
 */
export async function addTableNumber(
	reservation_id: string,
	table: integer | string
): Promise<TableReservationBase | null> {
	try {
		return await prisma.reservations.update({
			where: {
				reservation_id: reservation_id,
			},
			data: {
				table: table,
			},
		});
	} catch (error) {
		console.error('Error updating reservation table number:', error);
		throw new Error(String(error));
	}
}

/**
 * Delete a reservation by its ID.
 *
 * @param {string} reservation_id - UUID of the reservation to delete.
 * @returns {Promise<TableReservationBase | null>} The deleted reservation record.
 */
export async function deleteReservation(reservation_id: string): Promise<TableReservationBase | null> {
	try {
		return await prisma.reservations.delete({
			where: {
				reservation_id: reservation_id,
			},
		});
	} catch (error) {
		console.error('Error deleting reservation:', error);
		throw new Error(String(error));
	}
}

export default {
	getReservations,
	getReservationById,
	getReservationsbyBusinessId,
	createReservation,
	updateReservationStatus,
	deleteReservation,
	addTableNumber,
	getReservationIfNotCompleted,
	getReservationIdbyBusinessId,
};
