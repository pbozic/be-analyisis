import { CREDIT_STATUS, FUNDS_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Referral } from '../referral/Referral.js';
import type { User } from '../users/User.js';
import type { Transaction } from '../payments/Transaction.js';
import { ReferralResponseSchema } from '../referral/Referral';
import { UserResponseSchema } from '../users/User';
import { TransactionResponseSchema } from '../payments/Transaction';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateWalletFundSchema = z
	.object({
		wallet_funds_id: z.string().uuid(),
		user_id: z.string().uuid(),
		referral_id: z.string().uuid().nullable().optional(),
		charge_id: z.string().uuid().nullable().optional(),
		amount: z.number(),
		reserved_order: z.string().nullable().optional(),
		reserved_daily_meals_subscription: z.string().nullable().optional(),
		reserved_business: z.string().nullable().optional(),
		expires_at: z.unknown().nullable().optional(),
		type: z.nativeEnum(FUNDS_TYPE),
		status: z.nativeEnum(CREDIT_STATUS).nullable().optional(),
	})
	.openapi('CreateWalletFund');

export type CreateWalletFundInput = z.infer<typeof CreateWalletFundSchema>;

export const UpdateWalletFundSchema = CreateWalletFundSchema.partial().openapi('UpdateWalletFund');
export type UpdateWalletFundInput = z.infer<typeof UpdateWalletFundSchema>;

export const WalletFundResponseSchema = z
	.object({
		wallet_funds_id: z.string(),
		user_id: z.string(),
		referral_id: z.string().nullable().optional(),
		charge_id: z.string().nullable().optional(),
		amount: z.number(),
		reserved_order: z.string().nullable().optional(),
		reserved_daily_meals_subscription: z.string().nullable().optional(),
		reserved_business: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		expires_at: z.string().datetime().nullable().optional(),
		type: z.nativeEnum(FUNDS_TYPE),
		status: z.nativeEnum(CREDIT_STATUS).nullable().optional(),
		referral: ReferralResponseSchema.nullable().optional(),
		user: UserResponseSchema,
		transactions: z.array(TransactionResponseSchema),
	})
	.openapi('WalletFundResponse');

export type WalletFundResponse = z.infer<typeof WalletFundResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateWalletFund', CreateWalletFundSchema);
	registry.register('UpdateWalletFund', UpdateWalletFundSchema);
	registry.register('WalletFundResponse', WalletFundResponseSchema);
}

export type WalletFund = {
	wallet_funds_id: string;
	user_id: string;
	referral_id?: string | null;
	charge_id?: string | null;
	amount: number;
	reserved_order?: string | null;
	reserved_daily_meals_subscription?: string | null;
	reserved_business?: string | null;
	created_at: Date;
	updated_at: Date;
	expires_at?: Date | null;
	type: FUNDS_TYPE;
	status?: CREDIT_STATUS | null;
	referral?: Referral | null;
	user?: User;
	transactions?: Transaction[];
};
