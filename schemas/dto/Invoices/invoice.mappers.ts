import { BusinessPremiseResponseSchema } from '../BusinessPremise/businessPremise.dto.js';
import { ElectronicDeviceResponseSchema } from '../ElectronicDevice/electronicDevice.dto.js';
import { DeviceAssignmentResponseSchema } from '../DeviceAssignment';
import type { BusinessPremiseResponse } from '../BusinessPremise/index.js';
import type { ElectronicDeviceResponse } from '../ElectronicDevice/index.js';
import type { DeviceAssignmentResponse } from '../DeviceAssignment/index.js';
import type { BusinessPremiseWithIncludesPrisma } from '../../../prisma/includes/businessPremise.js';
import type { ElectronicDeviceWithIncludesPrisma } from '../../../prisma/includes/electronicDevice.js';
import type { DeviceAssignmentWithIncludesPrisma } from '../../../prisma/includes/deviceAssignment.js';

export function toBusinessPremiseResponse(row: BusinessPremiseWithIncludesPrisma): BusinessPremiseResponse {
	return BusinessPremiseResponseSchema.parse({
		...row,
		validity_date: row.validity_date ? row.validity_date.toISOString() : null,
		registered_at: row.registered_at ? row.registered_at.toISOString() : null,
		created_at: row.created_at.toISOString(),
		updated_at: row.updated_at.toISOString(),
	});
}

export function toElectronicDeviceResponse(
	row: ElectronicDeviceWithIncludesPrisma | unknown
): ElectronicDeviceResponse {
	return ElectronicDeviceResponseSchema.parse(row);
}

export function toDeviceAssignmentResponse(
	row: DeviceAssignmentWithIncludesPrisma | unknown
): DeviceAssignmentResponse {
	return DeviceAssignmentResponseSchema.parse(row);
}

export default { toBusinessPremiseResponse, toElectronicDeviceResponse, toDeviceAssignmentResponse };
