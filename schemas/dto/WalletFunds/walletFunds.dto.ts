import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { FUNDS_TYPE, CREDIT_STATUS } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';
import { UserRefSchema } from '../User/user.js';
import { TransactionRefSchema } from '../User/transaction.js';
extendZodWithOpenApi(z);

// ===== ENUMS =====

export const FundsTypeSchema = z.nativeEnum(FUNDS_TYPE).openapi({
	title: 'FundsType',
	description: 'Type of wallet funds - regular funds or various credit types',
});

export const CreditStatusSchema = z.nativeEnum(CREDIT_STATUS).openapi({
	title: 'CreditStatus',
	description: 'Status of credit wallet funds',
});

// ===== BASE SCHEMAS =====

// WalletFunds Base Schema - scalars only, no relations
export const WalletFundsBaseSchema = z
	.object({
		wallet_funds_id: UUID,
		user_id: UUID,
		transaction_id: UUID.nullable(),
		referral_id: UUID.nullable(),
		charge_id: z.string().nullable(),
		amount: z.number().int().describe('Amount in cents'),
		reserved_order: z.string().nullable(),
		reserved_daily_meals_subscription: z.string().nullable(),
		reserved_business: z.string().nullable(),
		type: FundsTypeSchema,
		status: CreditStatusSchema.nullable(),
		expires_at: Timestamp.nullable(),
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi({
		title: 'WalletFundsBase',
		description: 'Base wallet funds schema with scalar fields only',
	});

export type WalletFundsBase = z.infer<typeof WalletFundsBaseSchema>;

// ===== REF SCHEMAS =====

// WalletFunds Ref Schema - minimal identity for embedding elsewhere
export const WalletFundsRefSchema = z
	.object({
		wallet_funds_id: UUID,
		amount: z.number().int(),
		type: FundsTypeSchema,
		status: CreditStatusSchema.nullable(),
		expires_at: Timestamp.nullable(),
	})
	.openapi({
		title: 'WalletFundsRef',
		description: 'Minimal wallet funds reference for embedding in other responses',
	});

export type WalletFundsRef = z.infer<typeof WalletFundsRefSchema>;

// ===== RESPONSE SCHEMAS =====

// WalletFunds Response Schema - Base with embedded refs
export const WalletFundsResponseSchema = WalletFundsBaseSchema.extend({
	user: UserRefSchema.optional(),
	transactions: z.array(TransactionRefSchema).optional(),
}).openapi({
	title: 'WalletFundsResponse',
	description: 'Complete wallet funds response with related entities',
});

export type WalletFundsResponse = z.infer<typeof WalletFundsResponseSchema>;

// Request and query schemas moved to walletFunds.validators.ts

// ===== AGGREGATE RESPONSE SCHEMAS =====

// Wallet Balance Response - for getAvailableWalletBalance function
export const WalletBalanceResponseSchema = z
	.object({
		wallet_balance: z.number().int().nonnegative().describe('Total available balance in cents'),
	})
	.openapi({
		title: 'WalletBalanceResponse',
		description: 'Response for wallet balance queries',
	});

export type WalletBalanceResponse = z.infer<typeof WalletBalanceResponseSchema>;

// Wallet Balance Grouped Response - for getAvailableWalletBalanceGroupedByType function
export const WalletBalanceGroupedResponseSchema = z
	.object({
		balances: z.record(FundsTypeSchema, z.number().int().nonnegative()).describe('Balance by funds type'),
	})
	.openapi({
		title: 'WalletBalanceGroupedResponse',
		description: 'Response for wallet balance grouped by type',
	});

export type WalletBalanceGroupedResponse = z.infer<typeof WalletBalanceGroupedResponseSchema>;

// Credits Expiring Response - for findCreditsExpiringInDays function
export const CreditsExpiringResponseSchema = z
	.object({
		expiring_credits: z.array(WalletFundsResponseSchema),
		total_amount: z.number().int().nonnegative(),
		expiry_date: Timestamp,
	})
	.openapi({
		title: 'CreditsExpiringResponse',
		description: 'Response for credits expiring in specified days',
	});

export type CreditsExpiringResponse = z.infer<typeof CreditsExpiringResponseSchema>;

// ===== LIST RESPONSE SCHEMAS =====

// WalletFunds List Response - for paginated/bulk endpoints
export const WalletFundsListResponseSchema = z
	.object({
		data: z.array(WalletFundsResponseSchema),
		total: z.number().optional(),
		page: z.number().optional(),
		limit: z.number().optional(),
	})
	.openapi({
		title: 'WalletFundsList',
		description: 'Paginated list of wallet funds entries',
	});

export type WalletFundsListResponse = z.infer<typeof WalletFundsListResponseSchema>;

// ===== OPERATION RESULT SCHEMAS =====

// Expire Credits Result - for expireOutdatedCredits function
export const ExpireCreditsResultSchema = z
	.object({
		expired_count: z.number().int().nonnegative(),
	})
	.openapi({
		title: 'ExpireCreditsResult',
		description: 'Result of expiring outdated credits operation',
	});

export type ExpireCreditsResult = z.infer<typeof ExpireCreditsResultSchema>;

// ===== REGISTRATION FUNCTION =====

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register enums
	registry.register('FundsType', FundsTypeSchema);
	registry.register('CreditStatus', CreditStatusSchema);

	// Register base schemas
	registry.register('WalletFundsBase', WalletFundsBaseSchema);
	registry.register('WalletFundsRef', WalletFundsRefSchema);

	// Request schemas registered in walletFunds.validators.ts

	// Register response schemas
	registry.register('WalletFunds', WalletFundsResponseSchema);
	registry.register('WalletBalanceResponse', WalletBalanceResponseSchema);
	registry.register('WalletBalanceGroupedResponse', WalletBalanceGroupedResponseSchema);
	registry.register('CreditsExpiringResponse', CreditsExpiringResponseSchema);
	registry.register('WalletFundsList', WalletFundsListResponseSchema);
	registry.register('ExpireCreditsResult', ExpireCreditsResultSchema);

	// Register main response
	registry.register('WalletFundsResponse', WalletFundsResponseSchema);
}
