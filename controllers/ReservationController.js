const ReservationDao = require("../dao/Reservation");
const { UserSockets, io } = require('../socket');

/**
 * GET /reservations
 * @tag Reservations
 * @summary Get a list of reservations
 * @description Returns a list of reservations along with their business and user information.
 * @operationId getReservations
 * @response 200 - Successful operation, returns a list of reservations
 * @responseContent {Reservation[]} 200.application/json
 * @response 400 - Error occurred while obtaining the reservation list
 */
async function getReservations(req, res) {
	try {
		const reservations = await ReservationDao.getReservations({});
		res.status(200).json(reservations);
	} catch (error) {
		console.error("Error listing reservations:", error);
		res.status(400).json({ error: "Error listing reservations", detail: error.message });
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
 * @responseContent {Reservation} 200.application/json
 * @response 404 - Reservation not found
 * @response 400 - Error retrieving reservation information
 */
async function getReservationById(req, res) {
	try {
		const reservation = await ReservationDao.getReservationById(req.params.reservation_id);
		if (reservation) {
			res.status(200).json(reservation);
		} else {
			res.status(404).json({ error: "Reservation not found" });
		}
	} catch (error) {
		console.error("Error retrieving reservation:", error);
		res.status(400).json({ error: "Error retrieving reservation information", detail: error.message });
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
 * @responseContent {Reservation[]} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving reservations
 */
async function getReservationsByBusinessId(req, res) {
	try {
		const reservations = await ReservationDao.getReservations({
			where: {
				business_id: req.params.business_id,
			},
			include: {
				business: true,
				user: true,
			},
		});
		if (reservations.length > 0) {
			res.status(200).json(reservations);
		} else {
			res.status(404).json({ error: "No reservations found for this business" });
		}
	} catch (error) {
		console.error("Error retrieving reservations by business ID:", error);
		res.status(400).json({ error: "Error retrieving reservations by business ID", detail: error.message });
	}
}


/**
 * POST /reservations/create
 * @tag Reservations
 * @summary Create a new reservation
 * @description Adds a new reservation to the database.
 * @operationId createReservation
 * @bodyContent {Reservation} application/json
 * @bodyRequired
 * @response 201 - Reservation created successfully
 * @responseContent {Reservation} 201.application/json
 * @response 400 - Error creating reservation
 */
async function createReservation(req, res) {
	try {
		const reservationData = {
			...req.body,
			user_id: req.user.user_id,
		};
		const newReservation = await ReservationDao.createReservation(reservationData);

		// Get all business users associated with the business
		const businessUsers = await prisma.business_users.findMany({
			where: {
				business_id: req.body.business_id,
			},
			include: {
				users: true,
			},
		});

		// Notify all business users about the new reservation
		businessUsers.forEach(businessUser => {
			const userSocket = UserSockets.get(businessUser.user_id);
			if (userSocket) {
				io.to("reservation_" + newReservation.reservation_id).emit('new_reservation', newReservation);
			}
		});

		res.status(201).json(newReservation);
	} catch (error) {
		console.error("Error creating new reservation:", error);
		res.status(400).json({ error: "Error creating new reservation", detail: error.message });
	}
}

/**
 * PATCH /reservations/status
 * @tag Reservations
 * @summary Update reservation status
 * @description Updates the status of a specific reservation.
 * @operationId updateReservationStatus
 * @pathParam {string} reservationId - The ID of the reservation to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Reservation status updated successfully
 * @responseContent {Reservation} 200.application/json
 * @response 400 - Error updating reservation status
 */
async function updateReservationStatus(req, res) {
	try {
		const updatedReservation = await ReservationDao.updateReservationStatus(req.body.reservation_id, req.body.status);

		// Notify the user about the reservation status change
		const userSocket = UserSockets.get(updatedReservation.user_id);
		if (userSocket) {
			io.to("reservation_" + updatedReservation.reservation_id).emit('reservation_status_change', updatedReservation);
		}

		res.status(200).json(updatedReservation);
	} catch (error) {
		console.error("Error updating reservation status:", error);
		res.status(400).json({ error: "Error updating reservation status", detail: error.message });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error deleting reservation
 */
async function deleteReservation(req, res) {
	try {
		await ReservationDao.deleteReservation(req.params.reservation_id);
		res.status(200).json({ message: "Reservation deleted successfully" });
	} catch (error) {
		console.error("Error deleting reservation:", error);
		res.status(400).json({ error: "Error deleting reservation", detail: error.message });
	}
}

module.exports = {
	getReservations,
	getReservationById,
	getReservationsByBusinessId,
	createReservation,
	updateReservationStatus,
	deleteReservation,
};