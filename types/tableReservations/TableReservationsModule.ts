// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { Reservation } from './Reservation.js';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';
import { ReservationResponseSchema } from './Reservation';

extendZodWithOpenApi(z);

export const CreateTableReservationsModuleSchema = z
	.object({
		id: z.string().uuid(),
		food_drinks_id: z.string().uuid(),
	})
	.openapi('CreateTableReservationsModule');

export type CreateTableReservationsModuleInput = z.infer<typeof CreateTableReservationsModuleSchema>;

export const UpdateTableReservationsModuleSchema = CreateTableReservationsModuleSchema.partial().openapi(
	'UpdateTableReservationsModule'
);
export type UpdateTableReservationsModuleInput = z.infer<typeof UpdateTableReservationsModuleSchema>;

export const TableReservationsModuleResponseSchema = z
	.object({
		id: z.string(),
		food_drinks_id: z.string(),
		food_drinks_module: FoodDrinksModuleResponseSchema,
		reservations: z.array(ReservationResponseSchema),
	})
	.openapi('TableReservationsModuleResponse');

export type TableReservationsModuleResponse = z.infer<typeof TableReservationsModuleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTableReservationsModule', CreateTableReservationsModuleSchema);
	registry.register('UpdateTableReservationsModule', UpdateTableReservationsModuleSchema);
	registry.register('TableReservationsModuleResponse', TableReservationsModuleResponseSchema);
}

export type TableReservationsModule = {
	id: string;
	food_drinks_id: string;
	food_drinks_module?: FoodDrinksModule;
	reservations?: Reservation[];
};
