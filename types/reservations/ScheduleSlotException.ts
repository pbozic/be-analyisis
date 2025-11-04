import { SCHEDULE_SLOT_EXCEPTION_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ScheduleSlot } from './ScheduleSlot.js';
import { ScheduleSlotResponseSchema } from './ScheduleSlot';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateScheduleSlotExceptionSchema = z
	.object({
		schedule_slot_exception_id: z.string().uuid(),
		schedule_slot_id: z.string().uuid(),
		date: z.unknown(),
		start_time: z.unknown(),
		end_time: z.unknown(),
		reason: z.string().nullable().optional(),
		type: z.nativeEnum(SCHEDULE_SLOT_EXCEPTION_TYPE),
	})
	.openapi('CreateScheduleSlotException');

export type CreateScheduleSlotExceptionInput = z.infer<typeof CreateScheduleSlotExceptionSchema>;

export const UpdateScheduleSlotExceptionSchema =
	CreateScheduleSlotExceptionSchema.partial().openapi('UpdateScheduleSlotException');
export type UpdateScheduleSlotExceptionInput = z.infer<typeof UpdateScheduleSlotExceptionSchema>;

export const ScheduleSlotExceptionResponseSchema = z
	.object({
		schedule_slot_exception_id: z.string(),
		schedule_slot_id: z.string(),
		date: z.string().datetime(),
		start_time: z.string().datetime(),
		end_time: z.string().datetime(),
		reason: z.string().nullable().optional(),
		type: z.nativeEnum(SCHEDULE_SLOT_EXCEPTION_TYPE),
		schedule_slot: ScheduleSlotResponseSchema,
	})
	.openapi('ScheduleSlotExceptionResponse');

export type ScheduleSlotExceptionResponse = z.infer<typeof ScheduleSlotExceptionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateScheduleSlotException', CreateScheduleSlotExceptionSchema);
	registry.register('UpdateScheduleSlotException', UpdateScheduleSlotExceptionSchema);
	registry.register('ScheduleSlotExceptionResponse', ScheduleSlotExceptionResponseSchema);
}

export type ScheduleSlotException = {
	schedule_slot_exception_id: string;
	schedule_slot_id: string;
	date: Date;
	start_time: Date;
	end_time: Date;
	reason?: string | null;
	type: SCHEDULE_SLOT_EXCEPTION_TYPE;
	schedule_slot?: ScheduleSlot;
};
