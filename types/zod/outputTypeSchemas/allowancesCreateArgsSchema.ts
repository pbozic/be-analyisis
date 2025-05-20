import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allowancesIncludeSchema } from '../inputTypeSchemas/allowancesIncludeSchema'
import { allowancesCreateInputSchema } from '../inputTypeSchemas/allowancesCreateInputSchema'
import { allowancesUncheckedCreateInputSchema } from '../inputTypeSchemas/allowancesUncheckedCreateInputSchema'
import { group_usersArgsSchema } from "../outputTypeSchemas/group_usersArgsSchema"
import { business_usersArgsSchema } from "../outputTypeSchemas/business_usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const allowancesSelectSchema: z.ZodType<Prisma.allowancesSelect> = z.object({
  allowance_id: z.boolean().optional(),
  group_user_id: z.boolean().optional(),
  business_users_id: z.boolean().optional(),
  amount_taxi_wallet: z.boolean().optional(),
  amount_transfer_wallet: z.boolean().optional(),
  amount_delivery_wallet: z.boolean().optional(),
  amount_any_wallet: z.boolean().optional(),
  amount_taxi_purchase_order: z.boolean().optional(),
  amount_transfer_purchase_order: z.boolean().optional(),
  amount_delivery_purchase_order: z.boolean().optional(),
  amount_any_purchase_order: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => group_usersArgsSchema)]).optional(),
  business_user: z.union([z.boolean(),z.lazy(() => business_usersArgsSchema)]).optional(),
}).strict()

export const allowancesCreateArgsSchema: z.ZodType<Prisma.allowancesCreateArgs> = z.object({
  select: allowancesSelectSchema.optional(),
  include: allowancesIncludeSchema.optional(),
  data: z.union([ allowancesCreateInputSchema,allowancesUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export default allowancesCreateArgsSchema;
