import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { PositiveInt, UUID } from '../../primitives';
import { PrismaMenuItemVersion } from '../Menu';

extendZodWithOpenApi(z);

// =======================
// Line Items DTOs
// =======================

export const LineItemDataSchema = z
	.object({
		menu_item_version_id: UUID,
		quantity: PositiveInt,
		comment: z.string().nullable().optional(),
	})
	.openapi('LineItemData');
export type LineItemData = z.infer<typeof LineItemDataSchema>;

export const CreateManyLineItemsBodySchema = z
	.object({ items: z.array(LineItemDataSchema).min(1), order_id: UUID })
	.openapi('CreateManyLineItemsBody');
export type CreateManyLineItemsBody = z.infer<typeof CreateManyLineItemsBodySchema>;

export const UpdateLineItemBodySchema = z
	.object({
		quantity: PositiveInt.optional(),
		comment: z.string().nullable().optional(),
		removed: z.boolean().optional(),
	})
	.openapi('UpdateLineItemBody');
export type UpdateLineItemBody = z.infer<typeof UpdateLineItemBodySchema>;

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

export const LineItemCreateInputDataSchema = LineItemBaseSchema.omit({ line_item_id: true })
	.extend({
		sides: z.array(z.lazy(() => LineItemDetailSchema)).optional(),
		extras: z.array(z.lazy(() => LineItemDetailSchema)).optional(),
	})
	.openapi('LineItemCreateInputData');
export type LineItemCreateInputData = z.infer<typeof LineItemCreateInputDataSchema>;

// ===============
// Mappers
// ===============
type PrismaLineItem = {
	line_item_id: UUID;
	menu_item_version_id: UUID;
	order_id: UUID;
	quantity: number;
	comment?: string | null;
	replacement_id?: UUID | null;
	replaces_id?: UUID | null;
	parent_side_id?: UUID | null;
	parent_extra_id?: UUID | null;
	removed?: boolean;
	sides?: PrismaLineItem[];
	extras?: PrismaLineItem[];
	replacement?: PrismaLineItem | null;
	replaces?: PrismaLineItem | null;
	menu_item_version?: PrismaMenuItemVersion;
};

export function toLineItemRef(row: unknown): LineItemRef {
	const r = row as { line_item_id: string };
	return LineItemRefSchema.parse({ line_item_id: r.line_item_id, label: 'line_item' });
}

export function toLineItemDetail(row: unknown): LineItemDetail {
	const r = row as PrismaLineItem;
	return LineItemDetailSchema.parse({
		line_item_id: r.line_item_id,
		menu_item_version_id: r.menu_item_version_id,
		order_id: r.order_id,
		quantity: r.quantity,
		comment: r.comment ?? null,
		replacement_id: r.replacement_id ?? null,
		replaces_id: r.replaces_id ?? null,
		parent_side_id: r.parent_side_id ?? null,
		parent_extra_id: r.parent_extra_id ?? null,
		removed: r.removed ?? false,
		sides: Array.isArray(r.sides) ? r.sides.map((c) => toLineItemDetail(c)) : undefined,
		extras: Array.isArray(r.extras) ? r.extras.map((c) => toLineItemDetail(c)) : undefined,
		replacement: r.replacement ? toLineItemDetail(r.replacement) : null,
		replaces: r.replaces ? toLineItemDetail(r.replaces) : null,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LineItemData', LineItemDataSchema);
	registry.register('CreateManyLineItemsBody', CreateManyLineItemsBodySchema);
	registry.register('UpdateLineItemBody', UpdateLineItemBodySchema);
	registry.register('LineItemBase', LineItemBaseSchema);
	registry.register('LineItemRef', LineItemRefSchema);
	registry.register('LineItemDetail', LineItemDetailSchema);
}
