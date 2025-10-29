import { Response } from 'express';

import LocationDao from '../../dao/reservation/Location.ts';
import AddressDao from '../../dao/Address.js';
import { ValidatedRequest } from '../../types/validatedRequest.ts';
import { CreateLocationInput, UpdateLocationInput } from '../../types/reservation/Location';

/**
 * GET /reservation/locations
 * @tag Reservation
 * @summary Get all reservation locations for a business
 * @description Retrieves all reservation locations for a specific business.
 * @operationId getReservationLocations
 * @response 200 - Reservation locations retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving locations
 * @prisma_model location
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
 * @bodyContent {object} application/json
 * @response 201 - Location created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating location
 * @prisma_model location
 * @prisma_model address
 */
export async function createLocation(req: ValidatedRequest<CreateLocationInput>, res: Response): Promise<void> {
	try {
		let locationData = req.body;
		let reservationModuleId = req.user?.reservation_module_id as string;
		let address = await AddressDao.findAddress(locationData.address.latitude, locationData.address.longitude);
		if (!address) {
			let newAddress = await AddressDao.addAddress({
				address: locationData.address.address,
				latitude: locationData.address.latitude,
				longitude: locationData.address.longitude,
			});
			locationData.address_id = newAddress.address_id;
			let location = await LocationDao.createLocation(locationData, reservationModuleId);
			res.status(201).json(location);
		} else {
			locationData.address_id = address.address_id;
			let location = await LocationDao.createLocation(locationData, reservationModuleId);
			res.status(201).json(location);
		}
	} catch (error) {
		res.status(500).json({ message: 'Error creating location', error });
	}
}

/**
 * PUT /reservation/locations/:location_id
 * @tag Reservation
 * @summary Update a reservation location
 * @description Updates an existing reservation location.
 * @operationId updateReservationLocation
 * @pathParam {string} location_id - The ID of the location to update.
 * @bodyContent {object} application/json
 * @response 200 - Location updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Location not found
 * @response 500 - Error updating location
 * @prisma_model location
 * @prisma_model address
 */
export async function updateLocation(
	req: ValidatedRequest<UpdateLocationInput, { location_id: string }>,
	res: Response
): Promise<void> {
	try {
		let locationId = req.params.location_id;
		let locationData = req.body;
		let check = locationData?.address ? locationData?.address : false;
		if (check) {
			let address = await AddressDao.findAddress(check?.latitude, check?.longitude);
			if (!address) {
				let newAddress = await AddressDao.addAddress({
					address: check.address,
					latitude: check.latitude,
					longitude: check.longitude,
				});
				locationData.address_id = newAddress.address_id;
				let location = await LocationDao.updateLocation(locationId, locationData);
				res.status(200).json(location);
			} else {
				locationData.address_id = address.address_id;
				let location = await LocationDao.updateLocation(locationId, locationData);
				res.status(200).json(location);
			}
		} else {
			let location = await LocationDao.updateLocation(locationId, locationData);
			res.status(200).json(location);
		}
	} catch (error) {
		res.status(500).json({ message: 'Error updating location', error });
	}
}

/**
 * DELETE /reservation/locations/:location_id
 * @tag Reservation
 * @summary Delete a reservation location
 * @description Deletes a reservation location by its ID.
 * @operationId deleteReservationLocation
 * @pathParam {string} location_id - The ID of the location to delete.
 * @response 204 - Location deleted successfully
 * @response 404 - Location not found
 * @response 500 - Error deleting location
 * @prisma_model location
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
 * GET /reservation/locations/:location_id
 * @tag Reservation
 * @summary Get a reservation location by ID
 * @description Retrieves a reservation location by its ID.
 * @operationId getReservationLocationById
 * @pathParam {string} location_id - The ID of the location to retrieve.
 * @response 200 - Location retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Location not found
 * @response 500 - Error retrieving location
 * @prisma_model location
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

/**
 * GET /reservation/locations/schedule-list
 * @tag Reservation
 * @summary Get all reservation locations with schedules with schedules
 * @description Retrieves all reservation locations with their schedules.
 * @operationId getLocationsWithSchedules
 * @response 200 - Reservation locations with schedules retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving locations with schedules
 * @prisma_model location
 * @prisma_model schedule
 */
export async function getLocationsWithSchedules(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let locations = await LocationDao.getLocationsByReservationModuleIdWithSchedules(reservationModuleId);
		res.status(200).json(locations);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving locations with schedules', error });
	}
}

export default {
	getLocations,
	createLocation,
	updateLocation,
	deleteLocation,
	getLocationById,
	getLocationsWithSchedules,
};
