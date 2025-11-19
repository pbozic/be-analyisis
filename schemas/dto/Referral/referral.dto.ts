import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { UserRefSchema } from '../User/index.ts';

extendZodWithOpenApi(z);

// User relation now reuses common BasicUserDataSchema

// =======================
// Referral DTOs
// =======================
export const ReferralBaseSchema = z
	.object({
		referral_id: UUID,
		referral_code: z.string().min(1),
		referrer_user_id: UUID,
		referred_user_id: UUID,
		conditions_met: z.boolean().default(false),
		reward_claimed: z.boolean().default(false),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('ReferralBase');
export type ReferralBase = z.infer<typeof ReferralBaseSchema>;

export const ReferralRefSchema = z
	.object({
		referral_id: UUID,
	})
	.openapi('ReferralRef');
export type ReferralRef = z.infer<typeof ReferralRefSchema>;

export const ReferralDetailSchema = ReferralBaseSchema.extend({
	referrer: z
		.lazy(() => UserRefSchema)
		.nullable()
		.optional(),
	referred: z
		.lazy(() => UserRefSchema)
		.nullable()
		.optional(),
}).openapi('ReferralDetail');
export type ReferralDetail = z.infer<typeof ReferralDetailSchema>;

// Mappers moved to referral.mappers.ts

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// BasicUserDataSchema is registered in common registry
	registry.register('ReferralBase', ReferralBaseSchema);
	registry.register('ReferralRef', ReferralRefSchema);
	registry.register('ReferralDetail', ReferralDetailSchema);
}
