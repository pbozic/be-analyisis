import prisma from '../../prisma/prisma';
import type {
	LocationDAOResponse,
	CreateLocationRequest,
	UpdateLocationRequest,
	LocationWithSchedulesDAOResponse,
} from '../../schemas/dto/reservations/location/location.dto.js';

/**
 * Retrieves all locations for a given reservation module.
 * @param {string} reservationModuleId - The ID of the reservation module to retrieve locations for.
 * @returns {Promise<LocationDAOResponse[]>} A promise that resolves to an array of locations.
 * @throws {Error} If there is an error retrieving the locations.
 */
export async function getLocationsByReservationModuleId(reservationModuleId: string): Promise<LocationDAOResponse[]> {
	try {
		let locations = await prisma.location.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				reservation_module: true,
				address: true,
			},
		});
		return locations;
	} catch (error) {
		throw new Error('Error retrieving locations');
	}
}

/**
 * Creates a new location.
 * @param {CreateLocationRequest} locationData - The data for the new location.
 * @returns {Promise<LocationDAOResponse>} A promise that resolves to the created location.
 * @throws {Error} If there is an error creating the location.
 */
export async function createLocation(
	locationData: CreateLocationRequest,
	reservation_module_id: string
): Promise<LocationDAOResponse> {
	try {
		let location = await prisma.location.create({
			data: {
				name: locationData.name,
				phone: locationData.phone,
				color: locationData.color,
				accepts_online: locationData.accepts_online,
				closed_on_holidays: locationData.closed_on_holidays,
				working_days: locationData.working_days,
				reservation_module: {
					connect: { reservation_module_id: reservation_module_id },
				},
				address: {
					connect: { address_id: locationData.address_id },
				},
			},
		});
		return location;
	} catch (error) {
		throw new Error('Error creating location');
	}
}

/**
 * Updates an existing location.
 * @param {string} locationId - The ID of the location to update.
 * @param {UpdateLocationRequest} locationData - The data to update the location with.
 * @returns {Promise<LocationDAOResponse>} A promise that resolves to the updated location.
 * @throws {Error} If there is an error updating the location.
 */
export async function updateLocation(
	locationId: string,
	locationData: UpdateLocationRequest
): Promise<LocationDAOResponse> {
	try {
		let location = await prisma.location.update({
			where: { location_id: locationId },
			data: {
				name: locationData.name,
				phone: locationData.phone,
				color: locationData.color,
				accepts_online: locationData.accepts_online,
				closed_on_holidays: locationData.closed_on_holidays,
				working_days: locationData.working_days,
				address_id: locationData.address_id,
			},
		});
		return location;
	} catch (error) {
		throw new Error('Error updating location');
	}
}

/**
 * Deletes a location by its ID.
 * @param {string} locationId - The ID of the location to delete.
 * @returns {Promise<void>} A promise that resolves when the location is deleted.
 * @throws {Error} If there is an error deleting the location.
 */
export async function deleteLocation(locationId: string): Promise<void> {
	try {
		await prisma.location.delete({
			where: { location_id: locationId },
		});
	} catch (error) {
		throw new Error('Error deleting location');
	}
}

/**
 * Retrieves a location by its ID.
 * @param {string} locationId - The ID of the location to retrieve.
 * @returns {Promise<LocationDAOResponse | null>} A promise that resolves to the retrieved location.
 * @throws {Error} If there is an error retrieving the location.
 */
export async function getLocationById(locationId: string): Promise<LocationDAOResponse | null> {
	try {
		let location = await prisma.location.findUnique({
			where: { location_id: locationId },
			include: {
				reservation_module: true,
				address: true,
			},
		});
		return location;
	} catch (error) {
		throw new Error('Error retrieving location');
	}
}

/**
 * Retrieves locations by reservation module ID with schedules.
 * @param {string} reservationModuleId - The ID of the reservation module.
 * @returns {Promise<LocationWithSchedulesDAOResponse[]>} A promise that resolves to an array of locations with schedules.
 * @throws {Error} If there is an error retrieving the locations.
 */
export async function getLocationsByReservationModuleIdWithSchedules(
	reservationModuleId: string
): Promise<LocationWithSchedulesDAOResponse[]> {
	try {
		let locations = await prisma.location.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				reservation_module: true,
				schedules: true,
			},
		});
		return locations;
	} catch (error) {
		throw new Error('Error retrieving locations with schedules');
	}
}

export default {
	getLocationsByReservationModuleId,
	getLocationById,
	createLocation,
	updateLocation,
	deleteLocation,
	getLocationsByReservationModuleIdWithSchedules,
};
