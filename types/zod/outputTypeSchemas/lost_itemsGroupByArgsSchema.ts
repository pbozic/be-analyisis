import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsWhereInputSchema } from '../inputTypeSchemas/lost_itemsWhereInputSchema'
import { lost_itemsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/lost_itemsOrderByWithAggregationInputSchema'
import { Lost_itemsScalarFieldEnumSchema } from '../inputTypeSchemas/Lost_itemsScalarFieldEnumSchema'
import { lost_itemsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/lost_itemsScalarWhereWithAggregatesInputSchema'

export const lost_itemsGroupByArgsSchema: z.ZodType<Prisma.lost_itemsGroupByArgs> = z.object({
  where: lost_itemsWhereInputSchema.optional(),
  orderBy: z.union([ lost_itemsOrderByWithAggregationInputSchema.array(),lost_itemsOrderByWithAggregationInputSchema ]).optional(),
  by: Lost_itemsScalarFieldEnumSchema.array(),
  having: lost_itemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default lost_itemsGroupByArgsSchema;
