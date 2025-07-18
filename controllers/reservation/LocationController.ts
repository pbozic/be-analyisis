import { Response } from 'express';

import LocationDao from '../../dao/reservation/Location.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';
import { CreateLocationInput, UpdateLocationInput } from '../../types/reservation/Location';

/**
 * GET /reservation/locations
 * @tag Reservation
 * @summary Get all reservation locations for a business
 * @description Retrieves all reservation locations for a specific business.
 * @operationId getReservationLocations
 * @response 200 - Reservation locations retrieved successfully
 * @responseContent {Location[]} 200.application/json
 * @response 500 - Error retrieving locations
 */
export async function getLocations(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let locations = await LocationDao.getLocationsByReservationModuleId(reservationModuleId);
		res.status(200).json(locations);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving locations', error });
	}
}

/**
 * POST /reservation/locations
 * @tag Reservation
 * @summary Create a new reservation location
 * @description Creates a new reservation location.
 * @operationId createReservationLocation
 * @requestBody {CreateLocationInput} requestBody - The location data to create.
 * @response 201 - Location created successfully
 * @responseContent {Location} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating location
 */
export async function createLocation(req: ValidatedRequest<CreateLocationInput>, res: Response): Promise<void> {
	try {
		let locationData = req.body;
		let reservationModuleId = req.user?.reservation_module_id as string;
		let location = await LocationDao.createLocation(locationData, reservationModuleId);
		res.status(201).json(location);
	} catch (error) {
		res.status(500).json({ message: 'Error creating location', error });
	}
}

/**
 * PUT /reservation/locations/{location_id}
 * @tag Reservation
 * @summary Update a reservation location
 * @description Updates an existing reservation location.
 * @operationId updateReservationLocation
 * @pathParam {string} location_id - The ID of the location to update.
 * @requestBody {UpdateLocationInput} requestBody - The data to update the location with.
 * @response 200 - Location updated successfully
 * @responseContent {Location} 200.application/json
 * @response 404 - Location not found
 * @response 500 - Error updating location
 */
export async function updateLocation(
	req: ValidatedRequest<UpdateLocationInput, { location_id: string }>,
	res: Response
): Promise<void> {
	try {
		let locationId = req.params.location_id;
		let locationData = req.body;
		let location = await LocationDao.updateLocation(locationId, locationData);
		res.status(200).json(location);
	} catch (error) {
		res.status(500).json({ message: 'Error updating location', error });
	}
}

/**
 * DELETE /reservation/locations/{location_id}
 * @tag Reservation
 * @summary Delete a reservation location
 * @description Deletes a reservation location by its ID.
 * @operationId deleteReservationLocation
 * @pathParam {string} location_id - The ID of the location to delete.
 * @response 204 - Location deleted successfully
 * @response 404 - Location not found
 * @response 500 - Error deleting location
 */
export async function deleteLocation(
	req: ValidatedRequest<null, { location_id: string }>,
	res: Response
): Promise<void> {
	try {
		let locationId = req.params.location_id as string;
		await LocationDao.deleteLocation(locationId);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting location', error });
	}
}
/**
 * GET /reservation/locations/{location_id}
 * @tag Reservation
 * @summary Get a reservation location by ID
 * @description Retrieves a reservation location by its ID.
 * @operationId getReservationLocationById
 * @pathParam {string} location_id - The ID of the location to retrieve.
 * @response 200 - Location retrieved successfully
 * @responseContent {Location} 200.application/json
 * @response 404 - Location not found
 * @response 500 - Error retrieving location
 */

export async function getLocationById(
	req: ValidatedRequest<null, { location_id: string }>,
	res: Response
): Promise<void> {
	try {
		let locationId = req.params.location_id as string;
		let location = await LocationDao.getLocationById(locationId);
		if (!location) {
			res.status(404).json({ message: 'Location not found' });
			return;
		}
		res.status(200).json(location);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving location', error });
	}
}

export default {
	getLocations,
	createLocation,
	updateLocation,
	deleteLocation,
	getLocationById,
};
