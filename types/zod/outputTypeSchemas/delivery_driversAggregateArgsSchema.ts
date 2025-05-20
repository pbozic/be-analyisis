import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversWhereInputSchema } from '../inputTypeSchemas/delivery_driversWhereInputSchema'
import { delivery_driversOrderByWithRelationInputSchema } from '../inputTypeSchemas/delivery_driversOrderByWithRelationInputSchema'
import { delivery_driversWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_driversWhereUniqueInputSchema'

export const delivery_driversAggregateArgsSchema: z.ZodType<Prisma.delivery_driversAggregateArgs> = z.object({
  where: delivery_driversWhereInputSchema.optional(),
  orderBy: z.union([ delivery_driversOrderByWithRelationInputSchema.array(),delivery_driversOrderByWithRelationInputSchema ]).optional(),
  cursor: delivery_driversWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default delivery_driversAggregateArgsSchema;
