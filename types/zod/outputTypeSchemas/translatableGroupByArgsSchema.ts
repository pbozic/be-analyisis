import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableWhereInputSchema } from '../inputTypeSchemas/translatableWhereInputSchema'
import { translatableOrderByWithAggregationInputSchema } from '../inputTypeSchemas/translatableOrderByWithAggregationInputSchema'
import { TranslatableScalarFieldEnumSchema } from '../inputTypeSchemas/TranslatableScalarFieldEnumSchema'
import { translatableScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/translatableScalarWhereWithAggregatesInputSchema'

export const translatableGroupByArgsSchema: z.ZodType<Prisma.translatableGroupByArgs> = z.object({
  where: translatableWhereInputSchema.optional(),
  orderBy: z.union([ translatableOrderByWithAggregationInputSchema.array(),translatableOrderByWithAggregationInputSchema ]).optional(),
  by: TranslatableScalarFieldEnumSchema.array(),
  having: translatableScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default translatableGroupByArgsSchema;
