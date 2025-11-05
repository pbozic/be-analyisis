import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// === Timeline Entry ===
export const TimelineEntrySchema = z
	.object({
		status: z.string().min(1),
		timestamp: Timestamp,
		metadata: z.record(z.any()).optional(),
	})
	.openapi({
		title: 'TimelineEntry',
		description: 'Single timeline entry with status and timestamp',
	});

// === Timeline Update ===
export const TimelineUpdateSchema = z
	.object({
		timeline: z.array(TimelineEntrySchema),
	})
	.openapi({
		title: 'TimelineUpdate',
		description: 'Timeline update with multiple entries',
	});

// === Scheduled Date Time ===
export const ScheduledDateTimeSchema = z
	.object({
		date: z.string().optional(),
		time: z.string().optional(),
		datetime: Timestamp.optional(),
	})
	.openapi({
		title: 'ScheduledDateTime',
		description: 'Scheduled date and time options',
	});

// === Time Update ===
export const TimeUpdateSchema = z
	.object({
		timestamp: Timestamp,
	})
	.openapi({
		title: 'TimeUpdate',
		description: 'Generic timestamp update',
	});

// === Pickup Time Update ===
export const PickupTimeUpdateSchema = z
	.object({
		pickup_time: Timestamp,
	})
	.openapi({
		title: 'PickupTimeUpdate',
		description: 'Pickup time update',
	});

// === Delivery Time Update ===
export const DeliveryTimeUpdateSchema = z
	.object({
		delivery_time: Timestamp,
	})
	.openapi({
		title: 'DeliveryTimeUpdate',
		description: 'Delivery time update',
	});

// === Type exports ===
export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
export type TimelineUpdate = z.infer<typeof TimelineUpdateSchema>;
export type ScheduledDateTime = z.infer<typeof ScheduledDateTimeSchema>;
export type TimeUpdate = z.infer<typeof TimeUpdateSchema>;
export type PickupTimeUpdate = z.infer<typeof PickupTimeUpdateSchema>;
export type DeliveryTimeUpdate = z.infer<typeof DeliveryTimeUpdateSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TimelineEntry', TimelineEntrySchema);
	registry.register('TimelineUpdate', TimelineUpdateSchema);
	registry.register('ScheduledDateTime', ScheduledDateTimeSchema);
	registry.register('TimeUpdate', TimeUpdateSchema);
	registry.register('PickupTimeUpdate', PickupTimeUpdateSchema);
	registry.register('DeliveryTimeUpdate', DeliveryTimeUpdateSchema);
}
