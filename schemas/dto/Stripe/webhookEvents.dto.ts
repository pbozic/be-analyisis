import { z } from 'zod';

import { UUID } from '../../primitives';

// =======================
// Zod Schemas for Metadata
// =======================

// Wallet Top-Up Metadata Schema
export const WalletTopupMetadataSchema = z.object({
	type: z.literal('wallet_topup'),
	user_id: UUID,
});

// Order Payment Metadata Schema
export const OrderPaymentMetadataSchema = z.object({
	type: z.literal('order_payment'),
	user_id: UUID,
	order_id: UUID,
	order_type: z.enum(['DELIVERY', 'TRANSFER_PRIVATE']),
	merchant_cut: z.string().optional(),
});

// Daily Meals Subscription Metadata Schema
export const DailyMealsSubscriptionMetadataSchema = z.object({
	type: z.literal('daily_meals_subscription_payment'),
	user_id: UUID,
	subscription_id: z.string(),
});

// Promo Section Metadata Schema
export const PromoSectionMetadataSchema = z.object({
	type: z.literal('promo_section'),
	user_id: UUID,
	promo_sections_buy_id: z.string(),
	duration: z.string(),
});

// Promo Section Bulk Metadata Schema
export const PromoSectionBulkMetadataSchema = z.object({
	type: z.literal('promo_section_bulk'),
	user_id: UUID,
	promo_section_buy_ids: z.string(), // JSON stringified array of IDs
	business_id: UUID,
});

// Union Schema for Metadata
export const StripeMetadataSchema = z.discriminatedUnion('type', [
	WalletTopupMetadataSchema,
	OrderPaymentMetadataSchema,
	DailyMealsSubscriptionMetadataSchema,
	PromoSectionMetadataSchema,
	PromoSectionBulkMetadataSchema,
]);

// =======================
// TypeScript Inference for Metadata
// =======================

export type WalletTopupMetadata = z.infer<typeof WalletTopupMetadataSchema>;
export type OrderPaymentMetadata = z.infer<typeof OrderPaymentMetadataSchema>;
export type DailyMealsSubscriptionMetadata = z.infer<typeof DailyMealsSubscriptionMetadataSchema>;
export type PromoSectionMetadata = z.infer<typeof PromoSectionMetadataSchema>;
export type PromoSectionBulkMetadata = z.infer<typeof PromoSectionBulkMetadataSchema>;

// Union Type for All Metadata
export type StripeMetadata = z.infer<typeof StripeMetadataSchema>;

// =======================
// OpenAPI Registration
// =======================

import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('WalletTopupMetadata', WalletTopupMetadataSchema);
	registry.register('OrderPaymentMetadata', OrderPaymentMetadataSchema);
	registry.register('DailyMealsSubscriptionMetadata', DailyMealsSubscriptionMetadataSchema);
	registry.register('PromoSectionMetadata', PromoSectionMetadataSchema);
	registry.register('PromoSectionBulkMetadata', PromoSectionBulkMetadataSchema);
	registry.register('StripeMetadata', StripeMetadataSchema);
}
