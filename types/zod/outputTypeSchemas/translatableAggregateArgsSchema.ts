import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableWhereInputSchema } from '../inputTypeSchemas/translatableWhereInputSchema'
import { translatableOrderByWithRelationInputSchema } from '../inputTypeSchemas/translatableOrderByWithRelationInputSchema'
import { translatableWhereUniqueInputSchema } from '../inputTypeSchemas/translatableWhereUniqueInputSchema'

export const translatableAggregateArgsSchema: z.ZodType<Prisma.translatableAggregateArgs> = z.object({
  where: translatableWhereInputSchema.optional(),
  orderBy: z.union([ translatableOrderByWithRelationInputSchema.array(),translatableOrderByWithRelationInputSchema ]).optional(),
  cursor: translatableWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default translatableAggregateArgsSchema;
