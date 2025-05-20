import { z } from 'zod';
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema';
import type { delivery_ordersWithRelations } from './delivery_ordersSchema';
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema';
import type { taxi_ordersWithRelations } from './taxi_ordersSchema';

/////////////////////////////////////////
// WALLET TRANSFER HISTORY SCHEMA
/////////////////////////////////////////

export const wallet_transfer_historySchema = z.object({
	wallet_transfer_history_id: z.string().uuid(),
	order_id: z.string(),
	amount: z.number(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	success: z.boolean(),
});

export type wallet_transfer_history = z.infer<typeof wallet_transfer_historySchema>;

/////////////////////////////////////////
// WALLET TRANSFER HISTORY RELATION SCHEMA
/////////////////////////////////////////

export type wallet_transfer_historyRelations = {
	delivery_order?: delivery_ordersWithRelations | null;
	taxi_order?: taxi_ordersWithRelations | null;
};

export type wallet_transfer_historyWithRelations = z.infer<typeof wallet_transfer_historySchema> &
	wallet_transfer_historyRelations;

export const wallet_transfer_historyWithRelationsSchema: z.ZodType<wallet_transfer_historyWithRelations> =
	wallet_transfer_historySchema.merge(
		z.object({
			delivery_order: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
			taxi_order: z.lazy(() => taxi_ordersWithRelationsSchema).nullable(),
		})
	);

export default wallet_transfer_historySchema;
