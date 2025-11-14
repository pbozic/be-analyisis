import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { TUTORIAL_STATUS } from '@prisma/client';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Tutorials DTOs
// =======================

// Request schemas moved to tutorials.validators.ts

export const TutorialBaseSchema = z
	.object({
		tutorial_id: UUID,
		key: z.string(),
		title: z.string(),
		version: z.number().int().default(1),
		mandatory: z.boolean().default(false),
		createdAt: z.string().datetime(),
		retiredAt: z.string().datetime().nullable().optional(),
	})
	.openapi('TutorialBase');
export type TutorialBase = z.infer<typeof TutorialBaseSchema>;

export const TutorialDetailSchema = TutorialBaseSchema.extend({
	status: z.nativeEnum(TUTORIAL_STATUS).default('NOT_SEEN'),
	versionSeen: z.number().int().default(0),
	firstSeenAt: z.string().datetime().nullable().optional(),
	completedAt: z.string().datetime().nullable().optional(),
	dismissedAt: z.string().datetime().nullable().optional(),
}).openapi('TutorialDetail');
export type TutorialDetail = z.infer<typeof TutorialDetailSchema>;

// =======================
// User Tutorials DTO
// =======================

export const UserTutorialBaseSchema = z
	.object({
		user_id: UUID,
		tutorial_id: UUID,
		status: z.nativeEnum(TUTORIAL_STATUS).default('NOT_SEEN'),
		versionSeen: z.number().int().default(0),
		firstSeenAt: z.string().datetime().nullable().optional(),
		completedAt: z.string().datetime().nullable().optional(),
		dismissedAt: z.string().datetime().nullable().optional(),
	})
	.openapi('UserTutorialBase');
export type UserTutorialBase = z.infer<typeof UserTutorialBaseSchema>;

// User tutorial state
export const UserTutorialStateSchema = z
	.object({
		id: z.string().uuid(),
		user_id: UUID,
		epoch: z.number().int().default(1),
		updatedAt: z.string().datetime(),
	})
	.openapi('UserTutorialState');
export type UserTutorialState = z.infer<typeof UserTutorialStateSchema>;

// Mapper functions moved to ./tutorials.mappers.ts
// Please import mapper helpers from './tutorials.mappers.js'

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TutorialBase', TutorialBaseSchema);
	registry.register('TutorialDetail', TutorialDetailSchema);
	registry.register('UserTutorialBase', UserTutorialBaseSchema);
	registry.register('UserTutorialState', UserTutorialStateSchema);
}
