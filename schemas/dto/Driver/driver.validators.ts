import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp, GeoPoint } from '../../primitives.js';
import { BasicUserDataSchema, UserRoleAssignmentSchema } from '../User/user.js';
import { DriverBaseSchema } from './driver.dto.js';
import { LocationUpdateSchema } from '../Address/address.js';
import { DocumentDataSchema, FileUploadSchema } from '../Document/document.dto.js';
import { OptionalFullAddressSchema } from '../Address/address.js';

extendZodWithOpenApi(z);

// === Common Status Schemas (moved from common/Status.dto.ts) ===
// === Online Status Update ===
export const OnlineStatusUpdateSchema = z
	.object({
		online: z.boolean(),
	})
	.openapi({
		title: 'OnlineStatusUpdate',
		description: 'Schema for updating online status',
	});

// === Status Update ===
export const StatusUpdateSchema = z
	.object({
		status: z.string().min(1),
	})
	.openapi({
		title: 'StatusUpdate',
		description: 'Generic status update schema',
	});

// === Status Update with Reason ===
export const StatusUpdateWithReasonSchema = z
	.object({
		status: z.string().min(1),
		reason: z.string().min(1),
	})
	.openapi({
		title: 'StatusUpdateWithReason',
		description: 'Status update with reason',
	});

// === Status Update with ID ===
export const StatusUpdateWithIdSchema = z
	.object({
		id: UUID,
		status: z.string().min(1),
	})
	.openapi({
		title: 'StatusUpdateWithId',
		description: 'Status update with entity ID',
	});

// === Online Status Update with ID ===
export const OnlineStatusUpdateWithIdSchema = z
	.object({
		id: UUID,
		online: z.boolean(),
	})
	.openapi({
		title: 'OnlineStatusUpdateWithId',
		description: 'Online status update with entity ID',
	});

// === Active Status Update ===
export const ActiveStatusUpdateSchema = z
	.object({
		active: z.boolean(),
		reason: z.string().min(1),
	})
	.openapi({
		title: 'ActiveStatusUpdate',
		description: 'Active status update with reason',
	});

// === Disabled Status Update ===
export const DisabledStatusUpdateSchema = z
	.object({
		disabled: z.boolean(),
		reason: z.string().min(1),
	})
	.openapi({
		title: 'DisabledStatusUpdate',
		description: 'Disabled status update with reason',
	});

// === Type exports ===
export type OnlineStatusUpdate = z.infer<typeof OnlineStatusUpdateSchema>;
export type StatusUpdate = z.infer<typeof StatusUpdateSchema>;
export type StatusUpdateWithReason = z.infer<typeof StatusUpdateWithReasonSchema>;
export type StatusUpdateWithId = z.infer<typeof StatusUpdateWithIdSchema>;
export type OnlineStatusUpdateWithId = z.infer<typeof OnlineStatusUpdateWithIdSchema>;
export type ActiveStatusUpdate = z.infer<typeof ActiveStatusUpdateSchema>;
export type DisabledStatusUpdate = z.infer<typeof DisabledStatusUpdateSchema>;

// =======================
// Request Body Schemas
// =======================

// Used by: updateDriver (PATCH /drivers/update/:driver_id)
export const UpdateDriverSchema = z
	.lazy(() =>
		DriverBaseSchema.partial().omit({
			driver_id: true,
			user_id: true,
		})
	)
	.openapi({
		title: 'UpdateDriverRequest',
		description: 'Schema for updating driver information',
	});
export type UpdateDriverRequest = z.infer<typeof UpdateDriverSchema>;

// Used by: editDriver (PATCH /drivers/edit)
export const EditDriverSchema = z
	.object({
		user: z.lazy(() =>
			BasicUserDataSchema.extend({
				telephone_code: z.string().optional(),
			})
				.partial()
				.extend({
					user_id: UUID, // Required field
				})
		),
		driver: z.object({
			driver_id: UUID,
			transport_module_id: UUID,
			ride_requirements: z.any().optional(),
			regions: z.array(z.string()).optional(),
			delivers_daily_meals: z.boolean().optional(),
			handles_taxi_orders: z.boolean().optional(),
			handles_transfer_orders: z.boolean().optional(),
			handles_delivery_orders: z.boolean().optional(),
			handles_courier_orders: z.boolean().optional(),
		}),
		address: OptionalFullAddressSchema.extend({
			address_id: UUID.optional(),
		}).optional(),
		documents: z
			.array(
				z.object({
					document_id: UUID,
					documentData: DocumentDataSchema,
				})
			)
			.optional(),
		files: z
			.array(
				FileUploadSchema.extend({
					file_id: UUID.optional(),
					name: z.string().optional(),
					document_type: z.string().optional(),
				})
			)
			.optional(),
	})
	.openapi({
		title: 'EditDriverRequest',
		description: 'Schema for comprehensive driver data editing',
	});
export type EditDriverRequest = z.infer<typeof EditDriverSchema>;

// Used by: updateDriverLocation (PATCH /drivers/location)
export const UpdateDriverLocationSchema = z
	.object({
		location: LocationUpdateSchema,
	})
	.openapi({
		title: 'UpdateDriverLocationRequest',
		description: 'Schema for updating driver location with coordinates and metadata',
	});
export type UpdateDriverLocationRequest = z.infer<typeof UpdateDriverLocationSchema>;

// Used by: updateDriverRideRequirements (PATCH /drivers/ride_requirements)
export const UpdateDriverRideRequirementsSchema = z
	.object({
		driver_id: UUID,
		ride_requirements: z.string().min(1),
	})
	.openapi({
		title: 'UpdateDriverRideRequirementsRequest',
		description: 'Schema for updating driver ride requirements',
	});
export type UpdateDriverRideRequirementsRequest = z.infer<typeof UpdateDriverRideRequirementsSchema>;

// Used by: updateDriverOnlineStatus (PATCH /drivers/online)
export const UpdateDriverOnlineStatusSchema = OnlineStatusUpdateSchema.extend({
	driver_id: UUID,
}).openapi({
	title: 'UpdateDriverOnlineStatusRequest',
	description: 'Schema for setting driver online/offline status',
});
export type UpdateDriverOnlineStatusRequest = z.infer<typeof UpdateDriverOnlineStatusSchema>;

// Used by: toggleDriverOrders (PATCH /drivers/:driver_id/toggle_orders)
export const ToggleDriverOrdersSchema = z
	.object({
		types: z.object({
			taxi: z.boolean().optional(),
			transfer: z.boolean().optional(),
			delivery: z.boolean().optional(),
			cargo: z.boolean().optional(),
		}),
	})
	.openapi({
		title: 'ToggleDriverOrdersRequest',
		description: 'Schema for toggling driver order types',
	});
export type ToggleDriverOrdersRequest = z.infer<typeof ToggleDriverOrdersSchema>;

// Used by: setCurrentVehicle (PATCH /drivers/:driver_id/set_current_vehicle)
export const SetCurrentVehicleSchema = z
	.object({
		vehicle_id: UUID,
	})
	.openapi({
		title: 'SetCurrentVehicleRequest',
		description: 'Schema for setting driver current vehicle',
	});
export type SetCurrentVehicleRequest = z.infer<typeof SetCurrentVehicleSchema>;

// Used by: updateDriverDailyMealBusiness (PATCH /drivers/assign/:driver_id)
export const UpdateDriverDailyMealBusinessesSchema = z
	.object({
		ids: z.array(UUID),
	})
	.openapi({
		title: 'UpdateDriverDailyMealBusinessesRequest',
		description: 'Schema for connecting/disconnecting driver to daily meal businesses',
	});
export type UpdateDriverDailyMealBusinessRequest = z.infer<typeof UpdateDriverDailyMealBusinessesSchema>;

// Used by: unlinkDriverFromBusiness (PATCH /drivers/:driver_id/unlink) - No body needed
export const UnlinkDriverFromBusinessSchema = z.object({}).openapi({
	title: 'UnlinkDriverFromBusinessRequest',
	description: 'Schema for unlinking driver from business (no body required)',
});
export type UnlinkDriverFromBusinessRequest = z.infer<typeof UnlinkDriverFromBusinessSchema>;

// Used by: createDriver (POST /drivers/create)
export const CreateDriverSchema = z
	.object({
		user: z.object({
			data: z.lazy(() =>
				BasicUserDataSchema.extend({
					telephone_code: z.string(),
					user_roles: z.array(UserRoleAssignmentSchema).optional(),
				})
			),
			documents: z
				.array(
					z.object({
						documentData: DocumentDataSchema,
						files: z.array(FileUploadSchema),
					})
				)
				.optional(),
		}),
		driver: z.object({
			data: z.object({
				business_id: UUID,
				transport_module_id: UUID.optional(),
				ride_requirements: z.string().optional(),
				delivers_daily_meals: z.boolean().optional(),
				handles_taxi_orders: z.boolean().optional(),
				handles_transfer_orders: z.boolean().optional(),
				handles_delivery_orders: z.boolean().optional(),
				handles_courier_orders: z.boolean().optional(),
				online: z.boolean().optional(),
				available: z.boolean().optional(),
			}),
			documents: z
				.array(
					z.object({
						documentData: DocumentDataSchema,
						files: z.array(FileUploadSchema),
					})
				)
				.optional(),
		}),
	})
	.openapi({
		title: 'CreateDriverRequest',
		description: 'Schema for creating a new driver with user data and documents',
	});
export type CreateDriverRequest = z.infer<typeof CreateDriverSchema>;

// Used by: handleSosAlert (POST /drivers/sos)
export const HandleSosAlertSchema = z
	.object({
		driver_id: UUID.optional(),
		location: GeoPoint.optional(),
		message: z.string().optional(),
		timestamp: Timestamp.optional(),
		emergency_type: z.enum(['ACCIDENT', 'BREAKDOWN', 'SECURITY', 'MEDICAL', 'OTHER']).optional(),
	})
	.openapi({
		title: 'HandleSosAlertRequest',
		description: 'Schema for handling SOS alerts from drivers',
	});
export type HandleSosAlertRequest = z.infer<typeof HandleSosAlertSchema>;

// Used by: sendComeToWorkNotification (POST /drivers/come_to_work)
export const SendComeToWorkNotificationSchema = z
	.object({
		region: z.string().min(1),
	})
	.openapi({
		title: 'SendComeToWorkNotificationRequest',
		description: 'Schema for sending work notifications to drivers',
	});
export type SendComeToWorkNotificationRequest = z.infer<typeof SendComeToWorkNotificationSchema>;

// Used by: assignBusinessForDailyMealsToDriver (POST /drivers/daily_meals/business)
export const AssignBusinessForDailyMealsToDriverSchema = z
	.object({
		driver_id: UUID,
		daily_meals_module_id: UUID,
	})
	.openapi({
		title: 'AssignBusinessForDailyMealsToDriverRequest',
		description: 'Schema for assigning daily meals business to driver',
	});
export type AssignBusinessForDailyMealsToDriverRequest = z.infer<typeof AssignBusinessForDailyMealsToDriverSchema>;

// Used by: createElectronicDeviceForPremise (POST /drivers/:driver_id/premises/:business_premise_id/devices)
export const CreateElectronicDeviceForPremiseSchema = z
	.object({
		name: z.string().optional(),
		active: z.boolean().optional(),
		electronic_device_id: UUID.optional(),
		assign_to_driver: z.boolean().optional(),
		valid_from: Timestamp.optional(),
	})
	.openapi({
		title: 'CreateElectronicDeviceForPremiseRequest',
		description: 'Schema for creating electronic device for business premise',
	});
export type CreateElectronicDeviceForPremiseRequest = z.infer<typeof CreateElectronicDeviceForPremiseSchema>;

// Used by: disableElectronicDevice (PATCH /drivers/:driver_id/premises/:business_premise_id/devices/:electronic_device_id/disable) - No body needed
export const DisableElectronicDeviceSchema = z.object({}).openapi({
	title: 'DisableElectronicDeviceRequest',
	description: 'Schema for disabling electronic device (no body required)',
});
export type DisableElectronicDeviceRequest = z.infer<typeof DisableElectronicDeviceSchema>;

// Used by: updateDeviceAssignment (POST /drivers/:driver_id/premises/:business_premise_id/devices/:electronic_device_id/assignment)
export const UpdateDeviceAssignmentSchema = z
	.object({
		action: z.enum(['assign', 'unassign']),
		valid_from: Timestamp.optional(),
	})
	.openapi({
		title: 'UpdateDeviceAssignmentRequest',
		description: 'Schema for assigning or unassigning electronic device to driver',
	});
export type UpdateDeviceAssignmentRequest = z.infer<typeof UpdateDeviceAssignmentSchema>;

// Used by: registerVehicleInvoices (POST /drivers/:driver_id/vehicles/:vehicle_id/register-invoices) - No body needed
export const RegisterVehicleInvoicesSchema = z.object({}).openapi({
	title: 'RegisterVehicleInvoicesRequest',
	description: 'Schema for registering vehicle invoices (no body required)',
});
export type RegisterVehicleInvoicesRequest = z.infer<typeof RegisterVehicleInvoicesSchema>;

// =======================
// Path Parameter Schemas
// =======================

export const DriverIdParamsSchema = z
	.object({
		driver_id: UUID,
	})
	.openapi({
		title: 'DriverIdParams',
		description: 'Path parameters for driver ID',
	});
export type DriverIdParams = z.infer<typeof DriverIdParamsSchema>;

export const UserIdParamsSchema = z
	.object({
		user_id: UUID,
	})
	.openapi({
		title: 'DriverUserIdParams',
		description: 'Path parameters for user ID',
	});
export type UserIdParams = z.infer<typeof UserIdParamsSchema>;

export const BusinessIdParamsSchema = z
	.object({
		business_id: UUID,
	})
	.openapi({
		title: 'DriverBusinessIdParams',
		description: 'Path parameters for business ID',
	});
export type BusinessIdParams = z.infer<typeof BusinessIdParamsSchema>;

export const SetDriverHandleParamsSchema = z
	.object({
		driver_id: UUID,
		action: z.enum(['enable', 'disable']),
		type: z.enum(['taxi', 'transfer', 'delivery', 'cargo']),
	})
	.openapi({
		title: 'SetDriverHandleParams',
		description: 'Path parameters for setting driver handle',
	});
export type SetDriverHandleParams = z.infer<typeof SetDriverHandleParamsSchema>;

export const RegisterVehicleInvoicesParamsSchema = z
	.object({
		driver_id: UUID,
		vehicle_id: UUID,
	})
	.openapi({
		title: 'RegisterVehicleInvoicesParams',
		description: 'Path parameters for registering vehicle invoices',
	});
export type RegisterVehicleInvoicesParams = z.infer<typeof RegisterVehicleInvoicesParamsSchema>;

export const CreateElectronicDeviceParamsSchema = z
	.object({
		driver_id: UUID,
		business_premise_id: UUID,
	})
	.openapi({
		title: 'CreateElectronicDeviceParams',
		description: 'Path parameters for creating electronic device',
	});
export type CreateElectronicDeviceParams = z.infer<typeof CreateElectronicDeviceParamsSchema>;

export const DisableElectronicDeviceParamsSchema = z
	.object({
		driver_id: UUID,
		business_premise_id: UUID,
		electronic_device_id: UUID,
	})
	.openapi({
		title: 'DisableElectronicDeviceParams',
		description: 'Path parameters for disabling electronic device',
	});
export type DisableElectronicDeviceParams = z.infer<typeof DisableElectronicDeviceParamsSchema>;

export const UpdateDeviceAssignmentParamsSchema = z
	.object({
		driver_id: UUID,
		business_premise_id: UUID,
		electronic_device_id: UUID,
	})
	.openapi({
		title: 'UpdateDeviceAssignmentParams',
		description: 'Path parameters for updating device assignment',
	});
export type UpdateDeviceAssignmentParams = z.infer<typeof UpdateDeviceAssignmentParamsSchema>;

// =======================
// Query Parameter Schemas
// =======================

export const GetAvailableDriversQuerySchema = z
	.object({
		type: z.enum(['taxi', 'delivery', 'transfer', 'cargo']),
	})
	.openapi({
		title: 'GetAvailableDriversQuery',
		description: 'Query parameters for getting available drivers',
	});
export type GetAvailableDriversQuery = z.infer<typeof GetAvailableDriversQuerySchema>;

export const GetDriverHistoryLocationsQuerySchema = z
	.object({
		start_time: z.string().min(1),
		end_time: z.string().min(1),
	})
	.openapi({
		title: 'GetDriverHistoryLocationsQuery',
		description: 'Query parameters for getting driver location history',
	});
export type GetDriverHistoryLocationsQuery = z.infer<typeof GetDriverHistoryLocationsQuerySchema>;

export const GetDriverEarningsQuerySchema = z
	.object({
		start_date: z.string().date(),
		end_date: z.string().date(),
	})
	.openapi({
		title: 'GetDriverEarningsQuery',
		description: 'Query parameters for getting driver earnings',
	});
export type GetDriverEarningsQuery = z.infer<typeof GetDriverEarningsQuerySchema>;

export const GetDriverTotalEarningsQuerySchema = z
	.object({
		detailed: z.string().optional(),
	})
	.openapi({
		title: 'GetDriverTotalEarningsQuery',
		description: 'Query parameters for getting driver total earnings',
	});
export type GetDriverTotalEarningsQuery = z.infer<typeof GetDriverTotalEarningsQuerySchema>;

// =======================
// Schema Registration
// =======================

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register common status schemas
	registry.register('OnlineStatusUpdate', OnlineStatusUpdateSchema);
	registry.register('StatusUpdate', StatusUpdateSchema);
	registry.register('StatusUpdateWithReason', StatusUpdateWithReasonSchema);
	registry.register('StatusUpdateWithId', StatusUpdateWithIdSchema);
	registry.register('OnlineStatusUpdateWithId', OnlineStatusUpdateWithIdSchema);
	registry.register('ActiveStatusUpdate', ActiveStatusUpdateSchema);
	registry.register('DisabledStatusUpdate', DisabledStatusUpdateSchema);
	// Request body schemas
	registry.register('UpdateDriver', UpdateDriverSchema);
	registry.register('EditDriver', EditDriverSchema);
	registry.register('UpdateDriverLocation', UpdateDriverLocationSchema);
	registry.register('UpdateDriverRideRequirements', UpdateDriverRideRequirementsSchema);
	registry.register('UpdateDriverOnlineStatus', UpdateDriverOnlineStatusSchema);
	registry.register('ToggleDriverOrders', ToggleDriverOrdersSchema);
	registry.register('SetCurrentVehicle', SetCurrentVehicleSchema);
	registry.register('UpdateDriverDailyMealBusiness', UpdateDriverDailyMealBusinessesSchema);
	registry.register('CreateDriver', CreateDriverSchema);
	registry.register('HandleSosAlert', HandleSosAlertSchema);
	registry.register('SendComeToWorkNotification', SendComeToWorkNotificationSchema);
	registry.register('AssignBusinessForDailyMealsToDriver', AssignBusinessForDailyMealsToDriverSchema);
	registry.register('CreateElectronicDeviceForPremise', CreateElectronicDeviceForPremiseSchema);
	registry.register('UpdateDeviceAssignment', UpdateDeviceAssignmentSchema);
	registry.register('UnlinkDriverFromBusiness', UnlinkDriverFromBusinessSchema);
	registry.register('RegisterVehicleInvoices', RegisterVehicleInvoicesSchema);
	registry.register('DisableElectronicDevice', DisableElectronicDeviceSchema);

	// Path parameter schemas
	registry.register('DriverIdParams', DriverIdParamsSchema);
	registry.register('DriverUserIdParams', UserIdParamsSchema);
	registry.register('DriverBusinessIdParams', BusinessIdParamsSchema);
	registry.register('SetDriverHandleParams', SetDriverHandleParamsSchema);
	registry.register('RegisterVehicleInvoicesParams', RegisterVehicleInvoicesParamsSchema);
	registry.register('CreateElectronicDeviceParams', CreateElectronicDeviceParamsSchema);
	registry.register('DisableElectronicDeviceParams', DisableElectronicDeviceParamsSchema);
	registry.register('UpdateDeviceAssignmentParams', UpdateDeviceAssignmentParamsSchema);

	// Query parameter schemas
	registry.register('GetAvailableDriversQuery', GetAvailableDriversQuerySchema);
	registry.register('GetDriverHistoryLocationsQuery', GetDriverHistoryLocationsQuerySchema);
	registry.register('GetDriverEarningsQuery', GetDriverEarningsQuerySchema);
	registry.register('GetDriverTotalEarningsQuery', GetDriverTotalEarningsQuerySchema);
}
