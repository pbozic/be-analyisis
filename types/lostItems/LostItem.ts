import { LOST_FOUND_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { File } from '../files/File.js';
import type { User } from '../users/User.js';
import { FileResponseSchema } from '../files/File';
import { UserResponseSchema } from '../users/User';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateLostItemSchema = z
	.object({
		lost_item_id: z.string().uuid(),
		user_id: z.string().uuid().nullable().optional(),
		status: z.nativeEnum(LOST_FOUND_STATUS),
		description: z.string(),
		image_id: z.string().uuid().nullable().optional(),
		found: z.boolean().nullable().optional(),
	})
	.openapi('CreateLostItem');

export type CreateLostItemInput = z.infer<typeof CreateLostItemSchema>;

export const UpdateLostItemSchema = CreateLostItemSchema.partial().openapi('UpdateLostItem');
export type UpdateLostItemInput = z.infer<typeof UpdateLostItemSchema>;

export const LostItemResponseSchema = z
	.object({
		lost_item_id: z.string(),
		user_id: z.string().nullable().optional(),
		status: z.nativeEnum(LOST_FOUND_STATUS),
		description: z.string(),
		image_id: z.string().nullable().optional(),
		image: FileResponseSchema.nullable().optional(),
		found: z.boolean().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		user: UserResponseSchema.nullable().optional(),
	})
	.openapi('LostItemResponse');

export type LostItemResponse = z.infer<typeof LostItemResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateLostItem', CreateLostItemSchema);
	registry.register('UpdateLostItem', UpdateLostItemSchema);
	registry.register('LostItemResponse', LostItemResponseSchema);
}

export type LostItem = {
	lost_item_id: string;
	user_id?: string | null;
	status: LOST_FOUND_STATUS;
	description: string;
	image_id?: string | null;
	image?: File | null;
	found?: boolean | null;
	created_at: Date;
	updated_at: Date;
	user?: User | null;
};
