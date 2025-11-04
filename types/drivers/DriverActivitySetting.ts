import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDriverActivitySettingSchema = z
	.object({
		driver_activity_settings_id: z.string().uuid(),
		first_offline_lockout: z.number(),
		second_offline_lockout: z.number(),
		online_timeout: z.number(),
		active: z.boolean(),
	})
	.openapi('CreateDriverActivitySetting');

export type CreateDriverActivitySettingInput = z.infer<typeof CreateDriverActivitySettingSchema>;

export const UpdateDriverActivitySettingSchema =
	CreateDriverActivitySettingSchema.partial().openapi('UpdateDriverActivitySetting');
export type UpdateDriverActivitySettingInput = z.infer<typeof UpdateDriverActivitySettingSchema>;

export const DriverActivitySettingResponseSchema = z
	.object({
		driver_activity_settings_id: z.string(),
		first_offline_lockout: z.number(),
		second_offline_lockout: z.number(),
		online_timeout: z.number(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		active: z.boolean(),
	})
	.openapi('DriverActivitySettingResponse');

export type DriverActivitySettingResponse = z.infer<typeof DriverActivitySettingResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDriverActivitySetting', CreateDriverActivitySettingSchema);
	registry.register('UpdateDriverActivitySetting', UpdateDriverActivitySettingSchema);
	registry.register('DriverActivitySettingResponse', DriverActivitySettingResponseSchema);
}

export type DriverActivitySetting = {
	driver_activity_settings_id: string;
	first_offline_lockout: number;
	second_offline_lockout: number;
	online_timeout: number;
	created_at: Date;
	updated_at: Date;
	active: boolean;
};
