import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== Request Schemas (DAO input schemas used in routes with validate()) =====
// These are DAO-level input schemas but are used directly in routes, so they belong in validators.ts

export const GetDailyMealSubscriptionsByBusinessIdDaoInputSchema = z
	.object({
		business_id: UUID,
		args: z.any().optional(),
	})
	.openapi('GetDailyMealSubscriptionsByBusinessIdDaoInput');

export type GetDailyMealSubscriptionsByBusinessIdDaoInput = z.infer<
	typeof GetDailyMealSubscriptionsByBusinessIdDaoInputSchema
>;

export const GetActiveDailyMealSubscriptionsByBusinessIdDaoInputSchema = z
	.object({
		business_id: UUID,
		start_date: Timestamp.optional().openapi({ example: '2025-01-01T00:00:00.000Z' }),
	})
	.openapi('GetActiveDailyMealSubscriptionsByBusinessIdDaoInput');

export type GetActiveDailyMealSubscriptionsByBusinessIdDaoInput = z.infer<
	typeof GetActiveDailyMealSubscriptionsByBusinessIdDaoInputSchema
>;

export const GetDailyMealSubscriptionsByUserIdDaoInputSchema = z
	.object({
		user_id: UUID,
		start_date: Timestamp.optional().openapi({ example: '2025-01-01T00:00:00.000Z' }),
	})
	.openapi('GetDailyMealSubscriptionsByUserIdDaoInput');

export type GetDailyMealSubscriptionsByUserIdDaoInput = z.infer<typeof GetDailyMealSubscriptionsByUserIdDaoInputSchema>;

export const GetTodayDailyMealSubscriptionsByBusinessIdDaoInputSchema = z
	.object({
		business_id: UUID,
	})
	.openapi('GetTodayDailyMealSubscriptionsByBusinessIdDaoInput');

export type GetTodayDailyMealSubscriptionsByBusinessIdDaoInput = z.infer<
	typeof GetTodayDailyMealSubscriptionsByBusinessIdDaoInputSchema
>;

export const GetDailyMealSubscriptionByIdDaoInputSchema = z
	.object({
		id: UUID,
	})
	.openapi('GetDailyMealSubscriptionByIdDaoInput');

export type GetDailyMealSubscriptionByIdDaoInput = z.infer<typeof GetDailyMealSubscriptionByIdDaoInputSchema>;

export const CreateDailyMealSubscriptionDaoInputSchema = z
	.object({
		user_id: UUID,
		business_id: UUID,
		delivery_address_id: UUID,
		type: z.string().min(1),
		customers: z.array(z.any()),
		start_date: Timestamp,
		end_date: Timestamp.nullable().optional().openapi({ example: '2025-02-01T00:00:00.000Z' }),
		days: z
			.array(
				z.object({
					intended_date: Timestamp,
					delivery_date: Timestamp,
				})
			)
			.optional(),
		weekdays: z
			.array(
				z.object({
					intended_weekday: z.number(),
					delivery_weekday: z.number(),
				})
			)
			.optional(),
		courier_comment: z.string().nullable().optional(),
	})
	.openapi('CreateDailyMealSubscriptionDaoInput');

export type CreateDailyMealSubscriptionDaoInput = z.infer<typeof CreateDailyMealSubscriptionDaoInputSchema>;

export const GetSubscriptionByIdDaoInputSchema = z
	.object({
		id: UUID,
		includeObj: z.any().optional(),
	})
	.openapi('GetSubscriptionByIdDaoInput');

export type GetSubscriptionByIdDaoInput = z.infer<typeof GetSubscriptionByIdDaoInputSchema>;

export const UpdateSubscriptionStatusDaoInputSchema = z
	.object({
		id: UUID,
		status: z.string().min(1),
		includeObj: z.any().optional(),
	})
	.openapi('UpdateSubscriptionStatusDaoInput');

export type UpdateSubscriptionStatusDaoInput = z.infer<typeof UpdateSubscriptionStatusDaoInputSchema>;

export const ConnectSubscriptionWithDriverDaoInputSchema = z
	.object({
		id: UUID,
		delivery_driver_id: UUID,
		includeObj: z.any().optional(),
	})
	.openapi('ConnectSubscriptionWithDriverDaoInput');

export type ConnectSubscriptionWithDriverDaoInput = z.infer<typeof ConnectSubscriptionWithDriverDaoInputSchema>;

export const UpdateDailyMealInstancesDaoInputSchema = z
	.object({
		instance_ids: z.array(UUID).openapi({ example: ['00000000-0000-0000-0000-000000000000'] }),
		status: z.string().min(1),
	})
	.openapi('UpdateDailyMealInstancesDaoInput');

export type UpdateDailyMealInstancesDaoInput = z.infer<typeof UpdateDailyMealInstancesDaoInputSchema>;

export const UpdateDailyMealInstanceStatusByIdDaoInputSchema = z
	.object({
		instance_id: UUID,
		status: z.string().min(1),
	})
	.openapi('UpdateDailyMealInstanceStatusByIdDaoInput');

export type UpdateDailyMealInstanceStatusByIdDaoInput = z.infer<typeof UpdateDailyMealInstanceStatusByIdDaoInputSchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register(
		'GetDailyMealSubscriptionsByBusinessIdDaoInput',
		GetDailyMealSubscriptionsByBusinessIdDaoInputSchema
	);
	registry.register(
		'GetActiveDailyMealSubscriptionsByBusinessIdDaoInput',
		GetActiveDailyMealSubscriptionsByBusinessIdDaoInputSchema
	);
	registry.register('GetDailyMealSubscriptionsByUserIdDaoInput', GetDailyMealSubscriptionsByUserIdDaoInputSchema);
	registry.register(
		'GetTodayDailyMealSubscriptionsByBusinessIdDaoInput',
		GetTodayDailyMealSubscriptionsByBusinessIdDaoInputSchema
	);
	registry.register('GetDailyMealSubscriptionByIdDaoInput', GetDailyMealSubscriptionByIdDaoInputSchema);
	registry.register('CreateDailyMealSubscriptionDaoInput', CreateDailyMealSubscriptionDaoInputSchema);
	registry.register('GetSubscriptionByIdDaoInput', GetSubscriptionByIdDaoInputSchema);
	registry.register('UpdateSubscriptionStatusDaoInput', UpdateSubscriptionStatusDaoInputSchema);
	registry.register('ConnectSubscriptionWithDriverDaoInput', ConnectSubscriptionWithDriverDaoInputSchema);
	registry.register('UpdateDailyMealInstancesDaoInput', UpdateDailyMealInstancesDaoInputSchema);
	registry.register('UpdateDailyMealInstanceStatusByIdDaoInput', UpdateDailyMealInstanceStatusByIdDaoInputSchema);
}
