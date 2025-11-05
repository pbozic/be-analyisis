import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';
import { BasicUserDataSchema } from '../common/User.dto.ts';
import { BusinessRefSchema } from '../common/Business.dto.ts';

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
	user: BasicUserDataSchema.nullable().optional(),
	businesses: z.array(BusinessRefSchema).optional(),
}).openapi('TokenDetail');
export type TokenDetail = z.infer<typeof TokenDetailSchema>;

// =======================
// Mappers
// =======================
export function toTokenRef(row: unknown): TokenRef {
	const r = row as { token_id?: string; token?: string };
	return TokenRefSchema.parse({ token_id: r.token_id, label: 'token' });
}

type BusinessLike = { business_id: string; name?: string | null };
type UserWithBusinesses = { business_users?: Array<{ business?: BusinessLike | null }> } | null;
type PrismaToken = {
	token_id?: string;
	user_id: string;
	token: string;
	type: string;
	active?: boolean | null;
	expires_at?: string | Date;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	users?: UserWithBusinesses | undefined;
};

export function toTokenDetail(row: unknown): TokenDetail {
	const r = row as PrismaToken;
	const businesses = Array.isArray(r?.users?.business_users)
		? (r.users!.business_users as Array<{ business?: BusinessLike | null }>)
				.map((bu) => bu.business)
				.filter((b): b is BusinessLike => !!b)
				.map((b) => ({
					business_id: b.business_id,
					name: b.name ?? undefined,
				}))
		: undefined;
	return TokenDetailSchema.parse({
		token_id: r.token_id ?? undefined,
		user_id: r.user_id,
		token: r.token,
		type: r.type,
		active: (r.active as boolean | null | undefined) ?? true,
		expires_at: r.expires_at ? new Date(r.expires_at as string | Date).toISOString() : new Date().toISOString(),
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user: (r as { users?: unknown }).users ?? null,
		businesses,
	});
}

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TokenBase', TokenBaseSchema);
	registry.register('TokenRef', TokenRefSchema);
	registry.register('TokenDetail', TokenDetailSchema);
}
