import { z } from 'zod';
import { group_usersWithRelationsSchema } from './group_usersSchema'
import type { group_usersWithRelations } from './group_usersSchema'
import { business_usersWithRelationsSchema } from './business_usersSchema'
import type { business_usersWithRelations } from './business_usersSchema'

/////////////////////////////////////////
// ALLOWANCES SCHEMA
/////////////////////////////////////////

export const allowancesSchema = z.object({
  allowance_id: z.string().uuid(),
  group_user_id: z.string().nullable(),
  business_users_id: z.string().nullable(),
  amount_taxi_wallet: z.number(),
  amount_transfer_wallet: z.number(),
  amount_delivery_wallet: z.number(),
  amount_any_wallet: z.number(),
  amount_taxi_purchase_order: z.number().nullable(),
  amount_transfer_purchase_order: z.number().nullable(),
  amount_delivery_purchase_order: z.number().nullable(),
  amount_any_purchase_order: z.number().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type allowances = z.infer<typeof allowancesSchema>

/////////////////////////////////////////
// ALLOWANCES RELATION SCHEMA
/////////////////////////////////////////

export type allowancesRelations = {
  user?: group_usersWithRelations | null;
  business_user?: business_usersWithRelations | null;
};

export type allowancesWithRelations = z.infer<typeof allowancesSchema> & allowancesRelations

export const allowancesWithRelationsSchema: z.ZodType<allowancesWithRelations> = allowancesSchema.merge(z.object({
  user: z.lazy(() => group_usersWithRelationsSchema).nullable(),
  business_user: z.lazy(() => business_usersWithRelationsSchema).nullable(),
}))

export default allowancesSchema;
