import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Tax Rate DTOs (DAO)
// =======================
export const TaxRateBaseSchema = z
	.object({
		tax_rates_id: UUID,
		name: z.string().min(1),
		description: z.string().nullable().optional(),
		country: z.string().nullable().optional(),
		rate: z.number(),
		active: z.boolean(),
		valid_from: Timestamp.optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
		activated_at: Timestamp.nullable().optional(),
	})
	.openapi('TaxRateBase');
export type TaxRateBase = z.infer<typeof TaxRateBaseSchema>;

export const TaxRateRefSchema = z
	.object({
		tax_rates_id: UUID,
		label: z.string().min(1),
	})
	.openapi('TaxRateRef');
export type TaxRateRef = z.infer<typeof TaxRateRefSchema>;

export const TaxRateDetailSchema = TaxRateBaseSchema.openapi('TaxRateDetail');
export type TaxRateDetail = z.infer<typeof TaxRateDetailSchema>;

// Mapper functions moved to `tax.mappers.ts` to keep DTOs and mappers separated.

// Request schemas moved to tax.validators.ts

// =======================
// OpenAPI Registration
// =======================

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TaxRateBase', TaxRateBaseSchema);
	registry.register('TaxRateRef', TaxRateRefSchema);
	registry.register('TaxRateDetail', TaxRateDetailSchema);
}
