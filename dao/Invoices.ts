import { randomUUID } from 'crypto';

import type {
	business_premise as BusinessPremise,
	electronic_device as ElectronicDevice,
	device_assignment as DeviceAssignment,
	vehicles as Vehicle,
} from '@prisma/client';
import { PREMISE_TYPE } from '@prisma/client';

import prisma from '../prisma/prisma.js';

/**
 * Create a business premise.
 *
 * @param {string} transport_module_id
 * @param {Partial<{ name: string | null; validity_date: Date | null; special_notes: string | null; premise_type: PREMISE_TYPE; }>} data
 * @returns {Promise<BusinessPremise>}
 */
export async function createBusinessPremise(
	transport_module_id: string,
	data: Partial<{
		name: string | null;
		validity_date: Date | null;
		special_notes: string | null;
		premise_type: PREMISE_TYPE;
	}> = {}
): Promise<BusinessPremise> {
	const payload = {
		business_premise_id: randomUUID(),
		transport_module_id,
		premise_type: data.premise_type ?? PREMISE_TYPE.A,
		name: data.name ?? null,
		validity_date: data.validity_date ?? null,
		special_notes: data.special_notes ?? null,
	};
	return await prisma.business_premise.create({ data: payload });
}
/**
 * Create an electronic device.
 *
 * @param {string} business_premise_id
 * @param {Partial<{ electronic_device_id: string; name: string | null; active: boolean }>} data
 * @returns {Promise<ElectronicDevice>}
 */
export async function createElectronicDevice(
	business_premise_id: string,
	data: Partial<{ electronic_device_id: string; name: string | null; active: boolean }> = {}
): Promise<ElectronicDevice> {
	const electronic_device_id = data.electronic_device_id || randomUUID();
	const payload = {
		business_premise_id,
		electronic_device_id,
		name: data.name ?? null,
		active: data.active ?? true,
	};
	return await prisma.electronic_device.create({ data: payload });
}
/**
 * Assign a device to a driver.
 *
 * @param {string} driver_id
 * @param {string} business_premise_id
 * @param {string} electronic_device_id
 * @param {Date} valid_from
 * @returns {Promise<DeviceAssignment>}
 */
export async function assignDeviceToDriver(
	driver_id: string,
	business_premise_id: string,
	electronic_device_id: string,
	valid_from: Date = new Date()
): Promise<DeviceAssignment> {
	return await prisma.device_assignment.create({
		data: { driver_id, business_premise_id, electronic_device_id, valid_from },
	});
}
/**
 * Link a business premise to a vehicle.
 *
 * @param {string} vehicle_id
 * @param {string} business_premise_id
 * @returns {Promise<Vehicle>}
 */
export async function linkPremiseToVehicle(vehicle_id: string, business_premise_id: string): Promise<Vehicle> {
	return await prisma.vehicles.update({ where: { vehicle_id }, data: { business_premise_id } });
}
/**
 * Disable an electronic device.
 *
 * @param {string} business_premise_id
 * @param {string} electronic_device_id
 * @returns {Promise<ElectronicDevice>}
 */
export async function disableElectronicDevice(
	business_premise_id: string,
	electronic_device_id: string
): Promise<ElectronicDevice> {
	return await prisma.electronic_device.update({
		where: { business_premise_id_electronic_device_id: { business_premise_id, electronic_device_id } },
		data: { active: false },
	});
}
/**
 * End a device assignment.
 *
 * @param {string} driver_id
 * @param {string} business_premise_id
 * @param {string} electronic_device_id
 * @returns {Promise<DeviceAssignment>}
 */
export async function endDeviceAssignment(
	driver_id: string,
	business_premise_id: string,
	electronic_device_id: string
): Promise<DeviceAssignment> {
	const latest = await prisma.device_assignment.findFirst({
		where: { driver_id, business_premise_id, electronic_device_id, valid_to: null },
		orderBy: { valid_from: 'desc' },
	});
	if (!latest) {
		throw new Error('No active device assignment found');
	}
	return await prisma.device_assignment.update({
		where: { device_assignment_id: latest.device_assignment_id },
		data: { valid_to: new Date() },
	});
}
/**
 * Confirm a business premise.
 *
 * @param {string} business_premise_id
 * @returns {Promise<BusinessPremise>}
 */
export async function confirmBusinessPremise(business_premise_id: string): Promise<BusinessPremise> {
	return await prisma.business_premise.update({
		where: { business_premise_id },
		data: { is_registered: true, registered_at: new Date() },
	});
}

export default {
	createBusinessPremise,
	createElectronicDevice,
	assignDeviceToDriver,
	linkPremiseToVehicle,
	disableElectronicDevice,
	endDeviceAssignment,
	confirmBusinessPremise,
};
