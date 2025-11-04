// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { TUTORIAL_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import type { Tutorial } from './Tutorial.js';
import { UserResponseSchema } from './User';
import { TutorialResponseSchema } from './Tutorial';

extendZodWithOpenApi(z);

export type UserTutorial = {
	user_id: string;
	tutorial_id: string;
	epoch: number;
	status: TUTORIAL_STATUS;
	versionSeen: number;
	firstSeenAt?: Date | null;
	completedAt?: Date | null;
	dismissedAt?: Date | null;
	user: User;
	tutorial: Tutorial;
};

export const CreateUserTutorialSchema = z
	.object({
		user_id: z.string().uuid(),
		tutorial_id: z.string().uuid(),
		epoch: z.number(),
		status: z.nativeEnum(TUTORIAL_STATUS),
		versionSeen: z.number(),
		firstSeenAt: z.unknown().nullable().optional(),
		completedAt: z.unknown().nullable().optional(),
		dismissedAt: z.unknown().nullable().optional(),
	})
	.openapi('CreateUserTutorial');

export type CreateUserTutorialInput = z.infer<typeof CreateUserTutorialSchema>;

export const UpdateUserTutorialSchema = CreateUserTutorialSchema.partial().openapi('UpdateUserTutorial');
export type UpdateUserTutorialInput = z.infer<typeof UpdateUserTutorialSchema>;

export const UserTutorialResponseSchema = z
	.object({
		user_id: z.string(),
		tutorial_id: z.string(),
		epoch: z.number(),
		status: z.nativeEnum(TUTORIAL_STATUS),
		versionSeen: z.number(),
		firstSeenAt: z.string().datetime().nullable().optional(),
		completedAt: z.string().datetime().nullable().optional(),
		dismissedAt: z.string().datetime().nullable().optional(),
		user: UserResponseSchema,
		tutorial: TutorialResponseSchema,
	})
	.openapi('UserTutorialResponse');

export type UserTutorialResponse = z.infer<typeof UserTutorialResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserTutorial', CreateUserTutorialSchema);
	registry.register('UpdateUserTutorial', UpdateUserTutorialSchema);
	registry.register('UserTutorialResponse', UserTutorialResponseSchema);
}
