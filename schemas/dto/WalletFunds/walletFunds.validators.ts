import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { CREDIT_STATUS, TRANSACTION_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';
import { FundsTypeSchema } from './walletFunds.dto.js';

extendZodWithOpenApi(z);

// ===== Request Schemas =====
export const CreateWalletFundsSchema = z
	.object({
		user_id: UUID,
		amount: z.number().int().positive().describe('Amount in cents'),
		charge_id: z.string().nullable().optional(),
		transaction_type: z.nativeEnum(TRANSACTION_TYPE).default(TRANSACTION_TYPE.CREDIT).optional(),
		type: FundsTypeSchema.default('FUNDS'),
		status: z.nativeEnum(CREDIT_STATUS).optional(),
		expires_at: Timestamp.nullable().optional(),
		referral_id: UUID.nullable().optional(),
	})
	.openapi('CreateWalletFunds');

export type CreateWalletFunds = z.infer<typeof CreateWalletFundsSchema>;

export const ReserveFundsSchema = z
	.object({
		wallet_funds_id: UUID,
		reserve_amount: z.number().int().positive().describe('Amount to reserve in cents'),
		order_id: z.string(),
		reserve_type: z.enum(['order', 'daily_meals_subscription_payment']).default('order'),
	})
	.openapi('ReserveFunds');

export type ReserveFunds = z.infer<typeof ReserveFundsSchema>;

export const ReleaseFundsSchema = z
	.object({
		wallet_funds_id: UUID,
		release_amount: z.number().int().positive().describe('Amount to release in cents'),
	})
	.openapi('ReleaseFunds');

export type ReleaseFunds = z.infer<typeof ReleaseFundsSchema>;

export const SubtractFundsSchema = z
	.object({
		wallet_funds_id: UUID,
		amount: z.number().int().positive().describe('Amount to subtract in cents'),
		order_id: z.string().nullable().optional(),
		service_type: z.enum(['TAXI', 'DELIVERY']).nullable().optional(),
	})
	.openapi('SubtractFunds');

export type SubtractFunds = z.infer<typeof SubtractFundsSchema>;

export const ConvertCashbacksToCreditSchema = z
	.object({
		user_id: UUID,
		amount: z.number().int().positive().describe('Total amount from cashbacks in cents'),
		pending_cashback_ids: z.array(UUID),
		expires_at: Timestamp.optional(),
		referral_id: UUID.nullable().optional(),
	})
	.openapi('ConvertCashbacksToCredit');

export type ConvertCashbacksToCredit = z.infer<typeof ConvertCashbacksToCreditSchema>;

// ===== Query Schemas =====
export const GetAvailableWalletFundsQuerySchema = z
	.object({
		user_id: UUID,
		funds_type: FundsTypeSchema,
	})
	.openapi('GetAvailableWalletFundsQuery');

export type GetAvailableWalletFundsQuery = z.infer<typeof GetAvailableWalletFundsQuerySchema>;

export const GetReservedWalletFundsQuerySchema = z
	.object({
		user_id: UUID,
		order_id: z.string(),
		reserve_type: z.enum(['order', 'daily_meals_subscription_payment']).default('order'),
	})
	.openapi('GetReservedWalletFundsQuery');

export type GetReservedWalletFundsQuery = z.infer<typeof GetReservedWalletFundsQuerySchema>;

export const GetAvailableCreditsQuerySchema = z
	.object({
		user_id: UUID,
		type: FundsTypeSchema,
	})
	.openapi('GetAvailableCreditsQuery');

export type GetAvailableCreditsQuery = z.infer<typeof GetAvailableCreditsQuerySchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateWalletFunds', CreateWalletFundsSchema);
	registry.register('ReserveFunds', ReserveFundsSchema);
	registry.register('ReleaseFunds', ReleaseFundsSchema);
	registry.register('SubtractFunds', SubtractFundsSchema);
	registry.register('ConvertCashbacksToCredit', ConvertCashbacksToCreditSchema);
	registry.register('GetAvailableWalletFundsQuery', GetAvailableWalletFundsQuerySchema);
	registry.register('GetReservedWalletFundsQuery', GetReservedWalletFundsQuerySchema);
	registry.register('GetAvailableCreditsQuery', GetAvailableCreditsQuerySchema);
}
