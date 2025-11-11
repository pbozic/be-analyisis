import { BusinessPremiseResponseSchema } from '../BusinessPremise/businessPremise.dto.js';
import { ElectronicDeviceResponseSchema } from '../ElectronicDevice/electronicDevice.dto.js';
import { DeviceAssignmentResponseSchema } from '../../../types/invoices/DeviceAssignment';
import { VehicleResponseSchema } from '../../../types/vehicles/Vehicle';
import type { BusinessPremiseWithIncludesPrisma } from '../../../prisma/includes/businessPremise.js';
import type { ElectronicDeviceWithIncludesPrisma } from '../../../prisma/includes/electronicDevice.js';
import type { DeviceAssignmentWithIncludesPrisma } from '../../../prisma/includes/deviceAssignment.js';
import type { VehicleWithIncludesPrisma } from '../../../prisma/includes/vehicles.js';

export function toBusinessPremiseResponse(row: BusinessPremiseWithIncludesPrisma) {
    return BusinessPremiseResponseSchema.parse(row);
}

export function toElectronicDeviceResponse(row: ElectronicDeviceWithIncludesPrisma) {
    return ElectronicDeviceResponseSchema.parse(row);
}

export function toDeviceAssignmentResponse(row: DeviceAssignmentWithIncludesPrisma) {
    return DeviceAssignmentResponseSchema.parse(row);
}

export function toVehicleResponse(row: VehicleWithIncludesPrisma) {
    return VehicleResponseSchema.parse(row as any);
}

export default { toBusinessPremiseResponse, toElectronicDeviceResponse, toDeviceAssignmentResponse, toVehicleResponse };
