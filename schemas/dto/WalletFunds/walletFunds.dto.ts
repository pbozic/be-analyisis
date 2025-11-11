import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { FUNDS_TYPE, CREDIT_STATUS, TRANSACTION_TYPE } from '@prisma/client';

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

// ===== REQUEST SCHEMAS =====

// Create WalletFunds Schema - for createWalletFunds, createCredit
export const CreateWalletFundsSchema = z
	.object({
		user_id: UUID,
		amount: z.number().int().positive().describe('Amount in cents'),
		charge_id: z.string().nullable().optional(),
		transaction_type: z.nativeEnum(TRANSACTION_TYPE).default(TRANSACTION_TYPE.CREDIT),
		type: FundsTypeSchema.default('FUNDS'),
		status: CreditStatusSchema.optional(),
		expires_at: Timestamp.nullable().optional(),
		referral_id: UUID.nullable().optional(),
	})
	.openapi({
		title: 'CreateWalletFunds',
		description: 'Schema for creating new wallet funds entry',
	});

export type CreateWalletFunds = z.infer<typeof CreateWalletFundsSchema>;

// Reserve Funds Schema - for reserveFunds function
export const ReserveFundsSchema = z
	.object({
		wallet_funds_id: UUID,
		reserve_amount: z.number().int().positive().describe('Amount to reserve in cents'),
		order_id: z.string(),
		reserve_type: z.enum(['order', 'daily_meals_subscription_payment']).default('order'),
	})
	.openapi({
		title: 'ReserveFunds',
		description: 'Schema for reserving wallet funds for orders',
	});

export type ReserveFunds = z.infer<typeof ReserveFundsSchema>;

// Release Funds Schema - for releaseFunds function
export const ReleaseFundsSchema = z
	.object({
		wallet_funds_id: UUID,
		release_amount: z.number().int().positive().describe('Amount to release in cents'),
	})
	.openapi({
		title: 'ReleaseFunds',
		description: 'Schema for releasing reserved wallet funds',
	});

export type ReleaseFunds = z.infer<typeof ReleaseFundsSchema>;

// Subtract Funds Schema - for subtractFunds function
export const SubtractFundsSchema = z
	.object({
		wallet_funds_id: UUID,
		amount: z.number().int().positive().describe('Amount to subtract in cents'),
		order_id: z.string().nullable().optional(),
		service_type: z.enum(['TAXI', 'DELIVERY']).nullable().optional(),
	})
	.openapi({
		title: 'SubtractFunds',
		description: 'Schema for subtracting funds from wallet',
	});

export type SubtractFunds = z.infer<typeof SubtractFundsSchema>;

// Convert Cashbacks to Credit Schema - for convertCashbacksToCredit function
export const ConvertCashbacksToCreditSchema = z
	.object({
		user_id: UUID,
		amount: z.number().int().positive().describe('Total amount from cashbacks in cents'),
		pending_cashback_ids: z.array(UUID),
		expires_at: Timestamp.optional(),
		referral_id: UUID.nullable().optional(),
	})
	.openapi({
		title: 'ConvertCashbacksToCredit',
		description: 'Schema for converting pending cashbacks to credit wallet funds',
	});

export type ConvertCashbacksToCredit = z.infer<typeof ConvertCashbacksToCreditSchema>;

// ===== QUERY SCHEMAS =====

// Get Available Wallet Funds Query - for getAvailableWalletFunds function
export const GetAvailableWalletFundsQuerySchema = z
	.object({
		user_id: UUID,
		funds_type: FundsTypeSchema,
	})
	.openapi({
		title: 'GetAvailableWalletFundsQuery',
		description: 'Query parameters for getting available wallet funds by type',
	});

export type GetAvailableWalletFundsQuery = z.infer<typeof GetAvailableWalletFundsQuerySchema>;

// Get Reserved Wallet Funds Query - for getReservedWalletFunds function
export const GetReservedWalletFundsQuerySchema = z
	.object({
		user_id: UUID,
		order_id: z.string(),
		reserve_type: z.enum(['order', 'daily_meals_subscription_payment']).default('order'),
	})
	.openapi({
		title: 'GetReservedWalletFundsQuery',
		description: 'Query parameters for getting reserved wallet funds',
	});

export type GetReservedWalletFundsQuery = z.infer<typeof GetReservedWalletFundsQuerySchema>;

// Get Available Credits Query - for getAvailableCreditsByType, getAvailableCreditsForOrder functions
export const GetAvailableCreditsQuerySchema = z
	.object({
		user_id: UUID,
		type: FundsTypeSchema,
	})
	.openapi({
		title: 'GetAvailableCreditsQuery',
		description: 'Query parameters for getting available credits by type',
	});

export type GetAvailableCreditsQuery = z.infer<typeof GetAvailableCreditsQuerySchema>;

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

	// Register request schemas
	registry.register('CreateWalletFunds', CreateWalletFundsSchema);
	registry.register('ReserveFunds', ReserveFundsSchema);
	registry.register('ReleaseFunds', ReleaseFundsSchema);
	registry.register('SubtractFunds', SubtractFundsSchema);
	registry.register('ConvertCashbacksToCredit', ConvertCashbacksToCreditSchema);

	// Register query schemas
	registry.register('GetAvailableWalletFundsQuery', GetAvailableWalletFundsQuerySchema);
	registry.register('GetReservedWalletFundsQuery', GetReservedWalletFundsQuerySchema);
	registry.register('GetAvailableCreditsQuery', GetAvailableCreditsQuerySchema);

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
