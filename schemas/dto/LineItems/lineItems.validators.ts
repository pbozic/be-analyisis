import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { PositiveInt, UUID } from '../../primitives.js';
import { LineItemDetailSchema } from './lineItems.dto.js';

extendZodWithOpenApi(z);

// ===== Request Schemas (used in routes with validate()) =====
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

export const LineItemCreateInputDataSchema = z.lazy(() =>
	z
		.object({
			menu_item_version_id: UUID,
			order_id: UUID,
			quantity: z.number().int(),
			comment: z.string().nullable().optional(),
			replacement_id: UUID.nullable().optional(),
			replaces_id: UUID.nullable().optional(),
			parent_side_id: UUID.nullable().optional(),
			parent_extra_id: UUID.nullable().optional(),
			removed: z.boolean().default(false),
			sides: z.array(LineItemCreateInputDataSchema).optional(),
			extras: z.array(LineItemCreateInputDataSchema).optional(),
		})
		.openapi('LineItemCreateInputData')
);

export type LineItemCreateInputData = z.infer<typeof LineItemCreateInputDataSchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LineItemData', LineItemDataSchema);
	registry.register('CreateManyLineItemsBody', CreateManyLineItemsBodySchema);
	registry.register('UpdateLineItemBody', UpdateLineItemBodySchema);
	registry.register('LineItemCreateInputData', LineItemCreateInputDataSchema);
}
