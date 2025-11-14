import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerWalletFundsSchemas } from './walletFunds.dto.js';
import { registerSchemas as registerWalletFundsValidatorSchemas } from './walletFunds.validators.js';

// === WalletFunds DTOs (Response) ===
export {
	FundsTypeSchema,
	CreditStatusSchema,
	WalletFundsBaseSchema,
	WalletFundsRefSchema,
	WalletFundsResponseSchema,
	WalletBalanceResponseSchema,
	WalletBalanceGroupedResponseSchema,
	CreditsExpiringResponseSchema,
	WalletFundsListResponseSchema,
	ExpireCreditsResultSchema,
	type WalletFundsBase,
	type WalletFundsRef,
	type WalletFundsResponse,
	type WalletBalanceResponse,
	type WalletBalanceGroupedResponse,
	type CreditsExpiringResponse,
	type WalletFundsListResponse,
	type ExpireCreditsResult,
} from './walletFunds.dto.js';

// === WalletFunds Validators (Request Body, Query, Params) ===
export {
	CreateWalletFundsSchema,
	ReserveFundsSchema,
	ReleaseFundsSchema,
	SubtractFundsSchema,
	ConvertCashbacksToCreditSchema,
	GetAvailableWalletFundsQuerySchema,
	GetReservedWalletFundsQuerySchema,
	GetAvailableCreditsQuerySchema,
	type CreateWalletFunds,
	type ReserveFunds,
	type ReleaseFunds,
	type SubtractFunds,
	type ConvertCashbacksToCredit,
	type GetAvailableWalletFundsQuery,
	type GetReservedWalletFundsQuery,
	type GetAvailableCreditsQuery,
} from './walletFunds.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerWalletFundsSchemas(registry);
	registerWalletFundsValidatorSchemas(registry);
}
