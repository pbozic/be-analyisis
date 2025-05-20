import { z } from 'zod';
import { TRANSACTION_TYPESchema } from '../inputTypeSchemas/TRANSACTION_TYPESchema'
import { taxi_ordersWithRelationsSchema } from './taxi_ordersSchema'
import type { taxi_ordersWithRelations } from './taxi_ordersSchema'
import { delivery_ordersWithRelationsSchema } from './delivery_ordersSchema'
import type { delivery_ordersWithRelations } from './delivery_ordersSchema'
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { documentsWithRelationsSchema } from './documentsSchema'
import type { documentsWithRelations } from './documentsSchema'
import { wallet_fundsWithRelationsSchema } from './wallet_fundsSchema'
import type { wallet_fundsWithRelations } from './wallet_fundsSchema'

/////////////////////////////////////////
// TRANSACTIONS SCHEMA
/////////////////////////////////////////

export const transactionsSchema = z.object({
  type: TRANSACTION_TYPESchema,
  transaction_id: z.string().uuid(),
  user_id: z.string(),
  amount: z.number(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  delivery_order_id: z.string().nullable(),
  taxi_order_id: z.string().nullable(),
  wallet_fund_id: z.string().nullable(),
})

export type transactions = z.infer<typeof transactionsSchema>

/////////////////////////////////////////
// TRANSACTIONS RELATION SCHEMA
/////////////////////////////////////////

export type transactionsRelations = {
  taxi_order?: taxi_ordersWithRelations | null;
  delivery_order?: delivery_ordersWithRelations | null;
  user: usersWithRelations;
  documents: documentsWithRelations[];
  wallet_funds?: wallet_fundsWithRelations | null;
};

export type transactionsWithRelations = z.infer<typeof transactionsSchema> & transactionsRelations

export const transactionsWithRelationsSchema: z.ZodType<transactionsWithRelations> = transactionsSchema.merge(z.object({
  taxi_order: z.lazy(() => taxi_ordersWithRelationsSchema).nullable(),
  delivery_order: z.lazy(() => delivery_ordersWithRelationsSchema).nullable(),
  user: z.lazy(() => usersWithRelationsSchema),
  documents: z.lazy(() => documentsWithRelationsSchema).array(),
  wallet_funds: z.lazy(() => wallet_fundsWithRelationsSchema).nullable(),
}))

export default transactionsSchema;
