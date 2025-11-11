import {
	BusinessLocalLocationBase,
	BusinessLocalLocationDetail,
	LocalLocationDetail,
	toLocalLocationDetail,
	toBusinessLocalLocationDetail,
} from '../schemas/dto/Stores/localLocation.dto.js';
import { Address } from '../types/addresses/Address.js';
import prisma from '../prisma/prisma.js';
import localLocationsDefaultInclude, {
	businessLocalLocationsDefaultInclude,
	LocalLocationsWithIncludesPrisma,
	BusinessLocalLocationsWithIncludesPrisma,
} from '../prisma/includes/localLocations.js';
/**
 * Fetch all local locations.
 *
 * @returns {Promise<LocalLocationDetail[]>} - The list of all local locations.
 */
const getAllLocalLocations = async (): Promise<LocalLocationDetail[]> => {
	try {
		const rows = await prisma.local_locations.findMany({
			where: { address_id: { not: undefined } },
			include: localLocationsDefaultInclude,
		});
		return (rows as LocalLocationsWithIncludesPrisma[]).map((r) => toLocalLocationDetail(r));
	} catch (error) {
		throw new Error(`Error fetching all local locations: ${error}`);
	}
};

/**
 * Create a new local location with the given address.
 *
 * @param {Address} address
 * @returns {Promise<LocalLocationDetail>} - The created local location.
 */
const createLocation = async (address: Address): Promise<LocalLocationDetail> => {
	try {
		const localLocation = await prisma.local_locations.create({
			data: { address: { connect: { address_id: address.address_id } } },
			include: localLocationsDefaultInclude,
		});
		return toLocalLocationDetail(localLocation as LocalLocationsWithIncludesPrisma);
	} catch (error) {
		throw new Error(`Error creating local location: ${error}`);
	}
};
/**
 * Create a business local location association.
 *
 * @param {string} storeId
 * @param {string} localLocationId
 * @param {string} time
 * @returns {Promise<BusinessLocalLocationBase>} - The created business local location association.
 */
const createBusinessLocalLocation = async (
	storeId: string,
	localLocationId: string,
	time: string
): Promise<BusinessLocalLocationBase> => {
	try {
		const businessLocalLocation = await prisma.business_local_locations.create({
			data: {
				business: { connect: { stores_id: storeId } },
				local_location: { connect: { local_location_id: localLocationId } },
				time: new Date(time),
			},
			include: businessLocalLocationsDefaultInclude,
		});
		return toBusinessLocalLocationDetail(businessLocalLocation as BusinessLocalLocationsWithIncludesPrisma);
	} catch (error) {
		throw new Error(`Error creating business local location: ${error}`);
	}
};
/**
 * Update business local location time and associated orders.
 *
 * @param {string} locationId
 * @param {Date} time
 * @returns {Promise<BusinessLocalLocationDetail>} - The updated business local location.
 */
const updateBusinessLocalLocation = async (locationId: string, time: Date): Promise<BusinessLocalLocationDetail> => {
	try {
		const updatedLocation = await prisma.business_local_locations.update({
			where: { business_local_location_id: locationId },
			data: { time },
			include: businessLocalLocationsDefaultInclude,
		});
		// Update related orders' details/scheduled time
		for (const order of (updatedLocation.orders || []) as Array<{ order_id: string; details?: any }>) {
			const updatedDetails = {
				...order.details,
				ready_for_pickup_at: time,
				customer_expected_delivery_at:
					order.details && order.details.duration
						? new Date(time.getTime() + order.details.duration * 1000)
						: time,
			};
			await prisma.delivery_orders.update({
				where: { order_id: order.order_id },
				data: { details: updatedDetails, scheduled_at: (updatedLocation as any).time },
			});
		}
		return toBusinessLocalLocationDetail(updatedLocation as BusinessLocalLocationsWithIncludesPrisma);
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
