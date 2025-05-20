import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_specificationsWhereInputSchema } from '../inputTypeSchemas/vehicle_specificationsWhereInputSchema'
import { vehicle_specificationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/vehicle_specificationsOrderByWithRelationInputSchema'
import { vehicle_specificationsWhereUniqueInputSchema } from '../inputTypeSchemas/vehicle_specificationsWhereUniqueInputSchema'

export const vehicle_specificationsAggregateArgsSchema: z.ZodType<Prisma.vehicle_specificationsAggregateArgs> = z.object({
  where: vehicle_specificationsWhereInputSchema.optional(),
  orderBy: z.union([ vehicle_specificationsOrderByWithRelationInputSchema.array(),vehicle_specificationsOrderByWithRelationInputSchema ]).optional(),
  cursor: vehicle_specificationsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default vehicle_specificationsAggregateArgsSchema;
