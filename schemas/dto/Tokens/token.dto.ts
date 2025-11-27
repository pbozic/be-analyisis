import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';
import { BasicUserDataSchema } from '../User/user.js';
import { BusinessRefSchema } from '../Business/business.dto.ts';

extendZodWithOpenApi(z);

// =======================
// Token DTOs
// =======================

export const TokenBaseSchema = z
	.object({
		token_id: UUID.optional(),
		user_id: UUID,
		token: z.string(),
		type: z.string().openapi({ example: 'PHONE_VERIFICATION' }),
		active: z.boolean().default(true),
		expires_at: Timestamp,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('TokenBase');
export type TokenBase = z.infer<typeof TokenBaseSchema>;

export const TokenRefSchema = z
	.object({
		token_id: UUID.optional(),
		label: z.string().default('token'),
	})
	.openapi('TokenRef');
export type TokenRef = z.infer<typeof TokenRefSchema>;

export const TokenDetailSchema = TokenBaseSchema.extend({
	user: z
		.lazy(() => BasicUserDataSchema)
		.nullable()
		.optional(),
	businesses: z.array(z.lazy(() => BusinessRefSchema)).optional(),
}).openapi('TokenDetail');
export type TokenDetail = z.infer<typeof TokenDetailSchema>;

// Mappers moved to token.mappers.ts

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TokenBase', TokenBaseSchema);
	registry.register('TokenRef', TokenRefSchema);
	registry.register('TokenDetail', TokenDetailSchema);
}
