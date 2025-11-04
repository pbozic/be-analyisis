import { TRANSACTION_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Document } from '../documents/Document.js';
import type { WalletFund } from '../wallet/WalletFund.js';
import type { User } from '../users/User.js';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { UserResponseSchema } from '../users/User';
import { DocumentResponseSchema } from '../documents/Document';
import { WalletFundResponseSchema } from '../wallet/WalletFund';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Transaction = {
	transaction_id: string;
	user_id: string;
	amount: number;
	type: TRANSACTION_TYPE;
	description?: string | null;
	createdAt: Date;
	updatedAt: Date;
	delivery_order_id?: string | null;
	taxi_order_id?: string | null;
	wallet_fund_id?: string | null;
	taxi_order?: TaxiOrder | null;
	delivery_order?: DeliveryOrder | null;
	user: User;
	documents: Document[];
	wallet_funds?: WalletFund | null;
};

export const CreateTransactionSchema = z
	.object({
		transaction_id: z.string().uuid(),
		user_id: z.string().uuid(),
		amount: z.number(),
		type: z.nativeEnum(TRANSACTION_TYPE),
		description: z.string().nullable().optional(),
		createdAt: z.unknown(),
		updatedAt: z.unknown(),
		delivery_order_id: z.string().uuid().nullable().optional(),
		taxi_order_id: z.string().uuid().nullable().optional(),
		wallet_fund_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateTransaction');

export type CreateTransactionInput = z.infer<typeof CreateTransactionSchema>;

export const UpdateTransactionSchema = CreateTransactionSchema.partial().openapi('UpdateTransaction');
export type UpdateTransactionInput = z.infer<typeof UpdateTransactionSchema>;

export const TransactionResponseSchema = z
	.object({
		transaction_id: z.string(),
		user_id: z.string(),
		amount: z.number(),
		type: z.nativeEnum(TRANSACTION_TYPE),
		description: z.string().nullable().optional(),
		createdAt: z.string().datetime(),
		updatedAt: z.string().datetime(),
		delivery_order_id: z.string().nullable().optional(),
		taxi_order_id: z.string().nullable().optional(),
		wallet_fund_id: z.string().nullable().optional(),
		taxi_order: TaxiOrderResponseSchema.nullable().optional(),
		delivery_order: DeliveryOrderResponseSchema.nullable().optional(),
		user: UserResponseSchema,
		documents: z.array(DocumentResponseSchema),
		wallet_funds: WalletFundResponseSchema.nullable().optional(),
	})
	.openapi('TransactionResponse');

export type TransactionResponse = z.infer<typeof TransactionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTransaction', CreateTransactionSchema);
	registry.register('UpdateTransaction', UpdateTransactionSchema);
	registry.register('TransactionResponse', TransactionResponseSchema);
}
