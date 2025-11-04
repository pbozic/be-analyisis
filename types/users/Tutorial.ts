import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import type { UserTutorial } from './UserTutorial.js';
import { UserTutorialResponseSchema } from './UserTutorial';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Tutorial = {
	tutorial_id: string;
	key: string;
	title: string;
	version: number;
	mandatory: boolean;
	createdAt: Date;
	retiredAt?: Date | null;
	user_tutorials: UserTutorial[];
};

export const CreateTutorialSchema = z
	.object({
		tutorial_id: z.string().uuid(),
		key: z.string(),
		title: z.string(),
		version: z.number(),
		mandatory: z.boolean(),
		createdAt: z.unknown(),
		retiredAt: z.unknown().nullable().optional(),
	})
	.openapi('CreateTutorial');

export type CreateTutorialInput = z.infer<typeof CreateTutorialSchema>;

export const UpdateTutorialSchema = CreateTutorialSchema.partial().openapi('UpdateTutorial');
export type UpdateTutorialInput = z.infer<typeof UpdateTutorialSchema>;

export const TutorialResponseSchema = z
	.object({
		tutorial_id: z.string(),
		key: z.string(),
		title: z.string(),
		version: z.number(),
		mandatory: z.boolean(),
		createdAt: z.string().datetime(),
		retiredAt: z.string().datetime().nullable().optional(),
		user_tutorials: z.array(UserTutorialResponseSchema),
	})
	.openapi('TutorialResponse');

export type TutorialResponse = z.infer<typeof TutorialResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTutorial', CreateTutorialSchema);
	registry.register('UpdateTutorial', UpdateTutorialSchema);
	registry.register('TutorialResponse', TutorialResponseSchema);
}
