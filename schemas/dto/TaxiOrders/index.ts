import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === TaxiOrder DTOs (Response) ===
export {
	TaxiOrderBaseSchema,
	TaxiOrderRefSchema,
	TaxiOrderDetailSchema,
	type TaxiOrderBase,
	type TaxiOrderRef,
	type TaxiOrderDetail,
	registerSchemas as registerTaxiOrderSchemas,
} from './taxiOrder.dto.js';

// === TaxiOrder Validators (Request Body, Query, Params) ===
export {
	CreateTaxiOrderSchema,
	UpdateTaxiOrderSchema,
	CreateDispatchOrderSchema,
	TaxiPaginationSchema,
	TransferPriceRequestSchema,
	type CreateTaxiOrder,
	type UpdateTaxiOrder,
	type CreateDispatchOrder,
	type TaxiPagination,
	type TransferPriceRequest,
	registerSchemas as registerTaxiOrderValidatorSchemas,
} from './taxiOrder.validators.js';

// === TaxiOrder Mappers ===
export { toTaxiOrderDetail, toTaxiOrderRef } from './taxiOrder.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerTaxiOrderSchemas(registry);
	registerTaxiOrderValidatorSchemas(registry);
}
