import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsWhereInputSchema } from '../inputTypeSchemas/documentsWhereInputSchema'
import { documentsOrderByWithRelationInputSchema } from '../inputTypeSchemas/documentsOrderByWithRelationInputSchema'
import { documentsWhereUniqueInputSchema } from '../inputTypeSchemas/documentsWhereUniqueInputSchema'

export const documentsAggregateArgsSchema: z.ZodType<Prisma.documentsAggregateArgs> = z.object({
  where: documentsWhereInputSchema.optional(),
  orderBy: z.union([ documentsOrderByWithRelationInputSchema.array(),documentsOrderByWithRelationInputSchema ]).optional(),
  cursor: documentsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default documentsAggregateArgsSchema;
