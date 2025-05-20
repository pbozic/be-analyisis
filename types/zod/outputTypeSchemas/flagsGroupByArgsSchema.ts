import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsWhereInputSchema } from '../inputTypeSchemas/flagsWhereInputSchema'
import { flagsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/flagsOrderByWithAggregationInputSchema'
import { FlagsScalarFieldEnumSchema } from '../inputTypeSchemas/FlagsScalarFieldEnumSchema'
import { flagsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/flagsScalarWhereWithAggregatesInputSchema'

export const flagsGroupByArgsSchema: z.ZodType<Prisma.flagsGroupByArgs> = z.object({
  where: flagsWhereInputSchema.optional(),
  orderBy: z.union([ flagsOrderByWithAggregationInputSchema.array(),flagsOrderByWithAggregationInputSchema ]).optional(),
  by: FlagsScalarFieldEnumSchema.array(),
  having: flagsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default flagsGroupByArgsSchema;
