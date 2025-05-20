import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsIncludeSchema } from '../inputTypeSchemas/account_actionsIncludeSchema'
import { account_actionsWhereUniqueInputSchema } from '../inputTypeSchemas/account_actionsWhereUniqueInputSchema'
import { account_actionsCreateInputSchema } from '../inputTypeSchemas/account_actionsCreateInputSchema'
import { account_actionsUncheckedCreateInputSchema } from '../inputTypeSchemas/account_actionsUncheckedCreateInputSchema'
import { account_actionsUpdateInputSchema } from '../inputTypeSchemas/account_actionsUpdateInputSchema'
import { account_actionsUncheckedUpdateInputSchema } from '../inputTypeSchemas/account_actionsUncheckedUpdateInputSchema'
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const account_actionsSelectSchema: z.ZodType<Prisma.account_actionsSelect> = z.object({
  account_action_id: z.boolean().optional(),
  business_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  action_creator_user_id: z.boolean().optional(),
  reason: z.boolean().optional(),
  action: z.boolean().optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  action_creator: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const account_actionsUpsertArgsSchema: z.ZodType<Prisma.account_actionsUpsertArgs> = z.object({
  select: account_actionsSelectSchema.optional(),
  include: account_actionsIncludeSchema.optional(),
  where: account_actionsWhereUniqueInputSchema,
  create: z.union([ account_actionsCreateInputSchema,account_actionsUncheckedCreateInputSchema ]),
  update: z.union([ account_actionsUpdateInputSchema,account_actionsUncheckedUpdateInputSchema ]),
}).strict() ;

export default account_actionsUpsertArgsSchema;
