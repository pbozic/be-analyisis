import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsWhereInputSchema } from '../inputTypeSchemas/translationsWhereInputSchema'
import { translationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/translationsOrderByWithRelationInputSchema'
import { translationsWhereUniqueInputSchema } from '../inputTypeSchemas/translationsWhereUniqueInputSchema'

export const translationsAggregateArgsSchema: z.ZodType<Prisma.translationsAggregateArgs> = z.object({
  where: translationsWhereInputSchema.optional(),
  orderBy: z.union([ translationsOrderByWithRelationInputSchema.array(),translationsOrderByWithRelationInputSchema ]).optional(),
  cursor: translationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default translationsAggregateArgsSchema;
