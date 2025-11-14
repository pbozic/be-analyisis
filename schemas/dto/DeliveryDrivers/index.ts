import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === DeliveryDriver DTOs (Response) ===
export {
	DeliveryDriverBaseSchema,
	DeliveryDriverRefSchema,
	DeliveryDriverDetailSchema,
	type DeliveryDriverBase,
	type DeliveryDriverRef,
	type DeliveryDriverDetail,
	registerSchemas as registerDeliveryDriverSchemas,
} from './deliveryDriver.dto.js';

// === DeliveryDriver Validators (Request Body, Query, Params) ===
export { registerSchemas as registerDeliveryDriverValidatorSchemas } from './deliveryDriver.validators.js';

// === DeliveryDriver Mappers ===
export { toDeliveryDriverDetail, toDeliveryDriverRef } from './deliveryDriver.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerDeliveryDriverSchemas(registry);
	registerDeliveryDriverValidatorSchemas(registry);
}
