import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// === Online Status Update ===
export const OnlineStatusUpdateSchema = z
	.object({
		online: z.boolean(),
	})
	.openapi({
		title: 'OnlineStatusUpdate',
		description: 'Schema for updating online status',
	});

// === Status Update ===
export const StatusUpdateSchema = z
	.object({
		status: z.string().min(1),
	})
	.openapi({
		title: 'StatusUpdate',
		description: 'Generic status update schema',
	});

// === Status Update with Reason ===
export const StatusUpdateWithReasonSchema = z
	.object({
		status: z.string().min(1),
		reason: z.string().min(1),
	})
	.openapi({
		title: 'StatusUpdateWithReason',
		description: 'Status update with reason',
	});

// === Status Update with ID ===
export const StatusUpdateWithIdSchema = z
	.object({
		id: UUID,
		status: z.string().min(1),
	})
	.openapi({
		title: 'StatusUpdateWithId',
		description: 'Status update with entity ID',
	});

// === Online Status Update with ID ===
export const OnlineStatusUpdateWithIdSchema = z
	.object({
		id: UUID,
		online: z.boolean(),
	})
	.openapi({
		title: 'OnlineStatusUpdateWithId',
		description: 'Online status update with entity ID',
	});

// === Active Status Update ===
export const ActiveStatusUpdateSchema = z
	.object({
		active: z.boolean(),
		reason: z.string().min(1),
	})
	.openapi({
		title: 'ActiveStatusUpdate',
		description: 'Active status update with reason',
	});

// === Disabled Status Update ===
export const DisabledStatusUpdateSchema = z
	.object({
		disabled: z.boolean(),
		reason: z.string().min(1),
	})
	.openapi({
		title: 'DisabledStatusUpdate',
		description: 'Disabled status update with reason',
	});

// === Type exports ===
export type OnlineStatusUpdate = z.infer<typeof OnlineStatusUpdateSchema>;
export type StatusUpdate = z.infer<typeof StatusUpdateSchema>;
export type StatusUpdateWithReason = z.infer<typeof StatusUpdateWithReasonSchema>;
export type StatusUpdateWithId = z.infer<typeof StatusUpdateWithIdSchema>;
export type OnlineStatusUpdateWithId = z.infer<typeof OnlineStatusUpdateWithIdSchema>;
export type ActiveStatusUpdate = z.infer<typeof ActiveStatusUpdateSchema>;
export type DisabledStatusUpdate = z.infer<typeof DisabledStatusUpdateSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('OnlineStatusUpdate', OnlineStatusUpdateSchema);
	registry.register('StatusUpdate', StatusUpdateSchema);
	registry.register('StatusUpdateWithReason', StatusUpdateWithReasonSchema);
	registry.register('StatusUpdateWithId', StatusUpdateWithIdSchema);
	registry.register('OnlineStatusUpdateWithId', OnlineStatusUpdateWithIdSchema);
	registry.register('ActiveStatusUpdate', ActiveStatusUpdateSchema);
	registry.register('DisabledStatusUpdate', DisabledStatusUpdateSchema);
}
