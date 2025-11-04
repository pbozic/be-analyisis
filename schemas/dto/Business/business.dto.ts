import { z } from 'zod';
import { OpenAPIRegistry, extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// TODO: Fix dto after deleting menu from prisma model etc...

// Schema used for create/update requests (omit created_at, updated_at)
export const BusinessCreateDto = z
	.object({
		address_id: z.string().uuid().nullable().optional().openapi({ example: null }),
		is_business_unit: z.boolean().optional().default(false).openapi({ example: false }),
		business_group_name: z.string().nullable().optional().openapi({ example: 'Acme Holdings' }),
		name: z.string().min(1).openapi({ example: 'Klikni d.o.o.' }),
		description: z.string().nullable().optional().openapi({ example: 'Local delivery and taxi services' }),
		tax_id: z.string().openapi({ example: 'HR12345678901' }),
		registration_id: z.string().openapi({ example: '567890' }),
		email: z.string().email().openapi({ example: 'info@klikni-web.eu' }),
		telephone: z.string().openapi({ example: '+38520123456' }),
		telephone_code: z.string().openapi({ example: '+385' }),
		website_url: z.string().url().nullable().optional().openapi({ example: 'https://klikni-web.eu' }),
		working_hours: z
			.any()
			.nullable()
			.optional()
			.openapi({
				example: {
					monday: { open: '08:00', close: '20:00' },
					tuesday: { open: '08:00', close: '20:00' },
				},
			}),
		popular: z.boolean().optional().default(true).openapi({ example: true }),
		new: z.boolean().optional().default(false).openapi({ example: false }),
		parent_business_id: z.string().uuid().nullable().optional().openapi({ example: null }),
		stripe_account_id: z.string().nullable().optional().openapi({ example: null }),
		stripe_customer_id: z.string().nullable().optional().openapi({ example: null }),
		word_buy_stripe_subscription_id: z.string().nullable().optional().openapi({ example: null }),
		first_activated_at: z.string().datetime().nullable().optional().openapi({ example: null }),
		active: z.boolean().optional().default(false).openapi({ example: false }),
		sales_representative_id: z.string().uuid().nullable().optional().openapi({ example: null }),
	})
	.openapi({
		example: {
			address_id: null,
			is_business_unit: false,
			business_group_name: 'Acme Holdings',
			name: 'Klikni d.o.o.',
			description: 'Local delivery and taxi services',
			tax_id: 'HR12345678901',
			registration_id: '567890',
			email: 'info@klikni-web.eu',
			telephone: '+38520123456',
			telephone_code: '+385',
			website_url: 'https://klikni-web.eu',
			working_hours: {
				monday: { open: '08:00', close: '20:00' },
				tuesday: { open: '08:00', close: '20:00' },
			},
			popular: true,
			new: false,
			parent_business_id: null,
			stripe_account_id: null,
			stripe_customer_id: null,
			word_buy_stripe_subscription_id: null,
			first_activated_at: null,
			active: false,
			sales_representative_id: null,
		},
	});

// Full response schema including DB-managed fields
export const BusinessResponseDto = BusinessCreateDto.extend({
	business_id: z.string().uuid().openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
	created_at: z.string().datetime().openapi({ example: '2025-01-01T12:00:00.000Z' }),
	updated_at: z.string().datetime().openapi({ example: '2025-01-10T12:00:00.000Z' }),
}).openapi({
	example: {
		business_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
		address_id: null,
		is_business_unit: false,
		business_group_name: 'Acme Holdings',
		name: 'Klikni d.o.o.',
		description: 'Local delivery and taxi services',
		tax_id: 'HR12345678901',
		registration_id: '567890',
		email: 'info@klikni-web.eu',
		telephone: '+38520123456',
		telephone_code: '+385',
		website_url: 'https://klikni-web.eu',
		working_hours: {
			monday: { open: '08:00', close: '20:00' },
			tuesday: { open: '08:00', close: '20:00' },
		},
		popular: true,
		new: false,
		parent_business_id: null,
		stripe_account_id: null,
		stripe_customer_id: null,
		word_buy_stripe_subscription_id: null,
		first_activated_at: null,
		active: false,
		sales_representative_id: null,
		created_at: '2025-01-01T12:00:00.000Z',
		updated_at: '2025-01-10T12:00:00.000Z',
	},
});

// exported TS types
export type BusinessCreateDto = z.infer<typeof BusinessCreateDto>;
export type BusinessResponseDto = z.infer<typeof BusinessResponseDto>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register request schemas
	registry.register('BusinessCreate', BusinessCreateDto);
	registry.register('BusinessResponse', BusinessResponseDto);
}
