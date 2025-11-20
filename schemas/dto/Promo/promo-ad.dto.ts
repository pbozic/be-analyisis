import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives';
import { ServiceTypeSchema } from './promo-section.dto';
import { PromoBannerRefSchema, toPromoBannerRef } from './promo-banner.dto';

extendZodWithOpenApi(z);

// Requests: Ads
export const PromoAdDataSchema = z
	.object({
		title: z.string().min(1),
		text: z.string().min(1),
		service_type: ServiceTypeSchema,
		discount: z.number().nonnegative().nullable().optional(),
		tag: z.string().min(1).optional(),
	})
	.openapi('PromoAdData');
export type PromoAdData = z.infer<typeof PromoAdDataSchema>;

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

// Responses: Ads
export const CategoryRefSchema = z
	.object({
		categories_id: UUID,
		label: z.string().min(1),
	})
	.openapi('PromoCategoryRef');
export type CategoryRef = z.infer<typeof CategoryRefSchema>;

export const PromoAdBaseSchema = z
	.object({
		promo_ads_id: UUID,
		title: z.string(),
		text: z.string(),
		tag: z.string().optional(),
		service_type: ServiceTypeSchema,
		discount: z.number().nullable().optional(),
		code: z.number().int().nullable().optional(),
		active: z.boolean().optional(),
		created_at: Timestamp.optional(),
		active_at: Timestamp.nullable().optional(),
		active_until: Timestamp.nullable().optional(),
	})
	.openapi('PromoAdBase');
export type PromoAdBase = z.infer<typeof PromoAdBaseSchema>;

export const PromoAdDetailSchema = PromoAdBaseSchema.extend({
	categories: z.array(CategoryRefSchema).optional().default([]),
	banners: z.array(PromoBannerRefSchema).optional().default([]),
}).openapi('PromoAdDetail');
export type PromoAdDetail = z.infer<typeof PromoAdDetailSchema>;

// Mappers
type PrismaCategory = {
	categories_id?: string;
	category_id?: string;
	id?: string;
	name?: string | null;
	title?: string | null;
};
type PrismaPromoAd = {
	promo_ads_id: string;
	title: string;
	text: string;
	tag?: string | null;
	service_type: string;
	discount?: number | null;
	code?: number | null;
	active?: boolean;
	created_at?: string | Date | null;
	active_at?: string | Date | null;
	active_until?: string | Date | null;
	categories?: Array<{ category?: PrismaCategory } | PrismaCategory>;
	promo_ads_category?: Array<{ category?: PrismaCategory }>;
	banner?: unknown[];
	banners?: unknown[];
};

export function toPromoAdDetail(row: unknown): PromoAdDetail {
	const r = row as PrismaPromoAd;
	let categoryRecords: PrismaCategory[] = [];
	if (Array.isArray(r.categories)) {
		categoryRecords = (r.categories as Array<PrismaCategory | { category?: PrismaCategory }>)
			.map((c) => ('category' in c ? (c as { category?: PrismaCategory }).category : (c as PrismaCategory)))
			.filter((c): c is PrismaCategory => Boolean(c));
	} else if (Array.isArray(r.promo_ads_category)) {
		categoryRecords = (r.promo_ads_category as Array<{ category?: PrismaCategory }>)
			.map((c) => c.category)
			.filter((c): c is PrismaCategory => Boolean(c));
	}
	const categoryRefs = categoryRecords.map((c) =>
		CategoryRefSchema.parse({
			categories_id: c.categories_id ?? c.category_id ?? c.id!,
			label: c.name ?? c.title ?? 'category',
		})
	);
	const bannersArr = Array.isArray(r.banner) ? r.banner : Array.isArray(r.banners) ? r.banners : [];
	const banners = (bannersArr as unknown[]).map(toPromoBannerRef);
	return PromoAdDetailSchema.parse({
		promo_ads_id: r.promo_ads_id,
		title: r.title,
		text: r.text,
		tag: r.tag ?? undefined,
		service_type: r.service_type,
		discount: r.discount ?? null,
		code: r.code ?? null,
		active: r.active ?? true,
		created_at: r.created_at ? new Date(r.created_at).toISOString() : undefined,
		active_at: r.active_at ? new Date(r.active_at).toISOString() : null,
		active_until: r.active_until ? new Date(r.active_until).toISOString() : null,
		categories: categoryRefs,
		banners,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PromoAdData', PromoAdDataSchema);
	registry.register('CreatePromoAdRequest', CreatePromoAdRequestSchema);
	registry.register('UpdatePromoAdRequest', UpdatePromoAdRequestSchema);
	registry.register('PromoCategoryRef', CategoryRefSchema);
	registry.register('PromoAdBase', PromoAdBaseSchema);
	registry.register('PromoAdDetail', PromoAdDetailSchema);
}
