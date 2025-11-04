import { VEHICLE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Document } from '../documents/Document.js';
import type { DriverHistoryLocation } from './DriverHistoryLocation.js';
import type { Municipality } from '../regions/Municipality.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { DriverActivityLog } from './DriverActivityLog.js';
import type { TransportModule } from '../transport/TransportModule.js';
import type { File } from '../files/File.js';
import type { DailyMealsModule } from '../dailyMeals/DailyMealsModule.js';
import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { Reviewable } from '../reviews/Reviewable.js';
import type { LateEvent } from '../general/LateEvent.js';
import type { TaxiOrderSent } from '../taxiOrders/TaxiOrderSent.js';
import type { DeliveryOrderSent } from '../deliveryOrders/DeliveryOrderSent.js';
import type { VehicleDriver } from './VehicleDriver.js';
import type { DriverMunicipality } from '../regions/DriverMunicipality.js';
import type { DailyMealsDriver } from '../dailyMeals/DailyMealsDriver.js';
import type { UserFavoriteDriver } from '../users/UserFavoriteDriver.js';
import { UserResponseSchema } from '../users/User';
import { VehicleDriverResponseSchema } from './VehicleDriver';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { TaxiOrderSentResponseSchema } from '../taxiOrders/TaxiOrderSent';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { DeliveryOrderSentResponseSchema } from '../deliveryOrders/DeliveryOrderSent';
import { DocumentResponseSchema } from '../documents/Document';
import { DriverHistoryLocationResponseSchema } from './DriverHistoryLocation';
import { DriverMunicipalityResponseSchema } from '../regions/DriverMunicipality';
import { VehicleResponseSchema } from '../vehicles/Vehicle';
import { DriverActivityLogResponseSchema } from './DriverActivityLog';
import { TransportModuleResponseSchema } from '../transport/TransportModule';
import { FileResponseSchema } from '../files/File';
import { DailyMealsDriverResponseSchema } from '../dailyMeals/DailyMealsDriver';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';
import { ReviewableResponseSchema } from '../reviews/Reviewable';
import { LateEventResponseSchema } from '../general/LateEvent';
import { UserFavoriteDriverResponseSchema } from '../users/UserFavoriteDriver';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Driver = {
	driver_id: string;
	transport_module_id?: string | null;
	online?: boolean | null;
	on_order?: boolean | null;
	working_hours?: unknown | null;
	ride_requirements?: unknown | null;
	created_at: Date;
	updated_at: Date;
	user_id?: string | null;
	user?: User | null;
	vehicles: VehicleDriver[];
	current_vehicle_id?: string | null;
	last_used_vehicle_id?: string | null;
	orders: TaxiOrder[];
	received_orders: TaxiOrderSent[];
	delivery_orders: DeliveryOrder[];
	received_delivery_orders: DeliveryOrderSent[];
	documents: Document[];
	location?: unknown | null;
	delivery_timeline?: unknown | null;
	last_ping_at: Date;
	is_inactive?: boolean | null;
	transfer_requirements?: unknown | null;
	regions: string;
	driver_history_locations: DriverHistoryLocation[];
	handles_taxi_orders?: boolean | null;
	handles_transfer_orders?: boolean | null;
	handles_courier_orders?: boolean | null;
	handles_delivery_orders?: boolean | null;
	taxi_orders_toggled?: boolean | null;
	transfer_orders_toggled?: boolean | null;
	courier_orders_toggled?: boolean | null;
	delivery_orders_toggled?: boolean | null;
	partner_cash_balance?: number | null;
	come_to_work_last_sent_at?: Date | null;
	driver_municipalities: DriverMunicipality[];
	current_vehicle?: Vehicle | null;
	activity_logs: DriverActivityLog[];
	transport_module?: TransportModule | null;
	profile_picture_id?: string | null;
	profile_picture?: File | null;
	daily_meals: DailyMealsDriver[];
	delivers_daily_meals?: boolean | null;
	on_daily_meals?: boolean | null;
	scheduled_meals_route?: unknown | null;
	subscriptions: DailyMealSubscription[];
	vehicle_type?: VEHICLE_TYPE | null;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	late_events: LateEvent[];
	user_favorite_drivers: UserFavoriteDriver[];
};

export const CreateDriverSchema = z
	.object({
		driver_id: z.string().uuid(),
		transport_module_id: z.string().uuid().nullable().optional(),
		online: z.boolean().nullable().optional(),
		on_order: z.boolean().nullable().optional(),
		working_hours: z.unknown().nullable().optional(),
		ride_requirements: z.unknown().nullable().optional(),
		user_id: z.string().uuid().nullable().optional(),
		current_vehicle_id: z.string().uuid().nullable().optional(),
		last_used_vehicle_id: z.string().uuid().nullable().optional(),
		location: z.unknown().nullable().optional(),
		delivery_timeline: z.unknown().nullable().optional(),
		last_ping_at: z.unknown(),
		is_inactive: z.boolean().nullable().optional(),
		transfer_requirements: z.unknown().nullable().optional(),
		regions: z.string(),
		handles_taxi_orders: z.boolean().nullable().optional(),
		handles_transfer_orders: z.boolean().nullable().optional(),
		handles_courier_orders: z.boolean().nullable().optional(),
		handles_delivery_orders: z.boolean().nullable().optional(),
		taxi_orders_toggled: z.boolean().nullable().optional(),
		transfer_orders_toggled: z.boolean().nullable().optional(),
		courier_orders_toggled: z.boolean().nullable().optional(),
		delivery_orders_toggled: z.boolean().nullable().optional(),
		partner_cash_balance: z.number().nullable().optional(),
		come_to_work_last_sent_at: z.unknown().nullable().optional(),
		profile_picture_id: z.string().uuid().nullable().optional(),
		delivers_daily_meals: z.boolean().nullable().optional(),
		on_daily_meals: z.boolean().nullable().optional(),
		scheduled_meals_route: z.unknown().nullable().optional(),
		vehicle_type: z.nativeEnum(VEHICLE_TYPE).nullable().optional(),
		reviewable_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateDriver');

export type CreateDriverInput = z.infer<typeof CreateDriverSchema>;

export const UpdateDriverSchema = CreateDriverSchema.partial().openapi('UpdateDriver');
export type UpdateDriverInput = z.infer<typeof UpdateDriverSchema>;

export const DriverResponseSchema = z
	.object({
		driver_id: z.string(),
		transport_module_id: z.string().nullable().optional(),
		online: z.boolean().nullable().optional(),
		on_order: z.boolean().nullable().optional(),
		working_hours: z.unknown().nullable().optional(),
		ride_requirements: z.unknown().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		user_id: z.string().nullable().optional(),
		user: UserResponseSchema.nullable().optional(),
		vehicles: z.array(VehicleDriverResponseSchema),
		current_vehicle_id: z.string().nullable().optional(),
		last_used_vehicle_id: z.string().nullable().optional(),
		orders: z.array(TaxiOrderResponseSchema),
		received_orders: z.array(TaxiOrderSentResponseSchema),
		delivery_orders: z.array(DeliveryOrderResponseSchema),
		received_delivery_orders: z.array(DeliveryOrderSentResponseSchema),
		documents: z.array(DocumentResponseSchema),
		location: z.unknown().nullable().optional(),
		delivery_timeline: z.unknown().nullable().optional(),
		last_ping_at: z.string().datetime(),
		is_inactive: z.boolean().nullable().optional(),
		transfer_requirements: z.unknown().nullable().optional(),
		regions: z.string(),
		driver_history_locations: z.array(DriverHistoryLocationResponseSchema),
		handles_taxi_orders: z.boolean().nullable().optional(),
		handles_transfer_orders: z.boolean().nullable().optional(),
		handles_courier_orders: z.boolean().nullable().optional(),
		handles_delivery_orders: z.boolean().nullable().optional(),
		taxi_orders_toggled: z.boolean().nullable().optional(),
		transfer_orders_toggled: z.boolean().nullable().optional(),
		courier_orders_toggled: z.boolean().nullable().optional(),
		delivery_orders_toggled: z.boolean().nullable().optional(),
		partner_cash_balance: z.number().nullable().optional(),
		come_to_work_last_sent_at: z.string().datetime().nullable().optional(),
		driver_municipalities: z.array(DriverMunicipalityResponseSchema),
		current_vehicle: VehicleResponseSchema.nullable().optional(),
		activity_logs: z.array(DriverActivityLogResponseSchema),
		transport_module: TransportModuleResponseSchema.nullable().optional(),
		profile_picture_id: z.string().nullable().optional(),
		profile_picture: FileResponseSchema.nullable().optional(),
		daily_meals: z.array(DailyMealsDriverResponseSchema),
		delivers_daily_meals: z.boolean().nullable().optional(),
		on_daily_meals: z.boolean().nullable().optional(),
		scheduled_meals_route: z.unknown().nullable().optional(),
		subscriptions: z.array(DailyMealSubscriptionResponseSchema),
		vehicle_type: z.nativeEnum(VEHICLE_TYPE).nullable().optional(),
		reviewable_id: z.string().nullable().optional(),
		reviewable: ReviewableResponseSchema.nullable().optional(),
		late_events: z.array(LateEventResponseSchema),
		user_favorite_drivers: z.array(UserFavoriteDriverResponseSchema),
	})
	.openapi('DriverResponse');

export type DriverResponse = z.infer<typeof DriverResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDriver', CreateDriverSchema);
	registry.register('UpdateDriver', UpdateDriverSchema);
	registry.register('DriverResponse', DriverResponseSchema);
}
