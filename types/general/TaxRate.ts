import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { MenuItem } from '../menuItems/MenuItem.js';
import type { Service } from '../reservations/Service.js';
import { MenuItemResponseSchema } from '../menuItems/MenuItem';
import { ServiceResponseSchema } from '../reservations/Service';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type TaxRate = {
	tax_rates_id: string;
	name: string;
	description?: string | null;
	country?: string | null;
	rate: number;
	active: boolean;
	valid_from: Date;
	created_at: Date;
	updated_at: Date;
	activated_at?: Date | null;
	menu_items: MenuItem[];
	service: Service[];
};

export const CreateTaxRateSchema = z
	.object({
		tax_rates_id: z.string().uuid(),
		name: z.string(),
		description: z.string().nullable().optional(),
		country: z.string().nullable().optional(),
		rate: z.number(),
		active: z.boolean(),
		valid_from: z.unknown(),
		activated_at: z.unknown().nullable().optional(),
	})
	.openapi('CreateTaxRate');

export type CreateTaxRateInput = z.infer<typeof CreateTaxRateSchema>;

export const UpdateTaxRateSchema = CreateTaxRateSchema.partial().openapi('UpdateTaxRate');
export type UpdateTaxRateInput = z.infer<typeof UpdateTaxRateSchema>;

export const TaxRateResponseSchema = z
	.object({
		tax_rates_id: z.string(),
		name: z.string(),
		description: z.string().nullable().optional(),
		country: z.string().nullable().optional(),
		rate: z.number(),
		active: z.boolean(),
		valid_from: z.string().datetime(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		activated_at: z.string().datetime().nullable().optional(),
		menu_items: z.array(MenuItemResponseSchema),
		service: z.array(ServiceResponseSchema),
	})
	.openapi('TaxRateResponse');

export type TaxRateResponse = z.infer<typeof TaxRateResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTaxRate', CreateTaxRateSchema);
	registry.register('UpdateTaxRate', UpdateTaxRateSchema);
	registry.register('TaxRateResponse', TaxRateResponseSchema);
}
