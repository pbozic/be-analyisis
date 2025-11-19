import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, LanguageCode } from '../../primitives';
import { SERVICE_TYPE } from '../../../lib/constants';
import { BusinessRefSchema } from '../Business/business';

extendZodWithOpenApi(z);

// Shared ServiceType and translations
export const ServiceTypeSchema = z
	.enum([SERVICE_TYPE.TAXI, SERVICE_TYPE.DELIVERY, SERVICE_TYPE.RESERVATION])
	.openapi('ServiceType');

export const TranslationItemSchema = z
	.object({
		language: LanguageCode,
		translation: z.string().min(1),
	})
	.openapi('TranslationItem');
export type TranslationItem = z.infer<typeof TranslationItemSchema>;

export const TranslationsSchema = z.record(LanguageCode, z.string()).openapi('PromoTranslations');
export type Translations = z.infer<typeof TranslationsSchema>;

// Lightweight Prisma shapes
type PrismaTranslation = { language?: string; translation?: string };
type PrismaTranslationsHolder = { translations?: PrismaTranslation[] };
type PrismaPromoSection = {
	promo_sections_id: string;
	name: string;
	tag: string;
	active?: boolean;
	description?: string | null;
	prices?: unknown;
	limits?: unknown;
	stripe_product_id?: string | null;
	canPurchase?: boolean;
	t1price?: number | null;
	t2price?: number | null;
	t3price?: number | null;
	order?: number;
	service_type: string;
	promo_duration_days?: number;
	display_cards_per_page?: number | null;
	translations?: PrismaTranslation[];
	translatable?: PrismaTranslationsHolder | null;
};

// ======================
// Requests: Sections
// ======================
export const PromoSectionDataSchema = z
	.object({
		name: z.string().min(1),
		tag: z.string().min(1),
		description: z.string().nullable().optional(),
		service_type: ServiceTypeSchema,
		canPurchase: z.boolean().optional(),
		t1price: z.number().int().nullable().optional(),
		t2price: z.number().int().nullable().optional(),
		t3price: z.number().int().nullable().optional(),
		promo_duration_days: z.number().int().optional(),
		display_cards_per_page: z.number().int().nullable().optional(),
	})
	.openapi('PromoSectionData');
export type PromoSectionData = z.infer<typeof PromoSectionDataSchema>;

export const CreatePromoSectionRequestSchema = z
	.object({
		sectionData: PromoSectionDataSchema,
		translations: z.array(TranslationItemSchema).min(1),
	})
	.openapi('CreatePromoSectionRequest');
export type CreatePromoSectionRequest = z.infer<typeof CreatePromoSectionRequestSchema>;

export const UpdatePromoSectionRequestSchema =
	CreatePromoSectionRequestSchema.partial().openapi('UpdatePromoSectionRequest');
export type UpdatePromoSectionRequest = z.infer<typeof UpdatePromoSectionRequestSchema>;

export const ReorderPromoSectionsRequestSchema = z
	.object({
		promo_sections_ids: z.array(UUID).min(1),
	})
	.openapi('ReorderPromoSectionsRequest');
export type ReorderPromoSectionsRequest = z.infer<typeof ReorderPromoSectionsRequestSchema>;

// ======================
// Responses: Sections
// ======================
export const PromoSectionBaseSchema = z
	.object({
		promo_sections_id: UUID,
		name: z.string(),
		tag: z.string(),
		active: z.boolean().optional(),
		description: z.string().nullable().optional(),
		prices: z.record(z.unknown()).nullable().optional(),
		limits: z.record(z.unknown()).nullable().optional(),
		stripe_product_id: z.string().nullable().optional(),
		canPurchase: z.boolean().optional(),
		t1price: z.number().int().nullable().optional(),
		t2price: z.number().int().nullable().optional(),
		t3price: z.number().int().nullable().optional(),
		order: z.number().int().optional(),
		service_type: ServiceTypeSchema,
		promo_duration_days: z.number().int().optional(),
		display_cards_per_page: z.number().int().nullable().optional(),
	})
	.openapi('PromoSectionBase');
export type PromoSectionBase = z.infer<typeof PromoSectionBaseSchema>;

export const PromoSectionDetailSchema = PromoSectionBaseSchema.partial()
	.extend({
		businesses: z.array(BusinessRefSchema).optional(),
		translations: TranslationsSchema.optional(),
	})
	.openapi('PromoSectionDetail');
export type PromoSectionDetail = z.infer<typeof PromoSectionDetailSchema>;

// ======================
// Requests/Responses: Section Buy
// ======================
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

export const PromoBuyClientSecretResponseSchema = z
	.object({
		clientSecret: z.string().min(1),
	})
	.openapi('PromoBuyClientSecretResponse');
export type PromoBuyClientSecretResponse = z.infer<typeof PromoBuyClientSecretResponseSchema>;

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

export const CreatePromoSectionBuyResponseSchema = PromoBuyClientSecretResponseSchema.extend({
	promo_section_buy_ids: z.array(UUID).min(1),
}).openapi('CreatePromoSectionBuyResponse');
export type CreatePromoSectionBuyResponse = z.infer<typeof CreatePromoSectionBuyResponseSchema>;

export const UpdatePromoSectionBuyRequestSchema = CreatePromoSectionBuyRequestSchema.extend({
	active_at: z.string().datetime().optional(),
	expires_at: z.string().datetime().optional(),
	paid: z.boolean().optional(),
	stripe_subscription_id: z.string().optional(),
	payment_intent_id: z.string().optional(),
}).openapi('UpdatePromoSectionBuyRequest');
export type UpdatePromoSectionBuyRequest = z.infer<typeof UpdatePromoSectionBuyRequestSchema>;

export const AddStripeSubToPromoSectionBuyRequestSchema = z
	.object({
		stripe_subscription_id: z.string().min(1),
	})
	.openapi('AddStripeSubToPromoSectionBuyRequest');
export type AddStripeSubToPromoSectionBuyRequest = z.infer<typeof AddStripeSubToPromoSectionBuyRequestSchema>;

export const PromoSectionBuyBaseSchema = z
	.object({
		promo_sections_buy_id: UUID,
		promo_sections_id: UUID,
		payment_intent_id: z.string().nullable().optional(),
		business_id: UUID,
		user_id: UUID.nullable().optional(),
		paid: z.boolean().optional(),
		active_at: z.string().datetime().nullable().optional(),
		expires_at: z.string().datetime().nullable().optional(),
		tier: z.number().int(),
		duration: z.number().int(),
	})
	.openapi('PromoSectionBuyBase');
export type PromoSectionBuyBase = z.infer<typeof PromoSectionBuyBaseSchema>;

export const PromoSectionBuyDetailSchema = PromoSectionBuyBaseSchema.openapi('PromoSectionBuyDetail');
export type PromoSectionBuyDetail = z.infer<typeof PromoSectionBuyDetailSchema>;

export const PurchasableQuerySchema = z
	.object({ purchasable: z.coerce.boolean().optional() })
	.openapi('PurchasableQuery');
export type PurchasableQuery = z.infer<typeof PurchasableQuerySchema>;

// ===============
// Mappers
// ===============
export function toTranslationsMap(input: unknown): Translations {
	const map: Record<string, string> = {};
	let arr: { language?: string; translation?: string }[] = [];
	if (Array.isArray(input)) {
		arr = input as { language?: string; translation?: string }[];
	} else {
		const holder = input as { translations?: { language?: string; translation?: string }[] } | undefined;
		if (holder && Array.isArray(holder.translations)) arr = holder.translations;
	}
	for (const t of arr) {
		if (t?.language && typeof t.translation === 'string') map[t.language] = t.translation;
	}
	return TranslationsSchema.parse(map);
}

export function toPromoSectionDetail(row: unknown): PromoSectionDetail {
	const r = row as PrismaPromoSection;
	const translations = r.translations ?? r.translatable?.translations ?? [];
	return PromoSectionDetailSchema.parse({
		promo_sections_id: r.promo_sections_id,
		name: r.name,
		tag: r.tag,
		active: r.active,
		description: r.description ?? null,
		prices: r.prices ?? undefined,
		limits: r.limits ?? undefined,
		stripe_product_id: r.stripe_product_id ?? null,
		canPurchase: r.canPurchase ?? false,
		t1price: r.t1price ?? null,
		t2price: r.t2price ?? null,
		t3price: r.t3price ?? null,
		order: r.order,
		service_type: r.service_type,
		promo_duration_days: r.promo_duration_days,
		display_cards_per_page: r.display_cards_per_page ?? null,
		translations: toTranslationsMap(translations),
	});
}

export function toPromoSectionBuyDetail(row: unknown): PromoSectionBuyDetail {
	const r = row as {
		promo_sections_buy_id: string;
		promo_sections_id: string;
		payment_intent_id?: string | null;
		business_id: string;
		user_id?: string | null;
		paid?: boolean;
		active_at?: string | Date | null;
		expires_at?: string | Date | null;
		tier: number;
		duration?: number | null;
	};
	return PromoSectionBuyDetailSchema.parse({
		promo_sections_buy_id: r.promo_sections_buy_id,
		promo_sections_id: r.promo_sections_id,
		payment_intent_id: r.payment_intent_id ?? null,
		business_id: r.business_id,
		user_id: r.user_id ?? null,
		paid: r.paid ?? false,
		active_at: r.active_at ? new Date(r.active_at).toISOString() : null,
		expires_at: r.expires_at ? new Date(r.expires_at).toISOString() : null,
		tier: r.tier,
		duration: r.duration ?? 30,
	});
}

// ======================
// Registry
// ======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ServiceType', ServiceTypeSchema);
	registry.register('TranslationItem', TranslationItemSchema);
	registry.register('PromoTranslations', TranslationsSchema);
	registry.register('PromoSectionData', PromoSectionDataSchema);
	registry.register('CreatePromoSectionRequest', CreatePromoSectionRequestSchema);
	registry.register('UpdatePromoSectionRequest', UpdatePromoSectionRequestSchema);
	registry.register('ReorderPromoSectionsRequest', ReorderPromoSectionsRequestSchema);
	registry.register('PromoSectionBase', PromoSectionBaseSchema);
	registry.register('PromoSectionDetail', PromoSectionDetailSchema);
	registry.register('PromoSectionPaymentIntentItem', PromoSectionPaymentIntentItemSchema);
	registry.register('CreatePaymentIntentForPromoBuyRequest', CreatePaymentIntentForPromoBuyRequestSchema);
	registry.register('PromoBuyClientSecretResponse', PromoBuyClientSecretResponseSchema);
	registry.register('PromoSectionBuyItem', PromoSectionBuyItemSchema);
	registry.register('CreatePromoSectionBuyRequest', CreatePromoSectionBuyRequestSchema);
	registry.register('CreatePromoSectionBuyResponse', CreatePromoSectionBuyResponseSchema);
	registry.register('UpdatePromoSectionBuyRequest', UpdatePromoSectionBuyRequestSchema);
	registry.register('AddStripeSubToPromoSectionBuyRequest', AddStripeSubToPromoSectionBuyRequestSchema);
	registry.register('PromoSectionBuyBase', PromoSectionBuyBaseSchema);
	registry.register('PromoSectionBuyDetail', PromoSectionBuyDetailSchema);

	registry.register('PurchasableQuery', PurchasableQuerySchema);
}
