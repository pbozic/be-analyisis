import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { GroupUser } from './GroupUser.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import { GroupUserResponseSchema } from './GroupUser';
import { BusinessUserResponseSchema } from '../businessUsers/BusinessUser';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateAllowanceSchema = z
	.object({
		allowance_id: z.string().uuid(),
		group_user_id: z.string().uuid().nullable().optional(),
		business_users_id: z.string().uuid().nullable().optional(),
		amount_taxi_wallet: z.number(),
		amount_transfer_wallet: z.number(),
		amount_delivery_wallet: z.number(),
		amount_any_wallet: z.number(),
		amount_taxi_purchase_order: z.number().nullable().optional(),
		amount_transfer_purchase_order: z.number().nullable().optional(),
		amount_delivery_purchase_order: z.number().nullable().optional(),
		amount_any_purchase_order: z.number().nullable().optional(),
	})
	.openapi('CreateAllowance');

export type CreateAllowanceInput = z.infer<typeof CreateAllowanceSchema>;

export const UpdateAllowanceSchema = CreateAllowanceSchema.partial().openapi('UpdateAllowance');
export type UpdateAllowanceInput = z.infer<typeof UpdateAllowanceSchema>;

export const AllowanceResponseSchema = z
	.object({
		allowance_id: z.string(),
		group_user_id: z.string().nullable().optional(),
		business_users_id: z.string().nullable().optional(),
		amount_taxi_wallet: z.number(),
		amount_transfer_wallet: z.number(),
		amount_delivery_wallet: z.number(),
		amount_any_wallet: z.number(),
		amount_taxi_purchase_order: z.number().nullable().optional(),
		amount_transfer_purchase_order: z.number().nullable().optional(),
		amount_delivery_purchase_order: z.number().nullable().optional(),
		amount_any_purchase_order: z.number().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		user: GroupUserResponseSchema.nullable().optional(),
		business_user: BusinessUserResponseSchema.nullable().optional(),
	})
	.openapi('AllowanceResponse');

export type AllowanceResponse = z.infer<typeof AllowanceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAllowance', CreateAllowanceSchema);
	registry.register('UpdateAllowance', UpdateAllowanceSchema);
	registry.register('AllowanceResponse', AllowanceResponseSchema);
}

export type Allowance = {
	allowance_id: string;
	group_user_id?: string | null;
	business_users_id?: string | null;
	amount_taxi_wallet: number;
	amount_transfer_wallet: number;
	amount_delivery_wallet: number;
	amount_any_wallet: number;
	amount_taxi_purchase_order?: number | null;
	amount_transfer_purchase_order?: number | null;
	amount_delivery_purchase_order?: number | null;
	amount_any_purchase_order?: number | null;
	created_at: Date;
	updated_at: Date;
	user?: GroupUser | null;
	business_user?: BusinessUser | null;
};
