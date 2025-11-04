import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { Driver } from '../drivers/Driver.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { ScoringPoint } from './ScoringPoint.js';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';
import { DriverResponseSchema } from '../drivers/Driver';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { ScoringPointResponseSchema } from './ScoringPoint';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateLateEventSchema = z
	.object({
		late_events_id: z.string().uuid(),
		stores_id: z.string().uuid().nullable().optional(),
		food_drinks_id: z.string().uuid().nullable().optional(),
		driver_id: z.string().uuid(),
		user_id: z.string().uuid(),
		delivery_order_id: z.string().uuid().nullable().optional(),
		taxi_order_id: z.string().uuid().nullable().optional(),
		scoring_points_id: z.string().uuid().nullable().optional(),
		seconds: z.number(),
	})
	.openapi('CreateLateEvent');

export type CreateLateEventInput = z.infer<typeof CreateLateEventSchema>;

export const UpdateLateEventSchema = CreateLateEventSchema.partial().openapi('UpdateLateEvent');
export type UpdateLateEventInput = z.infer<typeof UpdateLateEventSchema>;

export const LateEventResponseSchema = z
	.object({
		late_events_id: z.string(),
		stores_id: z.string().nullable().optional(),
		food_drinks_id: z.string().nullable().optional(),
		driver_id: z.string(),
		user_id: z.string(),
		delivery_order_id: z.string().nullable().optional(),
		taxi_order_id: z.string().nullable().optional(),
		scoring_points_id: z.string().nullable().optional(),
		seconds: z.number(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		stores_module: StoresModuleResponseSchema.nullable().optional(),
		food_drinks_module: FoodDrinksModuleResponseSchema.nullable().optional(),
		driver: DriverResponseSchema.nullable().optional(),
		delivery_orders: DeliveryOrderResponseSchema.nullable().optional(),
		taxi_orders: TaxiOrderResponseSchema.nullable().optional(),
		scoring_points: ScoringPointResponseSchema.nullable().optional(),
	})
	.openapi('LateEventResponse');

export type LateEventResponse = z.infer<typeof LateEventResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateLateEvent', CreateLateEventSchema);
	registry.register('UpdateLateEvent', UpdateLateEventSchema);
	registry.register('LateEventResponse', LateEventResponseSchema);
}

export type LateEvent = {
	late_events_id: string;
	stores_id?: string | null;
	food_drinks_id?: string | null;
	driver_id: string;
	user_id: string;
	delivery_order_id?: string | null;
	taxi_order_id?: string | null;
	scoring_points_id?: string | null;
	seconds: number;
	created_at: Date;
	updated_at: Date;
	stores_module?: StoresModule | null;
	food_drinks_module?: FoodDrinksModule | null;
	driver?: Driver | null;
	delivery_orders?: DeliveryOrder | null;
	taxi_orders?: TaxiOrder | null;
	scoring_points?: ScoringPoint | null;
};
