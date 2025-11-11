import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Email, PhoneNumber, Timestamp, GeoPoint } from '../../primitives.js';
import { BasicUserDataSchema, UserRoleAssignmentSchema } from '../common/User.dto.js';
import { OnlineStatusUpdateSchema } from '../common/Status.dto.js';
import { LocationUpdateSchema } from '../common/Location.dto.js';
import { DocumentDataSchema, FileUploadSchema } from '../common/Document.dto.js';
import { OptionalFullAddressSchema } from '../common/Address.dto.js';

extendZodWithOpenApi(z);

// === Driver Management ===

// Used by: updateDriver (PATCH /drivers/update/:driver_id)
export const UpdateDriverSchema = z
	.object({
		// Basic driver info
		first_name: z.string().min(1).optional(),
		last_name: z.string().min(1).optional(),
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
		date_of_birth: z.string().date().optional(),

		// Driver settings
		ride_requirements: z.string().optional(),
		delivers_daily_meals: z.boolean().optional(),
		handles_taxi: z.boolean().optional(),
		handles_transfer: z.boolean().optional(),
		handles_delivery: z.boolean().optional(),

		// Status fields
		online: z.boolean().optional(),
		available: z.boolean().optional(),
		on_order: z.boolean().optional(),

		// Location and vehicle
		current_vehicle_id: UUID.optional(),

		// Additional fields
		regions: z.array(z.string()).optional(),
		business_id: UUID.optional(),
	})
	.openapi({
		title: 'UpdateDriverRequest',
		description: 'Schema for updating driver information',
	});

// Used by: editDriver (PATCH /drivers/edit)
export const EditDriverSchema = z
	.object({
		user: BasicUserDataSchema.extend({
			telephone_code: z.string().optional(),
		})
			.partial()
			.extend({
				user_id: UUID, // Required field
			}),
		driver: z.object({
			driver_id: UUID,
			business_id: UUID.optional(),
			ride_requirements: z.string().optional(),
			regions: z.array(z.string()).optional(),
			delivers_daily_meals: z.boolean().optional(),
			handles_taxi: z.boolean().optional(),
			handles_transfer: z.boolean().optional(),
			handles_delivery: z.boolean().optional(),
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
					file_id: UUID,
				})
			)
			.optional(),
	})
	.openapi({
		title: 'EditDriverRequest',
		description: 'Schema for comprehensive driver data editing',
	});

// Used by: updateDriverLocation (PATCH /drivers/location)
export const UpdateDriverLocationSchema = z
	.object({
		location: LocationUpdateSchema,
	})
	.openapi({
		title: 'UpdateDriverLocationRequest',
		description: 'Schema for updating driver location with coordinates and metadata',
	});

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

// Used by: updateDriverOnlineStatus (PATCH /drivers/online)
export const UpdateDriverOnlineStatusSchema = OnlineStatusUpdateSchema.extend({
	driver_id: UUID,
}).openapi({
	title: 'UpdateDriverOnlineStatusRequest',
	description: 'Schema for setting driver online/offline status',
});

// Used by: toggleDriverOrders (PATCH /drivers/:driver_id/toggle_orders)
export const ToggleDriverOrdersSchema = z
	.object({
		types: z.object({
			taxi: z.boolean().optional(),
			transfer: z.boolean().optional(),
			delivery: z.boolean().optional(),
		}),
	})
	.openapi({
		title: 'ToggleDriverOrdersRequest',
		description: 'Schema for toggling driver order types',
	});

// Used by: setCurrentVehicle (PATCH /drivers/:driver_id/set_current_vehicle)
export const SetCurrentVehicleSchema = z
	.object({
		vehicle_id: UUID,
	})
	.openapi({
		title: 'SetCurrentVehicleRequest',
		description: 'Schema for setting driver current vehicle',
	});

// Used by: updateDriverDailyMealBusiness (PATCH /drivers/assign/:driver_id)
export const UpdateDriverDailyMealBusinessesSchema = z
	.object({
		ids: z.array(UUID),
	})
	.openapi({
		title: 'UpdateDriverDailyMealBusinessesRequest',
		description: 'Schema for connecting/disconnecting driver to daily meal businesses',
	});

// Used by: unlinkDriverFromBusiness (PATCH /drivers/:driver_id/unlink)
export const UnlinkDriverFromBusinessSchema = z
	.object({
		business_id: UUID,
	})
	.openapi({
		title: 'UnlinkDriverFromBusinessRequest',
		description: 'Schema for unlinking driver from business',
	});

// === Driver Registration ===

// Used by: createDriver (POST /drivers/create)
export const CreateDriverSchema = z
	.object({
		user: z.object({
			data: BasicUserDataSchema.extend({
				telephone_code: z.string(),
				user_roles: z.array(UserRoleAssignmentSchema).optional(),
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
		driver: z.object({
			data: z.object({
				business_id: UUID,
				ride_requirements: z.string().optional(),
				delivers_daily_meals: z.boolean().optional(),
				handles_taxi: z.boolean().optional(),
				handles_transfer: z.boolean().optional(),
				handles_delivery: z.boolean().optional(),
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

// === Notification & Communication ===

// Used by: handleSosAlert (POST /drivers/sos)
export const HandleSosAlertSchema = z
	.object({
		driver_id: UUID,
		location: GeoPoint.optional(),
		message: z.string().optional(),
		timestamp: Timestamp.optional(),
		emergency_type: z.enum(['ACCIDENT', 'BREAKDOWN', 'SECURITY', 'MEDICAL', 'OTHER']).optional(),
	})
	.openapi({
		title: 'HandleSosAlertRequest',
		description: 'Schema for handling SOS alerts from drivers',
	});

// Used by: sendComeToWorkNotification (POST /drivers/come_to_work)
export const SendComeToWorkNotificationSchema = z
	.object({
		driver_ids: z.array(UUID),
		message: z.string().optional(),
		scheduled_time: Timestamp.optional(),
	})
	.openapi({
		title: 'SendComeToWorkNotificationRequest',
		description: 'Schema for sending work notifications to drivers',
	});

// === Business Operations ===

// Used by: assignBusinessForDailyMealsToDriver (POST /drivers/daily_meals/business)
export const AssignBusinessForDailyMealsToDriverSchema = z
	.object({
		driver_id: UUID,
		business_id: UUID,
		start_date: z.string().date().optional(),
		end_date: z.string().date().optional(),
	})
	.openapi({
		title: 'AssignBusinessForDailyMealsToDriverRequest',
		description: 'Schema for assigning daily meals business to driver',
	});

// Used by: registerVehicleInvoices (POST /drivers/vehicle_invoices)
export const RegisterVehicleInvoicesSchema = z
	.object({
		driver_id: UUID,
		vehicle_id: UUID,
		invoices: z.array(
			z.object({
				invoice_number: z.string(),
				amount: z.number().min(0),
				currency: z.string().length(3),
				date: z.string().date(),
				description: z.string().optional(),
			})
		),
	})
	.openapi({
		title: 'RegisterVehicleInvoicesRequest',
		description: 'Schema for registering vehicle invoices for driver',
	});

// === Electronic Device Management ===

// Used by: createElectronicDeviceForPremise (POST /drivers/electronic_device)
export const CreateElectronicDeviceForPremiseSchema = z
	.object({
		premise_id: UUID,
		device_type: z.enum(['TABLET', 'PHONE', 'TERMINAL', 'OTHER']),
		device_name: z.string().min(1),
		serial_number: z.string().optional(),
		model: z.string().optional(),
		manufacturer: z.string().optional(),
	})
	.openapi({
		title: 'CreateElectronicDeviceForPremiseRequest',
		description: 'Schema for creating electronic device for business premise',
	});

// Used by: disableElectronicDevice (PATCH /drivers/electronic_device/disable)
export const DisableElectronicDeviceSchema = z
	.object({
		device_id: UUID,
		reason: z.string().optional(),
	})
	.openapi({
		title: 'DisableElectronicDeviceRequest',
		description: 'Schema for disabling electronic device',
	});

// Used by: updateDeviceAssignment (PATCH /drivers/device_assignment)
export const UpdateDeviceAssignmentSchema = z
	.object({
		driver_id: UUID,
		business_premise_id: UUID,
		electronic_device_id: UUID,
		action: z.enum(['assign', 'unassign']),
		valid_from: Timestamp.optional(),
		valid_until: Timestamp.optional(),
	})
	.openapi({
		title: 'UpdateDeviceAssignmentRequest',
		description: 'Schema for assigning or unassigning electronic device to driver',
	});

// === Type exports ===
export type UpdateDriverRequest = z.infer<typeof UpdateDriverSchema>;
export type EditDriverRequest = z.infer<typeof EditDriverSchema>;
export type UpdateDriverLocationRequest = z.infer<typeof UpdateDriverLocationSchema>;
export type UpdateDriverRideRequirementsRequest = z.infer<typeof UpdateDriverRideRequirementsSchema>;
export type UpdateDriverOnlineStatusRequest = z.infer<typeof UpdateDriverOnlineStatusSchema>;
export type ToggleDriverOrdersRequest = z.infer<typeof ToggleDriverOrdersSchema>;
export type SetCurrentVehicleRequest = z.infer<typeof SetCurrentVehicleSchema>;
export type UpdateDriverDailyMealBusinessRequest = z.infer<typeof UpdateDriverDailyMealBusinessesSchema>;
export type UnlinkDriverFromBusinessRequest = z.infer<typeof UnlinkDriverFromBusinessSchema>;
export type CreateDriverRequest = z.infer<typeof CreateDriverSchema>;
export type HandleSosAlertRequest = z.infer<typeof HandleSosAlertSchema>;
export type SendComeToWorkNotificationRequest = z.infer<typeof SendComeToWorkNotificationSchema>;
export type AssignBusinessForDailyMealsToDriverRequest = z.infer<typeof AssignBusinessForDailyMealsToDriverSchema>;
export type RegisterVehicleInvoicesRequest = z.infer<typeof RegisterVehicleInvoicesSchema>;
export type CreateElectronicDeviceForPremiseRequest = z.infer<typeof CreateElectronicDeviceForPremiseSchema>;
export type DisableElectronicDeviceRequest = z.infer<typeof DisableElectronicDeviceSchema>;
export type UpdateDeviceAssignmentRequest = z.infer<typeof UpdateDeviceAssignmentSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	// Driver management schemas
	registry.register('UpdateDriver', UpdateDriverSchema);
	registry.register('EditDriver', EditDriverSchema);
	registry.register('UpdateDriverLocation', UpdateDriverLocationSchema);
	registry.register('UpdateDriverRideRequirements', UpdateDriverRideRequirementsSchema);
	registry.register('UpdateDriverOnlineStatus', UpdateDriverOnlineStatusSchema);
	registry.register('ToggleDriverOrders', ToggleDriverOrdersSchema);
	registry.register('SetCurrentVehicle', SetCurrentVehicleSchema);
	registry.register('UpdateDriverDailyMealBusiness', UpdateDriverDailyMealBusinessesSchema);
	registry.register('UnlinkDriverFromBusiness', UnlinkDriverFromBusinessSchema);

	// Driver registration schemas
	registry.register('CreateDriver', CreateDriverSchema);

	// Communication schemas
	registry.register('HandleSosAlert', HandleSosAlertSchema);
	registry.register('SendComeToWorkNotification', SendComeToWorkNotificationSchema);

	// Business operation schemas
	registry.register('AssignBusinessForDailyMealsToDriver', AssignBusinessForDailyMealsToDriverSchema);
	registry.register('RegisterVehicleInvoices', RegisterVehicleInvoicesSchema);

	// Electronic device schemas
	registry.register('CreateElectronicDeviceForPremise', CreateElectronicDeviceForPremiseSchema);
	registry.register('DisableElectronicDevice', DisableElectronicDeviceSchema);
	registry.register('UpdateDeviceAssignment', UpdateDeviceAssignmentSchema);
}
