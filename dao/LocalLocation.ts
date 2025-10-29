import { addresses } from '@prisma/client';

import prisma from '../prisma/prisma.js';
/**
 * Fetch all local locations.
 *
 * @returns {Promise<Array>} - The list of all local locations.
 */
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
/**
 * Create a new local location with the given address.
 *
 * @param {addresses} address
 * @returns {Promise<Object>} - The created local location.
 */
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
/**
 * Create a business local location association.
 *
 * @param {string} businessId
 * @param {string} localLocationId
 * @param {string} time
 * @returns {Promise<Object>} - The created business local location association.
 */
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
/**
 * Update business local location time and associated orders.
 *
 * @param {string} locationId
 * @param {Date} time
 * @returns {Promise<Object>}
 */
const updateBusinessLocalLocation = async (locationId: string, time: Date) => {
	try {
		const updatedLocation = await prisma.business_local_locations.update({
			where: {
				business_local_location_id: locationId,
			},
			data: {
				time,
			},
			include: {
				local_location: { include: { address: true } },
				orders: true,
			},
		});
		for (const order of updatedLocation.orders) {
			const updatedDetails = {
				...order.details,
				ready_for_pickup_at: time,
				customer_expected_delivery_at: order.details.duration
					? new Date(time.getTime() + order.details.duration * 1000)
					: time,
			};
			await prisma.delivery_orders.update({
				where: {
					order_id: order.order_id,
				},
				data: {
					details: updatedDetails,
					scheduled: {
						...order.scheduled,
						time: updatedLocation.time,
					},
				},
			});
		}
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
