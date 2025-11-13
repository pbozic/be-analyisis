import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Line Items Response DTOs
// =======================

export const LineItemBaseSchema = z
	.object({
		line_item_id: UUID,
		menu_item_version_id: UUID,
		order_id: UUID,
		quantity: z.number().int(),
		comment: z.string().nullable().optional(),
		replacement_id: UUID.nullable().optional(),
		replaces_id: UUID.nullable().optional(),
		parent_side_id: UUID.nullable().optional(),
		parent_extra_id: UUID.nullable().optional(),
		removed: z.boolean().default(false),
	})
	.openapi('LineItemBase');

export type LineItemBase = z.infer<typeof LineItemBaseSchema>;

export const LineItemRefSchema = z
	.object({
		line_item_id: UUID,
		label: z.string().default('line_item'),
	})
	.openapi('LineItemRef');

export type LineItemRef = z.infer<typeof LineItemRefSchema>;

// Recursive detail: reflect self-relations from Prisma (sides/extras arrays, replacement/replaces singletons)
export type LineItemDetail = z.infer<typeof LineItemBaseSchema> & {
	sides?: LineItemDetail[];
	extras?: LineItemDetail[];
	replacement?: LineItemDetail | null;
	replaces?: LineItemDetail | null;
};

export const LineItemDetailSchema: z.ZodType<LineItemDetail, z.ZodTypeDef, unknown> = z
	.lazy(() =>
		LineItemBaseSchema.extend({
			sides: z.array(LineItemDetailSchema).optional(),
			extras: z.array(LineItemDetailSchema).optional(),
			replacement: LineItemDetailSchema.nullable().optional(),
			replaces: LineItemDetailSchema.nullable().optional(),
		})
	)
	.openapi('LineItemDetail');

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LineItemBase', LineItemBaseSchema);
	registry.register('LineItemRef', LineItemRefSchema);
	registry.register('LineItemDetail', LineItemDetailSchema);
}
