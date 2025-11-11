import { randomUUID } from 'crypto';

import type {
	business_premise as BusinessPremise,
	electronic_device as ElectronicDevice,
	device_assignment as DeviceAssignment,
	vehicles as Vehicle,
} from '@prisma/client';
import { PREMISE_TYPE } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import businessPremiseDefaultInclude from '../prisma/includes/businessPremise.js';
import electronicDeviceDefaultInclude from '../prisma/includes/electronicDevice.js';
import deviceAssignmentDefaultInclude from '../prisma/includes/deviceAssignment.js';
import vehiclesDefaultInclude from '../prisma/includes/vehicles.js';
import {
	toBusinessPremiseResponse,
	toElectronicDeviceResponse,
	toDeviceAssignmentResponse,
	toVehicleResponse,
} from '../schemas/dto/Invoices/invoice.mappers.js';
import type { BusinessPremiseWithIncludesPrisma } from '../prisma/includes/businessPremise.js';
import type { ElectronicDeviceWithIncludesPrisma } from '../prisma/includes/electronicDevice.js';
import type { DeviceAssignmentWithIncludesPrisma } from '../prisma/includes/deviceAssignment.js';
import type { VehicleWithIncludesPrisma } from '../prisma/includes/vehicles.js';

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
	const created = await prisma.business_premise.create({ data: payload });
	const row = await prisma.business_premise.findUnique({
		where: { business_premise_id: created.business_premise_id },
		include: businessPremiseDefaultInclude,
	});
	if (!row) throw new Error('Failed to fetch created business premise');
	return toBusinessPremiseResponse(row as BusinessPremiseWithIncludesPrisma) as BusinessPremise;
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
	const created = await prisma.electronic_device.create({ data: payload });
	const row = await prisma.electronic_device.findUnique({
		where: { electronic_device_id: created.electronic_device_id },
		include: electronicDeviceDefaultInclude,
	});
	if (!row) throw new Error('Failed to fetch created electronic device');
	return toElectronicDeviceResponse(row as ElectronicDeviceWithIncludesPrisma) as ElectronicDevice;
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
	const created = await prisma.device_assignment.create({
		data: { driver_id, business_premise_id, electronic_device_id, valid_from },
	});
	const row = await prisma.device_assignment.findUnique({
		where: { device_assignment_id: created.device_assignment_id },
		include: deviceAssignmentDefaultInclude,
	});
	if (!row) throw new Error('Failed to fetch created device assignment');
	return toDeviceAssignmentResponse(row as DeviceAssignmentWithIncludesPrisma) as DeviceAssignment;
}
/**
 * Link a business premise to a vehicle.
 *
 * @param {string} vehicle_id
 * @param {string} business_premise_id
 * @returns {Promise<Vehicle>}
 */
export async function linkPremiseToVehicle(vehicle_id: string, business_premise_id: string): Promise<Vehicle> {
	const updated = await prisma.vehicles.update({
		where: { vehicle_id },
		data: { business_premise_id },
		include: vehiclesDefaultInclude,
	});
	return toVehicleResponse(updated as VehicleWithIncludesPrisma) as Vehicle;
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
	const updated = await prisma.electronic_device.update({
		where: { business_premise_id_electronic_device_id: { business_premise_id, electronic_device_id } },
		data: { active: false },
		include: electronicDeviceDefaultInclude,
	});
	return toElectronicDeviceResponse(updated as ElectronicDeviceWithIncludesPrisma) as ElectronicDevice;
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
	const updated = await prisma.device_assignment.update({
		where: { device_assignment_id: latest.device_assignment_id },
		data: { valid_to: new Date() },
		include: deviceAssignmentDefaultInclude,
	});
	return toDeviceAssignmentResponse(updated as DeviceAssignmentWithIncludesPrisma) as DeviceAssignment;
}
/**
 * Confirm a business premise.
 *
 * @param {string} business_premise_id
 * @returns {Promise<BusinessPremise>}
 */
export async function confirmBusinessPremise(business_premise_id: string): Promise<BusinessPremise> {
	const updated = await prisma.business_premise.update({
		where: { business_premise_id },
		data: { is_registered: true, registered_at: new Date() },
		include: businessPremiseDefaultInclude,
	});
	return toBusinessPremiseResponse(updated as BusinessPremiseWithIncludesPrisma) as BusinessPremise;
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
