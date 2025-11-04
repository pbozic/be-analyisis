import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { WalletFund } from '../wallet/WalletFund.js';
import { UserResponseSchema } from '../users/User';
import { WalletFundResponseSchema } from '../wallet/WalletFund';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateReferralSchema = z
	.object({
		referral_id: z.string().uuid(),
		referral_code: z.string(),
		referrer_user_id: z.string().uuid(),
		referred_user_id: z.string().uuid(),
		conditions_met: z.boolean(),
		reward_claimed: z.boolean(),
	})
	.openapi('CreateReferral');

export type CreateReferralInput = z.infer<typeof CreateReferralSchema>;

export const UpdateReferralSchema = CreateReferralSchema.partial().openapi('UpdateReferral');
export type UpdateReferralInput = z.infer<typeof UpdateReferralSchema>;

export const ReferralResponseSchema = z
	.object({
		referral_id: z.string(),
		referral_code: z.string(),
		referrer_user_id: z.string(),
		referred_user_id: z.string(),
		conditions_met: z.boolean(),
		reward_claimed: z.boolean(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		referrer: UserResponseSchema,
		referred: UserResponseSchema,
		credits: z.array(WalletFundResponseSchema),
	})
	.openapi('ReferralResponse');

export type ReferralResponse = z.infer<typeof ReferralResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateReferral', CreateReferralSchema);
	registry.register('UpdateReferral', UpdateReferralSchema);
	registry.register('ReferralResponse', ReferralResponseSchema);
}

export type Referral = {
	referral_id: string;
	referral_code: string;
	referrer_user_id: string;
	referred_user_id: string;
	conditions_met: boolean;
	reward_claimed: boolean;
	created_at: Date;
	updated_at: Date;
	referrer?: User;
	referred?: User;
	credits?: WalletFund[];
};
