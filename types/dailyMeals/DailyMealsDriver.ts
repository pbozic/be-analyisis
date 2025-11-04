// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DailyMealsModule } from './DailyMealsModule.js';
import type { Driver } from '../drivers/Driver.js';
import { DailyMealsModuleResponseSchema } from './DailyMealsModule';
import { DriverResponseSchema } from '../drivers/Driver';

extendZodWithOpenApi(z);

export const CreateDailyMealsDriverSchema = z
	.object({
		id: z.string().uuid(),
		daily_meals_id: z.string().uuid(),
		driver_id: z.string().uuid(),
	})
	.openapi('CreateDailyMealsDriver');

export type CreateDailyMealsDriverInput = z.infer<typeof CreateDailyMealsDriverSchema>;

export const UpdateDailyMealsDriverSchema = CreateDailyMealsDriverSchema.partial().openapi('UpdateDailyMealsDriver');
export type UpdateDailyMealsDriverInput = z.infer<typeof UpdateDailyMealsDriverSchema>;

export const DailyMealsDriverResponseSchema = z
	.object({
		id: z.string(),
		daily_meals_id: z.string(),
		driver_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		daily_meals_module: DailyMealsModuleResponseSchema,
		driver: DriverResponseSchema,
	})
	.openapi('DailyMealsDriverResponse');

export type DailyMealsDriverResponse = z.infer<typeof DailyMealsDriverResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealsDriver', CreateDailyMealsDriverSchema);
	registry.register('UpdateDailyMealsDriver', UpdateDailyMealsDriverSchema);
	registry.register('DailyMealsDriverResponse', DailyMealsDriverResponseSchema);
}

export type DailyMealsDriver = {
	id: string;
	daily_meals_id: string;
	driver_id: string;
	created_at: Date;
	updated_at: Date;
	daily_meals_module?: DailyMealsModule;
	driver?: Driver;
};
