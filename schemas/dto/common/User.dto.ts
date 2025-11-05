import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Email, PhoneNumber } from '../../primitives.js';

extendZodWithOpenApi(z);

// === User Role Assignment ===
export const UserRoleAssignmentSchema = z
	.object({
		role: z.string(),
		primary: z.boolean(),
	})
	.openapi({
		title: 'UserRoleAssignment',
		description: 'User role with primary flag',
	});

// === Basic User Data ===
export const BasicUserDataSchema = z
	.object({
		first_name: z.string().min(1),
		last_name: z.string().min(1),
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
		telephone_code: z.string().optional(),
		date_of_birth: z.string().date().optional(),
	})
	.openapi({
		title: 'BasicUserData',
		description: 'Basic user information fields',
	});

// === Extended User Data ===
export const ExtendedUserDataSchema = BasicUserDataSchema.extend({
	user_roles: z.array(UserRoleAssignmentSchema).optional(),
	details: z.record(z.any()).optional(),
}).openapi({
	title: 'ExtendedUserData',
	description: 'Extended user data with roles and details',
});

// === User Data with Password ===
export const UserDataWithPasswordSchema = BasicUserDataSchema.extend({
	password: z.string().min(8),
	confirm_password: z.string().min(8),
	user_roles: z.array(UserRoleAssignmentSchema).optional(),
})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords don't match",
		path: ['confirm_password'],
	})
	.openapi({
		title: 'UserDataWithPassword',
		description: 'User data with password validation',
	});

// === Optional Basic User Data ===
export const OptionalBasicUserDataSchema = z
	.object({
		first_name: z.string().min(1).optional(),
		last_name: z.string().min(1).optional(),
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
		telephone_code: z.string().optional(),
		date_of_birth: z.string().date().optional(),
	})
	.openapi({
		title: 'OptionalBasicUserData',
		description: 'Optional basic user information fields for updates',
	});

// === Type exports ===
export type UserRoleAssignment = z.infer<typeof UserRoleAssignmentSchema>;
export type BasicUserData = z.infer<typeof BasicUserDataSchema>;
export type ExtendedUserData = z.infer<typeof ExtendedUserDataSchema>;
export type UserDataWithPassword = z.infer<typeof UserDataWithPasswordSchema>;
export type OptionalBasicUserData = z.infer<typeof OptionalBasicUserDataSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('UserRoleAssignment', UserRoleAssignmentSchema);
	registry.register('BasicUserData', BasicUserDataSchema);
	registry.register('ExtendedUserData', ExtendedUserDataSchema);
	registry.register('UserDataWithPassword', UserDataWithPasswordSchema);
	registry.register('OptionalBasicUserData', OptionalBasicUserDataSchema);
}
