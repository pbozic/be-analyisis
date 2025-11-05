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

// Mappers
export function toTaxRateRef(row: unknown): TaxRateRef {
	const r = row as { tax_rates_id: string; name: string };
	return TaxRateRefSchema.parse({ tax_rates_id: r.tax_rates_id, label: r.name });
}

type PrismaTaxRate = {
	tax_rates_id: string;
	name: string;
	description?: string | null;
	country?: string | null;
	rate: number;
	active: boolean;
	valid_from?: string | Date | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	activated_at?: string | Date | null;
};

export function toTaxRateDetail(row: unknown): TaxRateDetail {
	const r = row as PrismaTaxRate;
	return TaxRateDetailSchema.parse({
		tax_rates_id: r.tax_rates_id,
		name: r.name,
		description: r.description ?? null,
		country: r.country ?? null,
		rate: r.rate,
		active: !!r.active,
		valid_from: r.valid_from ? new Date(r.valid_from as string | Date).toISOString() : undefined,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		activated_at: r.activated_at ? new Date(r.activated_at as string | Date).toISOString() : null,
	});
}

export const TaxRateInputSchema = z
	.object({
		name: z.string().min(1),
		description: z.string().nullable().optional(),
		country: z.string().nullable().optional(),
		rate: z.number(),
		active: z.boolean(),
		valid_from: Timestamp,
	})
	.openapi('TaxRateInput');
export type TaxRateInput = z.infer<typeof TaxRateInputSchema>;

// =======================
// OpenAPI Registration
// =======================

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TaxRateBase', TaxRateBaseSchema);
	registry.register('TaxRateRef', TaxRateRefSchema);
	registry.register('TaxRateDetail', TaxRateDetailSchema);
	registry.register('TaxRateInput', TaxRateInputSchema);
}
