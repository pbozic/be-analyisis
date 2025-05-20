import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { cashbackWhereInputSchema } from '../inputTypeSchemas/cashbackWhereInputSchema'
import { cashbackOrderByWithAggregationInputSchema } from '../inputTypeSchemas/cashbackOrderByWithAggregationInputSchema'
import { CashbackScalarFieldEnumSchema } from '../inputTypeSchemas/CashbackScalarFieldEnumSchema'
import { cashbackScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/cashbackScalarWhereWithAggregatesInputSchema'

export const cashbackGroupByArgsSchema: z.ZodType<Prisma.cashbackGroupByArgs> = z.object({
  where: cashbackWhereInputSchema.optional(),
  orderBy: z.union([ cashbackOrderByWithAggregationInputSchema.array(),cashbackOrderByWithAggregationInputSchema ]).optional(),
  by: CashbackScalarFieldEnumSchema.array(),
  having: cashbackScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default cashbackGroupByArgsSchema;
