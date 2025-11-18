import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { VehicleBaseSchema } from '../Vehicles/vehicle.dto.js';
import { BasicUserDataSchema } from '../User/user.js';
import { LocationSchema } from '../Taxi/taxiorder.dto.js';

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
		handles_cargo_orders: z.boolean().optional(),
		taxi_orders_toggled: z.boolean().optional(),
		transfer_orders_toggled: z.boolean().optional(),
		delivery_orders_toggled: z.boolean().optional(),
		cargo_orders_toggled: z.boolean().optional(),
		business_id: UUID.nullable().optional(),
		transport_module_id: UUID.nullable().optional(),
		current_vehicle_id: UUID.nullable().optional(),
		last_used_vehicle_id: UUID.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
		is_inactive: z.boolean().optional(),
		delivery_timeline: z.array(LocationSchema).optional(),
		scheduled_meals_route: z.array(LocationSchema).optional(),
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

export const DriverDetailSchema = DriverBaseSchema.extend({
	user: BasicUserDataSchema.optional(),
	current_vehicle: VehicleBaseSchema.nullable().optional(),
	vehicles: z
		.array(
			VehicleDriversSchema.omit({ driver_id: true, created_at: true, updated_at: true }).extend({
				vehicle: VehicleBaseSchema,
			})
		)
		.optional()
		.default([]),
	business_id: UUID.nullable().optional(),
}).openapi('DriverDetail');
export type DriverDetail = z.infer<typeof DriverDetailSchema>;

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
}
