import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// POST /business/search/:business_id body
export const SearchBusinessQuerySchema = z
	.object({
		ANALYTICS_PARAM_PROMO_WORDS: z.string().optional(),
		ANALYTICS_PARAM_PROMO_SECTION: z.string().optional(),
		ANALYTICS_PARAM_PROMO_AD: z.string().optional(),
		module: z.string().optional(),
	})
	.strict()
	.openapi('SearchBusinessQuery');

// POST /business/search/sections/merchant body
export const ListPromoSectionsMerchantBodySchema = z
	.object({
		location: z.object({ lat: z.number(), long: z.number() }),
		radius: z.number().positive(),
		filterOperator: z.enum(['OR', 'AND']).optional().default('OR'),
		isDailyMealSearch: z.boolean().optional().default(false),
	})
	.openapi('ListPromoSectionsMerchantBody');

// POST /business/search body (full-text search)
export const SearchBusinessesBodySchema = z
	.object({
		query: z.string().optional().default(''),
		location: z.object({ lat: z.number(), long: z.number() }),
		categoryIds: z.array(UUID).optional().default([]),
		radius: z.number().positive(),
		filterOperator: z.enum(['OR', 'AND']).optional().default('OR'),
		isDailyMealSearch: z.boolean().optional().default(false),
		page: z.number().int().min(1).optional().default(1),
		pageSize: z.number().int().min(1).max(100).optional().default(10),
		type: z.string().nullable().optional(),
	})
	.openapi('SearchBusinessesBody');

// GET /business/search?search=...
export const SearchByNameQuerySchema = z.object({ search: z.string().min(1) }).openapi('SearchByNameQuery');

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('SearchBusinessQuery', SearchBusinessQuerySchema);
	registry.register('ListPromoSectionsMerchantBody', ListPromoSectionsMerchantBodySchema);
	registry.register('SearchBusinessesBody', SearchBusinessesBodySchema);
	registry.register('SearchByNameQuery', SearchByNameQuerySchema);
}
