import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { FILE_TYPE } from '@prisma/client';

import { UUID, LanguageCode } from '../../schemas/primitives';
import { SERVICE_TYPE } from '../../lib/constants';

extendZodWithOpenApi(z);

// Common enums (mirror lib/constants.js without importing it)
export const ServiceTypeSchema = z
	.enum([SERVICE_TYPE.TAXI, SERVICE_TYPE.DELIVERY, SERVICE_TYPE.RESERVATION])
	.openapi('ServiceType');

// Translations (reused pattern)
export const TranslationItemSchema = z
	.object({
		language: LanguageCode,
		translation: z.string().min(1),
	})
	.openapi('TranslationItem');

// ======================
// Promo Sections
// ======================
export const PromoSectionDataSchema = z
	.object({
		name: z.string().min(1),
		tag: z.string().min(1),
		description: z.string().nullable().optional(),
		service_type: ServiceTypeSchema,
		canPurchase: z.boolean().default(false),
		// Tier prices (per month) in currency units
		t1price: z.number().nonnegative().nullable().optional(),
		t2price: z.number().nonnegative().nullable().optional(),
		t3price: z.number().nonnegative().nullable().optional(),
	})
	.openapi('PromoSectionData');

export const CreatePromoSectionRequestSchema = z
	.object({
		sectionData: PromoSectionDataSchema,
		translations: z.array(TranslationItemSchema).min(1),
	})
	.openapi('CreatePromoSectionRequest');
export type CreatePromoSectionRequest = z.infer<typeof CreatePromoSectionRequestSchema>;

export const UpdatePromoSectionRequestSchema = z
	.object({
		sectionData: PromoSectionDataSchema.partial(),
		translations: z.array(TranslationItemSchema).min(1).optional(),
	})
	.openapi('UpdatePromoSectionRequest');
export type UpdatePromoSectionRequest = z.infer<typeof UpdatePromoSectionRequestSchema>;

export const ReorderPromoSectionsRequestSchema = z
	.object({
		promo_sections_ids: z.array(UUID).min(1),
	})
	.openapi('ReorderPromoSectionsRequest');
export type ReorderPromoSectionsRequest = z.infer<typeof ReorderPromoSectionsRequestSchema>;

// ======================
// Promo Ads
// ======================
export const PromoAdDataSchema = z
	.object({
		title: z.string().min(1),
		text: z.string().min(1),
		service_type: ServiceTypeSchema,
		discount: z.number().nonnegative().nullable().optional(),
	})
	.openapi('PromoAdData');

export const CreatePromoAdRequestSchema = z
	.object({
		promoAdData: PromoAdDataSchema,
		categories_ids: z.array(UUID).default([]).nullable().optional(),
		promo_banners_ids: z.array(UUID).default([]).nullable().optional(),
	})
	.openapi('CreatePromoAdRequest');
export type CreatePromoAdRequest = z.infer<typeof CreatePromoAdRequestSchema>;

export const UpdatePromoAdRequestSchema = z
	.object({
		promoAdData: PromoAdDataSchema.partial(),
		categories_ids: z.array(UUID).default([]).nullable().optional(),
		promo_banners_ids: z.array(UUID).default([]).nullable().optional(),
	})
	.openapi('UpdatePromoAdRequest');
export type UpdatePromoAdRequest = z.infer<typeof UpdatePromoAdRequestSchema>;

// ======================
// Promo Banners
// ======================
export const ImageFileDataSchema = z
	.object({
		file_type: z.nativeEnum(FILE_TYPE).openapi({ example: 'IMAGE' }),
		mime_type: z.string(),
		base64: z.string().min(1),
	})
	.openapi('ImageFileData');

export const PromoBannerDataSchema = z
	.object({
		title: z.string().min(1),
		text: z.string().nullable().optional(),
		type: z.string().min(1).openapi({ example: 'IMAGE' }), // banner type (domain-specific)
		size: z.string().min(1).openapi({ example: 'WIDE' }),
		promo_ads_id: UUID.nullable().optional(),
	})
	.openapi('PromoBannerData');

export const CreatePromoBannerRequestSchema = z
	.object({
		promoBannerData: PromoBannerDataSchema,
		imageFileData: ImageFileDataSchema.optional(),
	})
	.openapi('CreatePromoBannerRequest');
export type CreatePromoBannerRequest = z.infer<typeof CreatePromoBannerRequestSchema>;

export const UpdatePromoBannerRequestSchema = z
	.object({
		promoBannerData: PromoBannerDataSchema.partial().optional(),
		imageFileData: ImageFileDataSchema.optional(),
	})
	.openapi('UpdatePromoBannerRequest');
export type UpdatePromoBannerRequest = z.infer<typeof UpdatePromoBannerRequestSchema>;

// ======================
// Promo Section Buys
// ======================
// For POST /promo/section_buy/request (payment intent pre-check)
export const PromoSectionPaymentIntentItemSchema = z
	.object({
		promo_sections_id: UUID,
		duration: z.number().int().min(1).openapi({ example: 7 }),
		activeTier: z.number().int().min(1).max(3).openapi({ example: 1 }),
		activePrice: z.number().nonnegative().openapi({ description: 'Price per day in currency units' }),
	})
	.openapi('PromoSectionPaymentIntentItem');

export const CreatePaymentIntentForPromoBuyRequestSchema = z
	.object({
		promoSections: z.array(PromoSectionPaymentIntentItemSchema).min(1),
	})
	.openapi('CreatePaymentIntentForPromoBuyRequest');
export type CreatePaymentIntentForPromoBuyRequest = z.infer<typeof CreatePaymentIntentForPromoBuyRequestSchema>;

// For POST /promo/section_buy
export const PromoSectionBuyItemSchema = z
	.object({
		promo_sections_id: UUID,
		tier: z.number().int().min(1).max(3).openapi({ example: 1 }),
		duration: z.number().int().min(1).openapi({ example: 7 }),
		activePrice: z.number().nonnegative().openapi({ description: 'Price per day in currency units' }),
	})
	.openapi('PromoSectionBuyItem');

export const CreatePromoSectionBuyRequestSchema = z
	.object({
		promoSections: z.array(PromoSectionBuyItemSchema).min(1),
	})
	.openapi('CreatePromoSectionBuyRequest');
export type CreatePromoSectionBuyRequest = z.infer<typeof CreatePromoSectionBuyRequestSchema>;

// PUT /promo/section_buy/:id
export const UpdatePromoSectionBuyRequestSchema = z
	.object({
		tier: z.number().int().min(1).max(3).optional(),
		duration: z.number().int().min(1).optional(),
		active_at: z.string().datetime().optional(),
		expires_at: z.string().datetime().optional(),
		paid: z.boolean().optional(),
		stripe_subscription_id: z.string().optional(),
		payment_intent_id: z.string().optional(),
	})
	.openapi('UpdatePromoSectionBuyRequest');
export type UpdatePromoSectionBuyRequest = z.infer<typeof UpdatePromoSectionBuyRequestSchema>;

// PUT /promo/section_buy/stripeSub/:id
export const AddStripeSubToPromoSectionBuyRequestSchema = z
	.object({
		stripe_subscription_id: z.string().min(1),
	})
	.openapi('AddStripeSubToPromoSectionBuyRequest');
export type AddStripeSubToPromoSectionBuyRequest = z.infer<typeof AddStripeSubToPromoSectionBuyRequestSchema>;

// ======================
// Registry
// ======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ServiceType', ServiceTypeSchema);
	registry.register('TranslationItem', TranslationItemSchema);
	registry.register('PromoSectionData', PromoSectionDataSchema);
	registry.register('CreatePromoSectionRequest', CreatePromoSectionRequestSchema);
	registry.register('UpdatePromoSectionRequest', UpdatePromoSectionRequestSchema);
	registry.register('ReorderPromoSectionsRequest', ReorderPromoSectionsRequestSchema);
	registry.register('PromoAdData', PromoAdDataSchema);
	registry.register('CreatePromoAdRequest', CreatePromoAdRequestSchema);
	registry.register('UpdatePromoAdRequest', UpdatePromoAdRequestSchema);
	registry.register('ImageFileData', ImageFileDataSchema);
	registry.register('PromoBannerData', PromoBannerDataSchema);
	registry.register('CreatePromoBannerRequest', CreatePromoBannerRequestSchema);
	registry.register('UpdatePromoBannerRequest', UpdatePromoBannerRequestSchema);
	registry.register('PromoSectionPaymentIntentItem', PromoSectionPaymentIntentItemSchema);
	registry.register('CreatePaymentIntentForPromoBuyRequest', CreatePaymentIntentForPromoBuyRequestSchema);
	registry.register('PromoSectionBuyItem', PromoSectionBuyItemSchema);
	registry.register('CreatePromoSectionBuyRequest', CreatePromoSectionBuyRequestSchema);
	registry.register('UpdatePromoSectionBuyRequest', UpdatePromoSectionBuyRequestSchema);
	registry.register('AddStripeSubToPromoSectionBuyRequest', AddStripeSubToPromoSectionBuyRequestSchema);
}
