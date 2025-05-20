import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { account_actionsWhereInputSchema } from '../inputTypeSchemas/account_actionsWhereInputSchema'
import { account_actionsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/account_actionsOrderByWithAggregationInputSchema'
import { Account_actionsScalarFieldEnumSchema } from '../inputTypeSchemas/Account_actionsScalarFieldEnumSchema'
import { account_actionsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/account_actionsScalarWhereWithAggregatesInputSchema'

export const account_actionsGroupByArgsSchema: z.ZodType<Prisma.account_actionsGroupByArgs> = z.object({
  where: account_actionsWhereInputSchema.optional(),
  orderBy: z.union([ account_actionsOrderByWithAggregationInputSchema.array(),account_actionsOrderByWithAggregationInputSchema ]).optional(),
  by: Account_actionsScalarFieldEnumSchema.array(),
  having: account_actionsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default account_actionsGroupByArgsSchema;
