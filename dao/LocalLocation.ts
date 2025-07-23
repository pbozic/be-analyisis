import { addresses, business_local_locations } from '@prisma/client';

import prisma from '../prisma/prisma.js';

const getAllLocalLocations = async () => {
	try {
		return await prisma.local_locations.findMany({
			where: { address_id: { not: undefined } },
			include: { address: true },
		});
	} catch (error) {
		throw new Error(`Error fetching all local locations: ${error}`);
	}
};

const createLocation = async (address: addresses) => {
	try {
		const localLocation = await prisma.local_locations.create({
			data: {
				address: {
					connect: {
						address_id: address.address_id,
					},
				},
			},
			include: { address: true },
		});
		return localLocation;
	} catch (error) {
		throw new Error(`Error creating local location: ${error}`);
	}
};

const createBusinessLocalLocation = async (businessId: string, localLocationId: string, time: string) => {
	try {
		const businessLocalLocation = await prisma.business_local_locations.create({
			data: {
				business: { connect: { business_id: businessId } },
				local_location: { connect: { local_location_id: localLocationId } },
				time: new Date(time),
			},
			include: {
				local_location: {
					include: { address: true },
				},
			},
		});
		return businessLocalLocation;
	} catch (error) {
		throw new Error(`Error creating business local location: ${error}`);
	}
};

const updateBusinessLocalLocation = async (locationId: string, time: Partial<business_local_locations>) => {
	try {
		const updatedLocation = await prisma.business_local_locations.update({
			where: { business_local_location_id: locationId },
			data: { time },
			include: { local_location: { include: { address: true } } },
		});
		return updatedLocation;
	} catch (error) {
		throw new Error(`Error updating business local location: ${error}`);
	}
};

export { createLocation, createBusinessLocalLocation, getAllLocalLocations, updateBusinessLocalLocation };
export default {
	createLocation,
	createBusinessLocalLocation,
	getAllLocalLocations,
	updateBusinessLocalLocation,
};
