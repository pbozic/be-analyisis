import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerTaxSchemas } from './tax.dto.js';
import { registerSchemas as registerTaxValidatorSchemas } from './tax.validators.js';

// === Tax DTOs (Response) ===
export {
	TaxRateBaseSchema,
	TaxRateRefSchema,
	TaxRateDetailSchema,
	type TaxRateBase,
	type TaxRateRef,
	type TaxRateDetail,
} from './tax.dto.js';

// === Tax Validators (Request Body, Query, Params) ===
export { TaxRateInputSchema, type TaxRateInput } from './tax.validators.js';

// === Tax Mappers ===
export { toTaxRateRef, toTaxRateDetail } from './tax.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerTaxSchemas(registry);
	registerTaxValidatorSchemas(registry);
}
