import { Request, Response } from 'express';

import * as ReservationDao from '../dao/TableReservation.ts';
import socket from '../socket.js';
import prisma from '../prisma/prisma.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import type {
	CreateReservationRequest,
	AddTableNumberRequest,
	UpdateReservationStatusRequest,
} from '../schemas/dto/TableReservation/tableReservation.validators.ts';

const { UserSockets, io } = socket as any;

/**
 * GET /reservations
 * @tag Reservations
 * @summary Get a list of reservations
 * @description Returns a list of reservations along with their business and user information.
 * @operationId getReservations
 * @response 200 - Successful operation, returns a list of reservations
 * @responseContent {TableReservationBase} 200.application/json
 * @response 400 - Error occurred while obtaining the reservation list
 * @prisma_model reservations
 */
export async function getReservations(req: Request, res: Response): Promise<void> {
	try {
		const reservations = await ReservationDao.getReservations({});
		res.status(200).json(reservations);
	} catch (error: any) {
		console.error('Error listing reservations:', error);
		res.status(400).json({ error: 'Error listing reservations', detail: error?.message });
	}
}

/**
 * GET /reservations/:reservation_id
 * @tag Reservations
 * @summary Get a reservation by ID
 * @description Retrieves detailed information about a specific reservation by its ID.
 * @operationId getReservationById
 * @pathParam {string} reservation_id - The ID of the reservation to retrieve
 * @response 200 - Successful operation, returns detailed reservation information
 * @responseContent {TableReservationBase} 200.application/json
 * @response 404 - Reservation not found
 * @response 400 - Error retrieving reservation information
 * @prisma_model reservations
 */
export async function getReservationById(
	req: ValidatedRequest<never, { reservation_id: string }>,
	res: Response
): Promise<void> {
	try {
		const reservation = await ReservationDao.getReservationById(req.params.reservation_id);
		if (reservation) {
			res.status(200).json(reservation);
		} else {
			res.status(404).json({ error: 'Reservation not found' });
		}
	} catch (error: any) {
		console.error('Error retrieving reservation:', error);
		res.status(400).json({ error: 'Error retrieving reservation information', detail: error?.message });
	}
}

/**
 * GET /reservations/business/:business_id
 * @tag Reservations
 * @summary Get all reservations for a business by its business ID
 * @description Retrieves all reservations for a specific business by its business ID.
 * @operationId getReservationsByBusinessId
 * @pathParam {string} business_id - The ID of the business to retrieve reservations for
 * @response 200 - Successful operation, returns a list of reservations
 * @responseContent {TableReservationBase[]} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving reservations
 * @prisma_model reservations
 */
export async function getReservationsByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const reservations = await ReservationDao.getReservations(req.params.business_id);
		res.status(200).json(reservations);
	} catch (error: any) {
		console.error('Error retrieving reservations by business ID:', error);
		res.status(400).json({ error: 'Error retrieving reservations by business ID', detail: error?.message });
	}
}

/**
 * GET /reservations/active/:user_id
 * @tag Reservations
 * @summary Get active reservations orders.
 * @description This fetches the next upcoming or in-progress reservation for a user.
 * @operationId getActiveTableReservation
 * @pathParam {string} user_id - The ID of the user to retrieve active reservations for
 * @response 200 - Successful operation, returns a list of reservations
 * @responseContent {TableReservationDetail} 200.application/json
 * @response 404 - reservations not found
 * @response 400 - Error retrieving reservations
 * @prisma_model reservations
 */
export async function getActiveTableReservation(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<void> {
	const { user_id } = req.params;
	try {
		const activeReservations = await ReservationDao.getReservationIfNotCompleted(user_id);
		res.status(200).json(activeReservations);
	} catch (e: any) {
		console.error(e);
		res.status(500).json({ error: e?.message ?? String(e) });
	}
}

/**
 * POST /reservations/create
 * @tag Reservations
 * @summary Create a new reservation
 * @description Adds a new reservation to the database.
 * @operationId createReservation
 * @bodyContent {CreateReservation} application/json
 * @bodyRequired
 * @response 201 - Reservation created successfully
 * @responseContent {TableReservationDetail} 201.application/json
 * @response 400 - Error creating reservation
 * @prisma_model reservations
 * @prisma_model business_users
 */
export async function createReservation(req: ValidatedRequest<CreateReservationRequest>, res: Response): Promise<void> {
	const { reservation, user_id } = req.body;
	try {
		const { business_id, ...reservationWithoutBusiness } = reservation || {};

		// build the shape your DAO/prisma expects (flatten or keep as-is)
		const table_reservation_id = await ReservationDao.getReservationIdbyBusinessId(business_id);

		const reservationData = {
			...reservationWithoutBusiness, // seats, datetime, table_reservation_id, etc.
			user_id,
			table_reservation_id,
		} as any;
		console.log(reservationData, 'reservationData');
		const newReservation = await ReservationDao.createReservation(reservationData);
		// Get all business users associated with the business
		const businessUsers = await prisma.business_users.findMany({
			where: {
				business_id: reservation.business_id,
			},
			include: {
				users: true,
			},
		});
		// Notify all business users about the new reservation
		businessUsers.forEach((businessUser: any) => {
			const userSocket = UserSockets.get(businessUser.user_id);
			if (userSocket && newReservation) {
				io.to('reservations_' + reservation.business_id).emit('new_reservation', newReservation);
			}
		});
		res.status(201).json(newReservation);
	} catch (error: any) {
		console.error('Error creating new reservation:', error);
		res.status(400).json({ error: 'Error creating new reservation', detail: error?.message });
	}
}

/**
 * POST /reservations/table
 * @tag Reservations
 * @summary Update table number
 * @description Updates the table number of a specific reservation.
 * @operationId addTableNumber
 * @bodyContent {AddTableNumber} application/json
 * @bodyRequired
 * @response 200 - Reservation table updated successfully
 * @responseContent {TableReservationBase} 200.application/json
 * @response 400 - Error updating reservation table number
 * @prisma_model reservations
 */
export async function addTableNumber(req: ValidatedRequest<AddTableNumberRequest>, res: Response): Promise<void> {
	try {
		const updatedReservation = await ReservationDao.addTableNumber(req.body.reservation_id, req.body.table);
		// Notify the user about the reservation table number
		if (updatedReservation) {
			const userSocket = UserSockets.get(updatedReservation.user_id);
			if (userSocket) {
				io.to('reservation_' + updatedReservation.reservation_id).emit(
					'added_table_number',
					updatedReservation
				);
			}
		}
		res.status(200).json(updatedReservation);
	} catch (error: any) {
		console.error('Error updating reservation table number:', error);
		res.status(400).json({ error: 'Error updating reservation table number', detail: error?.message });
	}
}

/**
 * PATCH /reservations/status
 * @tag Reservations
 * @summary Update reservation status
 * @description Updates the status of a specific reservation.
 * @operationId updateReservationStatus
 * @bodyContent {UpdateReservationStatus} application/json
 * @bodyRequired
 * @response 200 - Reservation status updated successfully
 * @responseContent {TableReservationBase} 200.application/json
 * @response 400 - Error updating reservation status
 * @prisma_model reservations
 */
export async function updateReservationStatus(
	req: ValidatedRequest<UpdateReservationStatusRequest>,
	res: Response
): Promise<void> {
	try {
		const updatedReservation = await ReservationDao.updateReservationStatus(
			req.body.reservation_id,
			req.body.status
		);
		// Notify the user about the reservation status change
		if (updatedReservation) {
			const userSocket = UserSockets.get(updatedReservation.user_id);
			if (userSocket) {
				io.to('reservation_' + updatedReservation.reservation_id).emit(
					'reservation_status_change',
					updatedReservation
				);
			}
		}
		res.status(200).json(updatedReservation);
	} catch (error: any) {
		console.error('Error updating reservation status:', error);
		res.status(400).json({ error: 'Error updating reservation status', detail: error?.message });
	}
}

/**
 * DELETE /reservations/:reservationId
 * @tag Reservations
 * @summary Delete a reservation
 * @description Deletes a specific reservation by its ID.
 * @operationId deleteReservation
 * @pathParam {string} reservationId - The ID of the reservation to delete
 * @response 200 - Reservation deleted successfully
 * @responseContent {TableReservationBase} 200.application/json
 * @response 400 - Error deleting reservation
 * @prisma_model reservations
 */
export async function deleteReservation(req: Request, res: Response): Promise<void> {
	try {
		await ReservationDao.deleteReservation(req.params.reservation_id as string);
		res.status(200).json({ message: 'Reservation deleted successfully' });
	} catch (error: any) {
		console.error('Error deleting reservation:', error);
		res.status(400).json({ error: 'Error deleting reservation', detail: error?.message });
	}
}

// Individual named exports are provided via the exported function declarations above.
// The default export below exposes the same handlers in an object shape for older JS consumers.

export default {
	getReservations,
	getReservationById,
	getReservationsByBusinessId,
	createReservation,
	updateReservationStatus,
	deleteReservation,
	addTableNumber,
	getActiveTableReservation,
};
