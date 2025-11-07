import { z } from 'zod';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives';

// Add Address DaoSchema
export const AddAddressDaoSchema = z.object({
	address: z.string().min(1),
	latitude: z.number(),
	longitude: z.number(),
	city: z.string().optional(),
	postal_code: z.string().optional(),
	country: z.string().optional(),
	street: z.string().optional(),
	name: z.string().optional(), // Will be deleted in the function
	icon: z.string().optional(), // Will be deleted in the function
});
export type AddAddressDaoInput = z.infer<typeof AddAddressDaoSchema>;

// Delete User Address DaoSchema
export const DeleteUserAddressDaoSchema = z.object({
	user_id: UUID,
	address_id: UUID,
});
export type DeleteUserAddressDaoInput = z.infer<typeof DeleteUserAddressDaoSchema>;

// Add User Address DaoSchema
export const AddUserAddressDaoSchema = z.object({
	user_id: UUID,
	address_id: UUID,
});
export type AddUserAddressDaoInput = z.infer<typeof AddUserAddressDaoSchema>;

// Edit User Address DaoSchema
export const EditUserAddressDaoSchema = z.object({
	user_id: UUID,
	address_id: UUID,
	data: z.object({
		primary: z.boolean().optional(),
		name: z.string().optional(),
		// Add other user_address fields as needed
	}),
});
export type EditUserAddressDaoInput = z.infer<typeof EditUserAddressDaoSchema>;

// Set Primary User Address DaoSchema
export const SetPrimaryUserAddressDaoSchema = z.object({
	user_id: UUID,
	address_id: UUID,
});
export type SetPrimaryUserAddressDaoInput = z.infer<typeof SetPrimaryUserAddressDaoSchema>;

// Update Address By Address ID DaoSchema
export const UpdateAddressByAddressIdDaoSchema = z.object({
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
});
export type UpdateAddressByAddressIdDaoInput = z.infer<typeof UpdateAddressByAddressIdDaoSchema>;

// Find Address DaoSchema
export const FindAddressDaoSchema = z.object({
	latitude: z.number(),
	longitude: z.number(),
});
export type FindAddressDaoInput = z.infer<typeof FindAddressDaoSchema>;

// Register schemas
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('AddAddressDao', AddAddressDaoSchema);
	registry.register('DeleteUserAddressDao', DeleteUserAddressDaoSchema);
	registry.register('AddUserAddressDao', AddUserAddressDaoSchema);
	registry.register('EditUserAddressDao', EditUserAddressDaoSchema);
	registry.register('SetPrimaryUserAddressDao', SetPrimaryUserAddressDaoSchema);
	registry.register('UpdateAddressByAddressIdDao', UpdateAddressByAddressIdDaoSchema);
	registry.register('FindAddressDao', FindAddressDaoSchema);
}
