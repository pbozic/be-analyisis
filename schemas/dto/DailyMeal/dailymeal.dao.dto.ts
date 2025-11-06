import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

import { UUID, Timestamp } from '../../primitives.js';

// DAO input schemas for dao/DailyMealDao.ts

export const GetDailyMealSubscriptionsByBusinessIdDaoInputSchema = z
	.object({
		business_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		args: z.any().optional(),
	})
	.openapi({
		title: 'GetDailyMealSubscriptionsByBusinessIdDaoInput',
		description: 'DAO input for getDailyMealSubscriptionsByBusinessId(business_id, args)',
	});
export type GetDailyMealSubscriptionsByBusinessIdDaoInput = z.infer<
	typeof GetDailyMealSubscriptionsByBusinessIdDaoInputSchema
>;

export const GetActiveDailyMealSubscriptionsByBusinessIdDaoInputSchema = z
	.object({
		business_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		start_date: Timestamp.optional().openapi({ example: '2025-01-01T00:00:00.000Z' }),
	})
	.openapi({
		title: 'GetActiveDailyMealSubscriptionsByBusinessIdDaoInput',
		description: 'DAO input for getActiveDailyMealSubscriptionsByBusinessId(business_id, start_date)',
	});
export type GetActiveDailyMealSubscriptionsByBusinessIdDaoInput = z.infer<
	typeof GetActiveDailyMealSubscriptionsByBusinessIdDaoInputSchema
>;

export const GetDailyMealSubscriptionsByUserIdDaoInputSchema = z
	.object({
		user_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		start_date: Timestamp.optional().openapi({ example: '2025-01-01T00:00:00.000Z' }),
	})
	.openapi({
		title: 'GetDailyMealSubscriptionsByUserIdDaoInput',
		description: 'DAO input for getDailyMealSubscriptionsByUserId(user_id, start_date)',
	});
export type GetDailyMealSubscriptionsByUserIdDaoInput = z.infer<typeof GetDailyMealSubscriptionsByUserIdDaoInputSchema>;

export const GetTodayDailyMealSubscriptionsByBusinessIdDaoInputSchema = z
	.object({
		business_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
	})
	.openapi({
		title: 'GetTodayDailyMealSubscriptionsByBusinessIdDaoInput',
		description: "DAO input for getToday's daily meal subscriptions by business_id",
	});
export type GetTodayDailyMealSubscriptionsByBusinessIdDaoInput = z.infer<
	typeof GetTodayDailyMealSubscriptionsByBusinessIdDaoInputSchema
>;

export const GetDailyMealSubscriptionByIdDaoInputSchema = z
	.object({
		id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
	})
	.openapi({
		title: 'GetDailyMealSubscriptionByIdDaoInput',
		description: 'DAO input for getDailyMealSubscriptionById(id)',
	});
export type GetDailyMealSubscriptionByIdDaoInput = z.infer<typeof GetDailyMealSubscriptionByIdDaoInputSchema>;

export const CreateDailyMealSubscriptionDaoInputSchema = z
	.object({
		user_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		business_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		delivery_address_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		type: z.string().min(1),
		customers: z.array(z.any()),
		start_date: Timestamp.openapi({ example: '2025-01-01T00:00:00.000Z' }),
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
	.openapi({
		title: 'CreateDailyMealSubscriptionDaoInput',
		description: 'DAO input for createDailyMealSubscription(...)',
	});
export type CreateDailyMealSubscriptionDaoInput = z.infer<typeof CreateDailyMealSubscriptionDaoInputSchema>;

export const GetSubscriptionByIdDaoInputSchema = z
	.object({
		id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		includeObj: z.any().optional(),
	})
	.openapi({
		title: 'GetSubscriptionByIdDaoInput',
		description: 'DAO input for getSubscriptionById(id, includeObj?)',
	});
export type GetSubscriptionByIdDaoInput = z.infer<typeof GetSubscriptionByIdDaoInputSchema>;

export const UpdateSubscriptionStatusDaoInputSchema = z
	.object({
		id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		status: z.string().min(1),
		includeObj: z.any().optional(),
	})
	.openapi({
		title: 'UpdateSubscriptionStatusDaoInput',
		description: 'DAO input for updateSubscriptionStatus(id, status, includeObj?)',
	});
export type UpdateSubscriptionStatusDaoInput = z.infer<typeof UpdateSubscriptionStatusDaoInputSchema>;

export const ConnectSubscriptionWithDriverDaoInputSchema = z
	.object({
		id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		delivery_driver_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		includeObj: z.any().optional(),
	})
	.openapi({
		title: 'ConnectSubscriptionWithDriverDaoInput',
		description: 'DAO input for connecting subscription with delivery driver',
	});
export type ConnectSubscriptionWithDriverDaoInput = z.infer<typeof ConnectSubscriptionWithDriverDaoInputSchema>;

export const UpdateDailyMealInstancesDaoInputSchema = z
	.object({
		instance_ids: z.array(UUID).openapi({ example: ['00000000-0000-0000-0000-000000000000'] }),
		status: z.string().min(1),
	})
	.openapi({
		title: 'UpdateDailyMealInstancesDaoInput',
		description: 'DAO input for updateDailyMealInstances(instance_ids, status)',
	});
export type UpdateDailyMealInstancesDaoInput = z.infer<typeof UpdateDailyMealInstancesDaoInputSchema>;

export const UpdateDailyMealInstanceStatusByIdDaoInputSchema = z
	.object({
		instance_id: UUID.openapi({ example: '00000000-0000-0000-0000-000000000000' }),
		status: z.string().min(1),
	})
	.openapi({
		title: 'UpdateDailyMealInstanceStatusByIdDaoInput',
		description: 'DAO input for updateDailyMealInstanceStatusById(instance_id, status)',
	});
export type UpdateDailyMealInstanceStatusByIdDaoInput = z.infer<typeof UpdateDailyMealInstanceStatusByIdDaoInputSchema>;

export function registerDailyMealDaoSchemas(registry: OpenAPIRegistry) {
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
