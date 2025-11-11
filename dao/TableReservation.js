import prisma from '../prisma/prisma.js';
import { DOCUMENT_TYPE } from '../lib/constants.js';
/**
 * Get reservations with optional args and includes for business and user.
 *
 * @param {object} args - Prisma findMany args (where, orderBy, etc.).
 * @returns {Promise<object[]>} Reservations.
 */
const getReservations = async (args) => {
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
		throw new Error(error);
	}
};
/**
 * Get the next upcoming or in-progress reservation for a user (not completed/rejected), excluding older than 2 hours.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<object|null>} Reservation with business logo/banner flattened, or null.
 */
async function getReservationIfNotCompleted(user_id) {
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
			const nestedBusiness = reservation.table_reservations?.business;

			let logo = null;
			let banner = null;

			if (nestedBusiness && Array.isArray(nestedBusiness?.documents)) {
				for (let d of nestedBusiness.documents) {
					if (d.document_type === 'LOGO') {
						logo = d.files[0].url;
					} else if (d.document_type === 'BANNER') {
						banner = d.files[0].url;
					}
				}
			}
			nestedBusiness?.logo = logo;
			nestedBusiness?.banner = banner;
			return reservation;
		} else {
			return null;
		}
	} catch (e) {
		console.error('Error fetching reservation:', e);
		throw new Error(e.message);
	}
}
/**
 * Get a reservation by id including business and user.
 *
 * @param {string} reservation_id - Reservation ID.
 * @returns {Promise<object|null>} Reservation or null.
 */
const getReservationById = async (reservation_id) => {
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
		throw new Error(error);
	}
};

/**
 * Resolve the table_reservations_module id for a business.
 *
 * @param {string} business_id - Business UUID to look up.
 * @returns {Promise<string|null>} The table_reservations_module.id if found, otherwise null.
 */
const getReservationIdbyBusinessId = async (business_id) => {
	try {
		const reservation = await prisma.table_reservations_module.findFirst({
			where: { business_id },
			select: { id: true },
		});
		return reservation ? reservation.reservation_id : null;
	} catch (error) {
		console.error('Error retrieving reservation ID by business ID:', error);
		throw new Error(error);
	}
};

/**
 * Create a reservation and include business documents; flattens logo/banner URLs.
 *
 * @param {object} reservationData - Reservation payload.
 * @returns {Promise<object|null>} Created reservation with flattened business images, or null.
 */
const createReservation = async (reservationData) => {
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
			const nestedBusiness = reservation.table_reservations?.business;
			let logo = null;
			let banner = null;
			if (nestedBusiness && Array.isArray(nestedBusiness.documents)) {
				// Check if documents is an array before iterating
				for (let d of nestedBusiness.documents) {
					if (d.document_type === 'LOGO') {
						logo = d.files[0].url;
					} else if (d.document_type === 'BANNER') {
						banner = d.files[0].url;
					}
				}
			}
			nestedBusiness?.logo = logo;
			nestedBusiness?.banner = banner;
			return reservation;
		} else {
			return null;
		}
	} catch (error) {
		console.error('Error creating reservation:', error);
		throw new Error(error);
	}
};
/**
 * Update a reservation's status.
 *
 * @param {string} reservation_id - Reservation ID.
 * @param {string} status - New status.
 * @returns {Promise<object>} Updated reservation.
 */
const updateReservationStatus = async (reservation_id, status) => {
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
		throw new Error(error);
	}
};
/**
 * Set the table number on a reservation.
 *
 * @param {string} reservation_id - Reservation ID.
 * @param {string|number} table - Table identifier.
 * @returns {Promise<object>} Updated reservation.
 */
const addTableNumber = async (reservation_id, table) => {
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
		throw new Error(error);
	}
};
/**
 * Delete a reservation by id.
 *
 * @param {string} reservation_id - Reservation ID.
 * @returns {Promise<object>} Deleted reservation.
 */
const deleteReservation = async (reservation_id) => {
	try {
		return await prisma.reservations.delete({
			where: {
				reservation_id: reservation_id,
			},
		});
	} catch (error) {
		console.error('Error deleting reservation:', error);
		throw new Error(error);
	}
};
export { getReservations };
export { getReservationById };
export { createReservation };
export { updateReservationStatus };
export { deleteReservation };
export { addTableNumber };
export { getReservationIfNotCompleted };
export { getReservationIdbyBusinessId };
export default {
	getReservations,
	getReservationById,
	createReservation,
	updateReservationStatus,
	deleteReservation,
	addTableNumber,
	getReservationIfNotCompleted,
	getReservationIdbyBusinessId,
};
