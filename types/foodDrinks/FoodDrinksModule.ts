import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Reviewable } from '../reviews/Reviewable.js';
import type { Business } from '../business/Business.js';
import type { Address } from '../addresses/Address.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Menu } from '../menus/Menu.js';
import type { OrderLobby } from '../orderLobbies/OrderLobby.js';
import type { DailyMealsModule } from '../dailyMeals/DailyMealsModule.js';
import type { File } from '../files/File.js';
import type { LateEvent } from '../general/LateEvent.js';
import type { TableReservationsModule } from '../tableReservations/TableReservationsModule.js';
import { ReviewableResponseSchema } from '../reviews/Reviewable';
import { BusinessResponseSchema } from '../business/Business';
import { AddressResponseSchema } from '../addresses/Address';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { MenuResponseSchema } from '../menus/Menu';
import { OrderLobbyResponseSchema } from '../orderLobbies/OrderLobby';
import { TableReservationsModuleResponseSchema } from '../tableReservations/TableReservationsModule';
import { DailyMealsModuleResponseSchema } from '../dailyMeals/DailyMealsModule';
import { FileResponseSchema } from '../files/File';
import { LateEventResponseSchema } from '../general/LateEvent';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type FoodDrinksModule = {
	food_drinks_id: string;
	business_id: string;
	enabled: boolean;
	settings?: unknown | null;
	created_at: Date;
	updated_at: Date;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	business: Business;
	delivery_address_id?: string | null;
	delivery_address?: Address | null;
	delivery_orders: DeliveryOrder[];
	minimum_order: number;
	menu?: Menu | null;
	order_lobbies: OrderLobby[];
	table_reservations_module?: TableReservationsModule | null;
	seats?: number | null;
	overwhelmed: boolean;
	online: boolean;
	daily_meals_id?: string | null;
	daily_meals_module?: DailyMealsModule | null;
	logo_id?: string | null;
	logo?: File | null;
	banner_id?: string | null;
	banner?: File | null;
	late_events: LateEvent[];
};

export const CreateFoodDrinksModuleSchema = z
	.object({
		food_drinks_id: z.string().uuid(),
		business_id: z.string().uuid(),
		enabled: z.boolean(),
		settings: z.unknown().nullable().optional(),
		reviewable_id: z.string().uuid().nullable().optional(),
		delivery_address_id: z.string().uuid().nullable().optional(),
		minimum_order: z.number(),
		seats: z.number().nullable().optional(),
		overwhelmed: z.boolean(),
		online: z.boolean(),
		daily_meals_id: z.string().uuid().nullable().optional(),
		logo_id: z.string().uuid().nullable().optional(),
		banner_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateFoodDrinksModule');

export type CreateFoodDrinksModuleInput = z.infer<typeof CreateFoodDrinksModuleSchema>;

export const UpdateFoodDrinksModuleSchema = CreateFoodDrinksModuleSchema.partial().openapi('UpdateFoodDrinksModule');
export type UpdateFoodDrinksModuleInput = z.infer<typeof UpdateFoodDrinksModuleSchema>;

export const FoodDrinksModuleResponseSchema = z
	.object({
		food_drinks_id: z.string(),
		business_id: z.string(),
		enabled: z.boolean(),
		settings: z.unknown().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		reviewable_id: z.string().nullable().optional(),
		reviewable: ReviewableResponseSchema.nullable().optional(),
		business: BusinessResponseSchema,
		delivery_address_id: z.string().nullable().optional(),
		delivery_address: AddressResponseSchema.nullable().optional(),
		delivery_orders: z.array(DeliveryOrderResponseSchema),
		minimum_order: z.number(),
		menu: MenuResponseSchema.nullable().optional(),
		order_lobbies: z.array(OrderLobbyResponseSchema),
		table_reservations_module: TableReservationsModuleResponseSchema.nullable().optional(),
		seats: z.number().nullable().optional(),
		overwhelmed: z.boolean(),
		online: z.boolean(),
		daily_meals_id: z.string().nullable().optional(),
		daily_meals_module: DailyMealsModuleResponseSchema.nullable().optional(),
		logo_id: z.string().nullable().optional(),
		logo: FileResponseSchema.nullable().optional(),
		banner_id: z.string().nullable().optional(),
		banner: FileResponseSchema.nullable().optional(),
		late_events: z.array(LateEventResponseSchema),
	})
	.openapi('FoodDrinksModuleResponse');

export type FoodDrinksModuleResponse = z.infer<typeof FoodDrinksModuleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateFoodDrinksModule', CreateFoodDrinksModuleSchema);
	registry.register('UpdateFoodDrinksModule', UpdateFoodDrinksModuleSchema);
	registry.register('FoodDrinksModuleResponse', FoodDrinksModuleResponseSchema);
}
