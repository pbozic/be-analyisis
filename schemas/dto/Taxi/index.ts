import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerTaxiOrderSchemas } from './taxiorder.dto.js';
import { registerSchemas as registerTaxiOrderValidatorSchemas } from './taxiOrder.validators.js';

// === Taxi DTOs (Response) ===
export {
	FileUploadSchema,
	DriverRefSchema,
	TaxiOrderBaseSchema,
	TaxiOrderRefSchema,
	TaxiOrderDetailSchema,
	type DriverRef,
	type TaxiOrderBase,
	type TaxiOrderRef,
	type TaxiOrderDetail,
} from './taxiorder.dto.js';

// === Taxi Validators (Request Body, Query, Params) ===
export {
	IdOnlySchema,
	IdAndStatusSchema,
	IdAndDriverSchema,
	TaxiPreferencesSchema,
	TaxiPaymentSchema,
	CreateTaxiOrderSchema,
	CreateDispatchOrderSchema,
	UpdateTaxiOrderPreferencesSchema,
	UpdateRouteSchema,
	UpdatePickupLocationSchema,
	UpdateDeliveryLocationSchema,
	UpdateCompleteRouteSchema,
	UpdateTimelineSchema,
	UpdatePaymentSchema,
	TaxiFileBodySchema,
	TaxiPaginationSchema,
	TransferPriceRequestSchema,
	type CreateTaxiOrder,
	type CreateDispatchOrder,
	type UpdateTaxiOrderPreferences,
	type UpdateTaxiOrderRoute,
} from './taxiOrder.validators.js';

// === Taxi Mappers ===
export { toTaxiOrderRef, toTaxiOrderDetail } from './taxiOrder.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerTaxiOrderSchemas(registry);
	registerTaxiOrderValidatorSchemas(registry);
}
