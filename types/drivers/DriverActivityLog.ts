import { ACTIVITY_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Driver } from './Driver.js';
import { DriverResponseSchema } from './Driver';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDriverActivityLogSchema = z
	.object({
		driver_activity_log_id: z.string().uuid(),
		driver_id: z.string().uuid(),
		activity_type: z.nativeEnum(ACTIVITY_TYPE),
		started_at: z.unknown(),
		ended_at: z.unknown().nullable().optional(),
		timeout_at: z.unknown().nullable().optional(),
		lockout_until: z.unknown().nullable().optional(),
	})
	.openapi('CreateDriverActivityLog');

export type CreateDriverActivityLogInput = z.infer<typeof CreateDriverActivityLogSchema>;

export const UpdateDriverActivityLogSchema = CreateDriverActivityLogSchema.partial().openapi('UpdateDriverActivityLog');
export type UpdateDriverActivityLogInput = z.infer<typeof UpdateDriverActivityLogSchema>;

export const DriverActivityLogResponseSchema = z
	.object({
		driver_activity_log_id: z.string(),
		driver_id: z.string(),
		activity_type: z.nativeEnum(ACTIVITY_TYPE),
		started_at: z.string().datetime(),
		ended_at: z.string().datetime().nullable().optional(),
		timeout_at: z.string().datetime().nullable().optional(),
		lockout_until: z.string().datetime().nullable().optional(),
		driver: DriverResponseSchema,
	})
	.openapi('DriverActivityLogResponse');

export type DriverActivityLogResponse = z.infer<typeof DriverActivityLogResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDriverActivityLog', CreateDriverActivityLogSchema);
	registry.register('UpdateDriverActivityLog', UpdateDriverActivityLogSchema);
	registry.register('DriverActivityLogResponse', DriverActivityLogResponseSchema);
}

export type DriverActivityLog = {
	driver_activity_log_id: string;
	driver_id: string;
	activity_type: ACTIVITY_TYPE;
	started_at: Date;
	ended_at?: Date | null;
	timeout_at?: Date | null;
	lockout_until?: Date | null;
	driver?: Driver;
};
