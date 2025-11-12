import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives';
import { SERVICE_TYPE } from '../../../lib/constants';

extendZodWithOpenApi(z);

// Matches SERVICE_TYPE in lib/constants.js
export const ServiceTypeSchema = z.enum([SERVICE_TYPE.TAXI, SERVICE_TYPE.DELIVERY]);

// Accepts Prisma-like where/orderBy and pagination
export const GetOrdersWithPaginationSchema = z
	.object({
		where: z.record(z.unknown()).nullable().optional().openapi({ description: 'Prisma where filter' }),
		orderBy: z.record(z.unknown()).nullable().optional().openapi({ description: 'Prisma orderBy' }),
		service: ServiceTypeSchema.openapi({ example: 'TAXI' }),
		page: z.coerce.number().int().min(1).default(1).openapi({ example: 1 }),
		take: z.coerce.number().int().min(1).max(100).default(8).openapi({ example: 8 }),
	})
	.openapi('GetOrdersWithPagination');

export type GetOrdersWithPaginationInput = z.infer<typeof GetOrdersWithPaginationSchema>;

export const UpdateDriverActivitySettingsSchema = z
	.object({
		driver_activity_settings_id: UUID.optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
		first_offline_lockout: z.coerce.number().int().min(1).default(30).openapi({ example: 30 }),
		second_offline_lockout: z.coerce.number().int().min(1).default(120).openapi({ example: 120 }),
		online_timeout: z.coerce.number().int().min(1).default(120).openapi({ example: 120 }),
		active: z.boolean().default(false),
	})
	.openapi('UpdateDriverActivitySettings');

export type UpdateDriverActivitySettingsInput = z.infer<typeof UpdateDriverActivitySettingsSchema>;

export const DriverActivitySettingsResponseSchema = UpdateDriverActivitySettingsSchema.extend({
	driver_activity_settings_id: UUID,
}).openapi('DriverActivitySettingsResponse');

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('GetOrdersWithPagination', GetOrdersWithPaginationSchema);
	registry.register('UpdateDriverActivitySettings', UpdateDriverActivitySettingsSchema);
	registry.register('DriverActivitySettingsResponse', DriverActivitySettingsResponseSchema);
}
