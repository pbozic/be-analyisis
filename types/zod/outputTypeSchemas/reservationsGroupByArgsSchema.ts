import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsWhereInputSchema } from '../inputTypeSchemas/reservationsWhereInputSchema'
import { reservationsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/reservationsOrderByWithAggregationInputSchema'
import { ReservationsScalarFieldEnumSchema } from '../inputTypeSchemas/ReservationsScalarFieldEnumSchema'
import { reservationsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/reservationsScalarWhereWithAggregatesInputSchema'

export const reservationsGroupByArgsSchema: z.ZodType<Prisma.reservationsGroupByArgs> = z.object({
  where: reservationsWhereInputSchema.optional(),
  orderBy: z.union([ reservationsOrderByWithAggregationInputSchema.array(),reservationsOrderByWithAggregationInputSchema ]).optional(),
  by: ReservationsScalarFieldEnumSchema.array(),
  having: reservationsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default reservationsGroupByArgsSchema;
