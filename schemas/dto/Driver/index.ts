import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Driver Response DTOs ===
export {
	DriverRefSchema,
	DriverBaseSchema,
	DriverDetailSchema,
	VehicleDriversSchema,
	type DriverRef,
	type DriverBase,
	type DriverDetail,
	type VehicleDrivers,
	registerSchemas as registerDriverSchemas,
} from './driver.dto.js';

// === Driver Validators (Request Body, Query, Params) ===
export {
	UpdateDriverSchema,
	EditDriverSchema,
	UpdateDriverLocationSchema,
	UpdateDriverRideRequirementsSchema,
	UpdateDriverOnlineStatusSchema,
	ToggleDriverOrdersSchema,
	SetCurrentVehicleSchema,
	UpdateDriverDailyMealBusinessesSchema,
	CreateDriverSchema,
	HandleSosAlertSchema,
	SendComeToWorkNotificationSchema,
	AssignBusinessForDailyMealsToDriverSchema,
	CreateElectronicDeviceForPremiseSchema,
	UpdateDeviceAssignmentSchema,
	UnlinkDriverFromBusinessSchema,
	RegisterVehicleInvoicesSchema,
	DisableElectronicDeviceSchema,
	type UpdateDriverRequest,
	type EditDriverRequest,
	type UpdateDriverLocationRequest,
	type UpdateDriverRideRequirementsRequest,
	type UpdateDriverOnlineStatusRequest,
	type ToggleDriverOrdersRequest,
	type SetCurrentVehicleRequest,
	type UpdateDriverDailyMealBusinessRequest,
	type CreateDriverRequest,
	type HandleSosAlertRequest,
	type SendComeToWorkNotificationRequest,
	type AssignBusinessForDailyMealsToDriverRequest,
	type CreateElectronicDeviceForPremiseRequest,
	type UpdateDeviceAssignmentRequest,
	type UnlinkDriverFromBusinessRequest,
	type RegisterVehicleInvoicesRequest,
	type DisableElectronicDeviceRequest,
	registerSchemas as registerDriverValidatorSchemas,
} from './driver.validators.js';

// === Driver Mappers ===
export { toDriverDetail } from './driver.mappers.js';

// === Schema Registration ===
import { registerSchemas as registerDriverSchemas } from './driver.dto.js';
import { registerSchemas as registerDriverValidatorSchemas } from './driver.validators.js';

export function registerSchemas(registry: OpenAPIRegistry) {
	registerDriverSchemas(registry);
	registerDriverValidatorSchemas(registry);
}
