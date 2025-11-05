import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { TUTORIAL_STATUS } from '@prisma/client';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Tutorials DTOs
// =======================

export const SetTutorialStatusBodySchema = z
	.object({
		status: z.nativeEnum(TUTORIAL_STATUS),
		versionSeen: z.number().int().optional(),
	})
	.openapi('SetTutorialStatusBody');
export type SetTutorialStatusBody = z.infer<typeof SetTutorialStatusBodySchema>;

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

// ===============
// Mappers
// ===============
type PrismaTutorial = {
	tutorial_id: string;
	key: string;
	title: string;
	version: number;
	mandatory?: boolean;
	createdAt: string | Date;
	retiredAt?: string | Date | null;
};

export function toTutorialDetail(row: unknown): TutorialDetail {
	const t = row as PrismaTutorial & {
		status?: TUTORIAL_STATUS;
		versionSeen?: number | null;
		firstSeenAt?: string | Date | null;
		completedAt?: string | Date | null;
		dismissedAt?: string | Date | null;
	};
	return TutorialDetailSchema.parse({
		tutorial_id: t.tutorial_id,
		key: t.key,
		title: t.title,
		version: t.version,
		mandatory: t.mandatory ?? false,
		createdAt: new Date(t.createdAt).toISOString(),
		retiredAt: t.retiredAt ? new Date(t.retiredAt).toISOString() : null,
		status: t.status ?? 'NOT_SEEN',
		versionSeen: t.versionSeen ?? 0,
		firstSeenAt: t.firstSeenAt ? new Date(t.firstSeenAt).toISOString() : null,
		completedAt: t.completedAt ? new Date(t.completedAt).toISOString() : null,
		dismissedAt: t.dismissedAt ? new Date(t.dismissedAt).toISOString() : null,
	});
}

export function toUserTutorialState(row: unknown): UserTutorialState {
	const s = row as { id: string; user_id: string; epoch?: number; updatedAt: string | Date };
	return UserTutorialStateSchema.parse({
		id: s.id,
		user_id: s.user_id,
		epoch: s.epoch ?? 1,
		updatedAt: new Date(s.updatedAt).toISOString(),
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('SetTutorialStatusBody', SetTutorialStatusBodySchema);

	registry.register('TutorialBase', TutorialBaseSchema);
	registry.register('TutorialDetail', TutorialDetailSchema);
	registry.register('UserTutorialBase', UserTutorialBaseSchema);
	registry.register('UserTutorialState', UserTutorialStateSchema);
}
