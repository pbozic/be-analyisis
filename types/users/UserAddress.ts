import { ADDRESS_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import type { Address } from '../addresses/Address.js';
import { AddressResponseBaseSchema } from '../addresses/Address';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateUserAddressSchema = z
	.object({
		user_id: z.string().uuid(),
		address_id: z.string().uuid(),
		primary: z.boolean(),
		details: z.unknown().nullable().optional(),
		type: z.nativeEnum(ADDRESS_TYPE),
	})
	.openapi('CreateUserAddress');

export type CreateUserAddressInput = z.infer<typeof CreateUserAddressSchema>;

export const UpdateUserAddressSchema = CreateUserAddressSchema.partial().openapi('UpdateUserAddress');
export type UpdateUserAddressInput = z.infer<typeof UpdateUserAddressSchema>;

export const UserAddressResponseBaseSchema = z
	.object({
		user_id: z.string(),
		address_id: z.string(),
		primary: z.boolean(),
		details: z.unknown().nullable().optional(),
		type: z.nativeEnum(ADDRESS_TYPE),
	})
	.openapi('UserAddressResponseBase');

export const UserAddressResponseSchema = UserAddressResponseBaseSchema.extend({
	address: AddressResponseBaseSchema,
}).openapi('UserAddressResponse');

export type UserAddressBase = z.infer<typeof UserAddressResponseBaseSchema>;
export type UserAddressResponse = z.infer<typeof UserAddressResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserAddress', CreateUserAddressSchema);
	registry.register('UpdateUserAddress', UpdateUserAddressSchema);
	registry.register('UserAddressResponseBase', UserAddressResponseBaseSchema);
	registry.register('UserAddressResponse', UserAddressResponseSchema);
}

export type UserAddress = {
	user_id: string;
	address_id: string;
	primary: boolean;
	details?: unknown | null;
	type: ADDRESS_TYPE;
	users?: User;
	address?: Address;
};
