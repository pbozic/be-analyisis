import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ScheduleSlot } from './ScheduleSlot.js';
import { ScheduleSlotResponseSchema } from './ScheduleSlot';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BookingSlot = {
	booking_slot_id: string;
	schedule_slot_id: string;
	schedule_slot: ScheduleSlot;
	start_time: Date;
	end_time: Date;
};

export const CreateBookingSlotSchema = z
	.object({
		booking_slot_id: z.string().uuid(),
		schedule_slot_id: z.string().uuid(),
		start_time: z.unknown(),
		end_time: z.unknown(),
	})
	.openapi('CreateBookingSlot');

export type CreateBookingSlotInput = z.infer<typeof CreateBookingSlotSchema>;

export const UpdateBookingSlotSchema = CreateBookingSlotSchema.partial().openapi('UpdateBookingSlot');
export type UpdateBookingSlotInput = z.infer<typeof UpdateBookingSlotSchema>;

export const BookingSlotResponseSchema = z
	.object({
		booking_slot_id: z.string(),
		schedule_slot_id: z.string(),
		schedule_slot: ScheduleSlotResponseSchema,
		start_time: z.string().datetime(),
		end_time: z.string().datetime(),
	})
	.openapi('BookingSlotResponse');

export type BookingSlotResponse = z.infer<typeof BookingSlotResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBookingSlot', CreateBookingSlotSchema);
	registry.register('UpdateBookingSlot', UpdateBookingSlotSchema);
	registry.register('BookingSlotResponse', BookingSlotResponseSchema);
}
