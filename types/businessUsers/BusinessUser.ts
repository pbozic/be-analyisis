import { COMPANY_ROLE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Business } from '../business/Business.js';
import type { Address } from '../addresses/Address.js';
import type { Allowance } from '../familyUsers/Allowance.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { Employee } from '../reservations/Employee.js';
import { UserResponseBaseSchema } from '../users/User';
import { BusinessResponseSchema } from '../business/Business';
import { AddressResponseBaseSchema } from '../addresses/Address';
import { AllowanceResponseSchema } from '../familyUsers/Allowance';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { EmployeeResponseBaseSchema } from '../reservations/Employee';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateBusinessUserSchema = z
	.object({
		business_users_id: z.string().uuid(),
		online: z.boolean().nullable().optional(),
		company_role: z.nativeEnum(COMPANY_ROLE),
		user_id: z.string().uuid(),
		business_id: z.string().uuid(),
		operating_address_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateBusinessUser');

export type CreateBusinessUserInput = z.infer<typeof CreateBusinessUserSchema>;

export const UpdateBusinessUserSchema = CreateBusinessUserSchema.partial().openapi('UpdateBusinessUser');
export type UpdateBusinessUserInput = z.infer<typeof UpdateBusinessUserSchema>;

export const BusinessUserResponseBaseSchema = z
	.object({
		business_users_id: z.string(),
		online: z.boolean().nullable().optional(),
		company_role: z.nativeEnum(COMPANY_ROLE),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		user_id: z.string(),
		business_id: z.string(),
		operating_address_id: z.string().nullable().optional(),
	})
	.openapi('BusinessUserResponseBase');

export type BusinessUserBase = z.infer<typeof BusinessUserResponseBaseSchema>;

// Adding omitted relations - circular dependencies are acceptable as requested
// BusinessUser → Employee/Business → ReservationModule → Employee → BusinessUser
// BusinessUser → Address → BusinessUser (direct circle)
// BusinessUser → User → UserAddress → Address → BusinessUser
// @ts-ignore - Circular dependencies resolved at runtime
export const BusinessUserResponseSchema = BusinessUserResponseBaseSchema.extend({
	users: UserResponseBaseSchema.nullable().optional(),
	// @ts-ignore - Circular dependency resolved at runtime
	business: BusinessResponseSchema.nullable().optional(),
	// @ts-ignore - Circular dependency resolved at runtime
	operating_address: AddressResponseBaseSchema.nullable().optional(),
	allowance: AllowanceResponseSchema.nullable().optional(),
	taxi_orders: z.array(TaxiOrderResponseSchema).optional(),
	// @ts-ignore - Circular dependency resolved at runtime
	employee: EmployeeResponseBaseSchema.nullable().optional(),
}).openapi('BusinessUserResponse');

export type BusinessUserResponse = z.infer<typeof BusinessUserResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessUser', CreateBusinessUserSchema);
	registry.register('UpdateBusinessUser', UpdateBusinessUserSchema);
	registry.register('BusinessUserResponseBase', BusinessUserResponseBaseSchema);
	registry.register('BusinessUserResponse', BusinessUserResponseSchema);
}

export type BusinessUser = {
	business_users_id: string;
	online?: boolean | null;
	company_role: COMPANY_ROLE;
	created_at: Date;
	updated_at: Date;
	user_id: string;
	users?: User | null;
	business_id: string;
	business?: Business | null;
	operating_address_id?: string | null;
	operating_address?: Address | null;
	allowance?: Allowance | null;
	taxi_orders?: TaxiOrder[];
	employee?: Employee | null;
};
