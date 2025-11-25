import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { VehicleBaseSchema } from '../Vehicles/vehicle.dto.js';
import { BasicUserDataSchema } from '../User/user.js';
import { LocationSchema } from '../Taxi/taxiorder.dto.js';
import { DailyMealsModuleSchema } from '../Business/business.dto.js';

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
// Driver Response DTOs
// =======================

export const DriverRefSchema = z
	.object({
		driver_id: UUID,
	})
	.openapi('DriverRef');
export type DriverRef = z.infer<typeof DriverRefSchema>;

export const DriverBaseSchema = z
	.object({
		driver_id: UUID,
		user_id: UUID,
		online: z.boolean().optional(),
		on_order: z.boolean().optional(),
		delivers_daily_meals: z.boolean().optional(),
		on_daily_meals: z.boolean().optional(),
		last_ping_at: Timestamp.optional(),
		location: LocationSchema.nullable().optional(),
		ride_requirements: z.record(z.unknown()).nullable().optional(),
		handles_taxi_orders: z.boolean().optional(),
		handles_transfer_orders: z.boolean().optional(),
		handles_delivery_orders: z.boolean().optional(),
		handles_courier_orders: z.boolean().optional(),
		taxi_orders_toggled: z.boolean().optional(),
		transfer_orders_toggled: z.boolean().optional(),
		delivery_orders_toggled: z.boolean().optional(),
		courier_orders_toggled: z.boolean().optional(),
		business_id: UUID.nullable().optional(),
		transport_module_id: UUID.nullable().optional(),
		current_vehicle_id: UUID.nullable().optional(),
		last_used_vehicle_id: UUID.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
		is_inactive: z.boolean().optional(),
		delivery_timeline: z.array(LocationSchema).optional(),
		scheduled_meals_route: z.array(LocationSchema).optional(),
		come_to_work_last_sent_at: Timestamp.nullable().optional(),
	})
	.openapi('DriverBase');
export type DriverBase = z.infer<typeof DriverBaseSchema>;

export const VehicleDriversSchema = z
	.object({
		vehicle_drivers_id: UUID,
		vehicle_id: UUID,
		driver_id: UUID,
		can_drive: z.boolean(),
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi('VehicleDrivers');
export type VehicleDrivers = z.infer<typeof VehicleDriversSchema>;

export const DailyMealsDriversSchema = z
	.object({
		id: UUID,
		daily_meals_module_id: UUID,
		created_at: Timestamp,
		updated_at: Timestamp.optional(),
		daily_meals_module: z.lazy(() => DailyMealsModuleSchema).optional(),
	})
	.openapi('DailyMealsDrivers');

export const DriverDetailSchema = DriverBaseSchema.extend({
	user: z.lazy(() => BasicUserDataSchema).optional(),
	current_vehicle: z
		.lazy(() => VehicleBaseSchema)
		.nullable()
		.optional(),
	vehicles: z
		.array(
			VehicleDriversSchema.omit({ driver_id: true, created_at: true, updated_at: true }).extend({
				vehicle: z.lazy(() => VehicleBaseSchema),
			})
		)
		.optional()
		.default([]),
	daily_meals: z.array(DailyMealsDriversSchema).nullable().optional(),
	business_id: UUID.nullable().optional(),
}).openapi('DriverDetail');
export type DriverDetail = z.infer<typeof DriverDetailSchema>;

export const DriverLocationsWithPerformanceSchema = z
	.object({
		locations: z.array(
			z.object({
				latitude: z.number(),
				longitude: z.number(),
				timestamp: Timestamp,
				speed_kmh: z.number().nullable(),
				performance_score: z.number().nullable(),
			})
		),
		averageScore: z.number().nullable(),
	})
	.openapi('DriverLocationsWithPerformance');
export type DriverLocationsWithPerformance = z.infer<typeof DriverLocationsWithPerformanceSchema>;

export const DriverEarnings = z
	.object({
		driver_id: UUID,
		is_online: z.boolean().nullable(),
		license_plate: z.string().nullable(),
		driver: z.string(),
		total_earnings: z.string(),
		number_of_rides: z.number(),
		hourly_earnings: z.string(),
		distance_travelled: z.string(),
		time_travelled: z.string(),
		earnings_fee: z.string(),
	})
	.openapi('DriverEarnings');
export type DriverEarnings = z.infer<typeof DriverEarnings>;

export const DriverTotalEarningsSchema = z
	.object({
		todaysEarnings: z.number(),
		weeklyEarnings: z.number(),
		monthlyEarnings: z.number(),
		totalEarnings: z.number(),
	})
	.openapi('DriverTotalEarnings');
export type DriverTotalEarnings = z.infer<typeof DriverTotalEarningsSchema>;

export const DriverDailyEarningsBreakdownSchema = z
	.object({
		breakdown: z.record(z.number()), // key = YYYY-MM-DD, value = earnings for that day
	})
	.openapi('DriverDailyEarningsBreakdown');
export type DriverDailyEarningsBreakdown = z.infer<typeof DriverDailyEarningsBreakdownSchema>;

export const DriverActivitySettingsSchema = z
	.object({
		driver_activity_settings_id: UUID,
		first_offline_lockout: z.number(),
		second_offline_lockout: z.number(),
		online_timeout: z.number(),
		created_at: Timestamp,
		updated_at: Timestamp.optional(),
		active: z.boolean(),
	})
	.openapi('DriverActivitySettings');
export type DriverActivitySettings = z.infer<typeof DriverActivitySettingsSchema>;

export const DriverActivityLogSchema = z
	.object({
		driver_activity_log_id: UUID,
		driver_id: UUID,
		started_at: Timestamp,
		ended_at: Timestamp.nullable().optional(),
		timeout_at: Timestamp.nullable().optional(),
		lockout_until: Timestamp.nullable().optional(),
	})
	.openapi('DriverActivityLog');
export type DriverActivityLog = z.infer<typeof DriverActivityLogSchema>;

// =======================
// Register Schemas
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

	// Register driver schemas
	registry.register('DriverRef', DriverRefSchema);
	registry.register('DriverBase', DriverBaseSchema);
	registry.register('DriverDetail', DriverDetailSchema);
	registry.register('VehicleDrivers', VehicleDriversSchema);

	// Responses
	registry.register('DriverLocationsWithPerformance', DriverLocationsWithPerformanceSchema);
	registry.register('DriverEarnings', DriverEarnings);
	registry.register('DriverTotalEarnings', DriverTotalEarningsSchema);
	registry.register('DriverDailyEarningsBreakdown', DriverDailyEarningsBreakdownSchema);
}
