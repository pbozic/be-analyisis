import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type WalletTransferHistory = {
	wallet_transfer_history_id: string;
	order_id: string;
	amount: number;
	created_at: Date;
	updated_at: Date;
	success: boolean;
	delivery_order?: DeliveryOrder | null;
	taxi_order?: TaxiOrder | null;
};

export const CreateWalletTransferHistorySchema = z
	.object({
		wallet_transfer_history_id: z.string().uuid(),
		order_id: z.string().uuid(),
		amount: z.number(),
		success: z.boolean(),
	})
	.openapi('CreateWalletTransferHistory');

export type CreateWalletTransferHistoryInput = z.infer<typeof CreateWalletTransferHistorySchema>;

export const UpdateWalletTransferHistorySchema =
	CreateWalletTransferHistorySchema.partial().openapi('UpdateWalletTransferHistory');
export type UpdateWalletTransferHistoryInput = z.infer<typeof UpdateWalletTransferHistorySchema>;

export const WalletTransferHistoryResponseSchema = z
	.object({
		wallet_transfer_history_id: z.string(),
		order_id: z.string(),
		amount: z.number(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		success: z.boolean(),
		delivery_order: DeliveryOrderResponseSchema.nullable().optional(),
		taxi_order: TaxiOrderResponseSchema.nullable().optional(),
	})
	.openapi('WalletTransferHistoryResponse');

export type WalletTransferHistoryResponse = z.infer<typeof WalletTransferHistoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateWalletTransferHistory', CreateWalletTransferHistorySchema);
	registry.register('UpdateWalletTransferHistory', UpdateWalletTransferHistorySchema);
	registry.register('WalletTransferHistoryResponse', WalletTransferHistoryResponseSchema);
}
