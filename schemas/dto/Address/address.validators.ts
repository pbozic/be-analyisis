import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== Address DAO Input Schemas =====
// These are used by DAOs, not routes with validate()
// Route-level validators are in User/UserRequest.dto.ts and Business/business.validators.ts

export const AddAddressDaoSchema = z
	.object({
		address: z.string().min(1),
		latitude: z.number(),
		longitude: z.number(),
		city: z.string().optional(),
		postal_code: z.string().optional(),
		country: z.string().optional(),
		street: z.string().optional(),
		name: z.string().optional(), // Will be deleted in the function
		icon: z.string().optional(), // Will be deleted in the function
	})
	.openapi('AddAddressDao');
export type AddAddressDaoInput = z.infer<typeof AddAddressDaoSchema>;

export const DeleteUserAddressDaoSchema = z
	.object({
		user_id: UUID,
		address_id: UUID,
	})
	.openapi('DeleteUserAddressDao');
export type DeleteUserAddressDaoInput = z.infer<typeof DeleteUserAddressDaoSchema>;

export const AddUserAddressDaoSchema = z
	.object({
		user_id: UUID,
		address_id: UUID,
	})
	.openapi('AddUserAddressDao');
export type AddUserAddressDaoInput = z.infer<typeof AddUserAddressDaoSchema>;

export const EditUserAddressDaoSchema = z
	.object({
		user_id: UUID,
		address_id: UUID,
		data: z.object({
			primary: z.boolean().optional(),
			name: z.string().optional(),
			// Add other user_address fields as needed
		}),
	})
	.openapi('EditUserAddressDao');
export type EditUserAddressDaoInput = z.infer<typeof EditUserAddressDaoSchema>;

export const SetPrimaryUserAddressDaoSchema = z
	.object({
		user_id: UUID,
		address_id: UUID,
	})
	.openapi('SetPrimaryUserAddressDao');
export type SetPrimaryUserAddressDaoInput = z.infer<typeof SetPrimaryUserAddressDaoSchema>;

export const UpdateAddressByAddressIdDaoSchema = z
	.object({
		address_id: UUID,
		updateData: z.object({
			address: z.string().optional(),
			latitude: z.number().optional(),
			longitude: z.number().optional(),
			city: z.string().optional(),
			postal_code: z.string().optional(),
			country: z.string().optional(),
			street: z.string().optional(),
		}),
	})
	.openapi('UpdateAddressByAddressIdDao');
export type UpdateAddressByAddressIdDaoInput = z.infer<typeof UpdateAddressByAddressIdDaoSchema>;

export const FindAddressDaoSchema = z
	.object({
		latitude: z.number(),
		longitude: z.number(),
	})
	.openapi('FindAddressDao');
export type FindAddressDaoInput = z.infer<typeof FindAddressDaoSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('AddAddressDao', AddAddressDaoSchema);
	registry.register('DeleteUserAddressDao', DeleteUserAddressDaoSchema);
	registry.register('AddUserAddressDao', AddUserAddressDaoSchema);
	registry.register('EditUserAddressDao', EditUserAddressDaoSchema);
	registry.register('SetPrimaryUserAddressDao', SetPrimaryUserAddressDaoSchema);
	registry.register('UpdateAddressByAddressIdDao', UpdateAddressByAddressIdDaoSchema);
	registry.register('FindAddressDao', FindAddressDaoSchema);
}
