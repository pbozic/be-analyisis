import prisma from '../../prisma/prisma';
import type { Location, CreateLocationInput, UpdateLocationInput } from '../../types/reservation/Location.ts';

/**
 * Retrieves all locations for a given business ID.
 * @param {string} businessId - The ID of the business to retrieve locations for.
 * @returns {Promise<Location[]>} A promise that resolves to an array of locations.
 * @throws {Error} If there is an error retrieving the locations.
 */
export async function getLocationsByReservationModuleId(reservationModuleId: string): Promise<Location[]> {
	try {
		let locations = await prisma.location.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				reservation_module: true,
			},
		});
		return locations;
	} catch (error) {
		throw new Error('Error retrieving locations');
	}
}

/**
 * Creates a new location.
 * @param {CreateLocationInput} locationData - The data for the new location.
 * @returns {Promise<Location>} A promise that resolves to the created location.
 * @throws {Error} If there is an error creating the location.
 */
export async function createLocation(
	locationData: CreateLocationInput,
	reservation_module_id: string
): Promise<Location> {
	try {
		let location = await prisma.location.create({
			data: {
				name: locationData.name,
				address: locationData.address,
				phone: locationData.phone,
				color: locationData.color,
				accepts_online: locationData.accepts_online,
				closed_on_holidays: locationData.closed_on_holidays,
				working_days: locationData.working_days,
				reservation_module: {
					connect: { reservation_module_id: reservation_module_id },
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
 * @param {UpdateLocationInput} locationData - The data to update the location with.
 * @returns {Promise<Location>} A promise that resolves to the updated location.
 * @throws {Error} If there is an error updating the location.
 */
export async function updateLocation(locationId: string, locationData: UpdateLocationInput): Promise<Location> {
	try {
		let location = await prisma.location.update({
			where: { location_id: locationId },
			data: {
				name: locationData.name,
				address: locationData.address,
				phone: locationData.phone,
				color: locationData.color,
				accepts_online: locationData.accepts_online,
				closed_on_holidays: locationData.closed_on_holidays,
				working_days: locationData.working_days,
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
 * @returns {Promise<Location>} A promise that resolves to the retrieved location.
 * @throws {Error} If there is an error retrieving the location.
 */
export async function getLocationById(locationId: string): Promise<Location | null> {
	try {
		let location = await prisma.location.findUnique({
			where: { location_id: locationId },
			include: {
				reservation_module: true,
			},
		});
		return location;
	} catch (error) {
		throw new Error('Error retrieving location');
	}
}

export default {
	getLocationsByReservationModuleId,
	getLocationById,
	createLocation,
	updateLocation,
	deleteLocation,
};
