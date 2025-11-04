import { TokenType } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import { UserResponseSchema } from './User';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateTokenSchema = z
	.object({
		token_id: z.string().uuid(),
		user_id: z.string().uuid(),
		type: z.nativeEnum(TokenType),
		token: z.string(),
		expires_at: z.unknown(),
		active: z.boolean(),
	})
	.openapi('CreateToken');

export type CreateTokenInput = z.infer<typeof CreateTokenSchema>;

export const UpdateTokenSchema = CreateTokenSchema.partial().openapi('UpdateToken');
export type UpdateTokenInput = z.infer<typeof UpdateTokenSchema>;

export const TokenResponseSchema = z
	.object({
		token_id: z.string(),
		user_id: z.string(),
		type: z.nativeEnum(TokenType),
		token: z.string(),
		expires_at: z.string().datetime(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		active: z.boolean(),
		users: UserResponseSchema,
	})
	.openapi('TokenResponse');

export type TokenResponse = z.infer<typeof TokenResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateToken', CreateTokenSchema);
	registry.register('UpdateToken', UpdateTokenSchema);
	registry.register('TokenResponse', TokenResponseSchema);
}

export type Token = {
	token_id: string;
	user_id: string;
	type: TokenType;
	token: string;
	expires_at: Date;
	created_at: Date;
	updated_at: Date;
	active: boolean;
	users?: User;
};
