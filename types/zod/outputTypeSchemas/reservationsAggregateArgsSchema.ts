import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsWhereInputSchema } from '../inputTypeSchemas/reservationsWhereInputSchema'
import { reservationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/reservationsOrderByWithRelationInputSchema'
import { reservationsWhereUniqueInputSchema } from '../inputTypeSchemas/reservationsWhereUniqueInputSchema'

export const reservationsAggregateArgsSchema: z.ZodType<Prisma.reservationsAggregateArgs> = z.object({
  where: reservationsWhereInputSchema.optional(),
  orderBy: z.union([ reservationsOrderByWithRelationInputSchema.array(),reservationsOrderByWithRelationInputSchema ]).optional(),
  cursor: reservationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default reservationsAggregateArgsSchema;
