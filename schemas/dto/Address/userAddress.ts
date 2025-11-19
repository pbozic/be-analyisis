import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { ADDRESS_TYPE } from '@prisma/client';

import { UUID } from '../../primitives.ts';
import { AddressRefSchema } from './address.ts';
extendZodWithOpenApi(z);

// === UserAddress Base Schema (scalars only, no relations) ===
export const UserAddressBaseSchema = z
	.object({
		user_id: UUID,
		address_id: UUID,
		primary: z.boolean().openapi({ example: false }),
		details: z
			.object({
				floor: z.number().optional(),
				apartment: z.string().optional(),
				entrance: z.string().optional(),
				buzzer: z.string().optional(),
				courier_instructions: z.string().optional(),
			})
			.passthrough()
			.nullable()
			.openapi({
				description: 'Additional details like floor, apartment number, entrance, etc.',
				example: { floor: 2, apartment: '5A', entrance: 'main' },
			}),
		type: z.nativeEnum(ADDRESS_TYPE).openapi({ example: 'HOME' }),
	})
	.openapi({
		title: 'UserAddressBase',
		description: 'Base user-address relationship schema with all scalar fields',
	});

export type UserAddressBase = z.infer<typeof UserAddressBaseSchema>;

// === UserAddress Ref Schema (minimal identity for embedding elsewhere) ===
export const UserAddressRefSchema = z
	.object({
		user_id: UUID,
		address_id: UUID,
		primary: z.boolean(),
		type: z.nativeEnum(ADDRESS_TYPE),
	})
	.openapi({
		title: 'UserAddressRef',
		description: 'Minimal user-address reference for embedding in other responses',
	});

export type UserAddressRef = z.infer<typeof UserAddressRefSchema>;

// === UserAddress Response Schema (extends Base, embeds only Ref variants) ===
export const UserAddressResponseSchema = UserAddressBaseSchema.extend({
	address: AddressRefSchema,
}).openapi({
	title: 'UserAddressResponse',
	description: 'Complete user-address response with embedded address reference',
});

export type UserAddressResponse = z.infer<typeof UserAddressResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register user address schemas
	registry.register('UserAddressBase', UserAddressBaseSchema);
	registry.register('UserAddressRef', UserAddressRefSchema);
	registry.register('UserAddressResponse', UserAddressResponseSchema);
}
