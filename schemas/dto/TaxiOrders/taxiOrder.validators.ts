import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { TAXI_ORDER_STATUS } from '@prisma/client';

import { TaxiOrderBaseSchema } from './taxiOrder.dto.js';
import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===============
// Request Schemas (used in routes with validate())
// ===============
export const CreateTaxiOrderSchema = TaxiOrderBaseSchema.omit({
	order_id: true,
	created_at: true,
	updated_at: true,
}).openapi('CreateTaxiOrder');

export type CreateTaxiOrder = z.infer<typeof CreateTaxiOrderSchema>;

export const UpdateTaxiOrderSchema = TaxiOrderBaseSchema.partial()
	.omit({
		created_at: true,
	})
	.extend({
		order_id: UUID,
	})
	.openapi('UpdateTaxiOrder');

export type UpdateTaxiOrder = z.infer<typeof UpdateTaxiOrderSchema>;

export const UpdateTaxiOrderStatusSchema = UpdateTaxiOrderSchema.pick({ order_id: true, status: true })
	.extend({
		status: z.nativeEnum(TAXI_ORDER_STATUS),
	})
	.openapi('UpdateTaxiOrderStatus');

export type UpdateTaxiOrderStatus = z.infer<typeof UpdateTaxiOrderStatusSchema>;

// Additional request schemas used in routes
export const CreateDispatchOrderSchema = CreateTaxiOrderSchema.openapi('CreateDispatchOrder');
export type CreateDispatchOrder = z.infer<typeof CreateDispatchOrderSchema>;

export const TaxiPaginationSchema = z
	.object({
		where: z.any().optional(),
		orderBy: z.any().optional(),
		page: z.number().int().positive().default(1),
		take: z.number().int().positive().default(10),
	})
	.openapi('TaxiPagination');

export type TaxiPagination = z.infer<typeof TaxiPaginationSchema>;

export const TransferPriceRequestSchema = z
	.object({
		pickup_location: z.record(z.any()),
		delivery_location: z.record(z.any()),
	})
	.openapi('TransferPriceRequest');

export type TransferPriceRequest = z.infer<typeof TransferPriceRequestSchema>;

// ===============
// OpenAPI Registration
// ===============
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTaxiOrder', CreateTaxiOrderSchema);
	registry.register('UpdateTaxiOrder', UpdateTaxiOrderSchema);
	registry.register('UpdateTaxiOrderStatus', UpdateTaxiOrderStatusSchema);
	registry.register('CreateDispatchOrder', CreateDispatchOrderSchema);
	registry.register('TaxiPagination', TaxiPaginationSchema);
	registry.register('TransferPriceRequest', TransferPriceRequestSchema);
}
