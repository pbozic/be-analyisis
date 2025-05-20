import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessWhereInputSchema } from '../inputTypeSchemas/businessWhereInputSchema'
import { businessOrderByWithRelationInputSchema } from '../inputTypeSchemas/businessOrderByWithRelationInputSchema'
import { businessWhereUniqueInputSchema } from '../inputTypeSchemas/businessWhereUniqueInputSchema'

export const businessAggregateArgsSchema: z.ZodType<Prisma.businessAggregateArgs> = z.object({
  where: businessWhereInputSchema.optional(),
  orderBy: z.union([ businessOrderByWithRelationInputSchema.array(),businessOrderByWithRelationInputSchema ]).optional(),
  cursor: businessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default businessAggregateArgsSchema;
