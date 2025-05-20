import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesWhereInputSchema } from '../inputTypeSchemas/driver_municipalitiesWhereInputSchema'
import { driver_municipalitiesOrderByWithRelationInputSchema } from '../inputTypeSchemas/driver_municipalitiesOrderByWithRelationInputSchema'
import { driver_municipalitiesWhereUniqueInputSchema } from '../inputTypeSchemas/driver_municipalitiesWhereUniqueInputSchema'

export const driver_municipalitiesAggregateArgsSchema: z.ZodType<Prisma.driver_municipalitiesAggregateArgs> = z.object({
  where: driver_municipalitiesWhereInputSchema.optional(),
  orderBy: z.union([ driver_municipalitiesOrderByWithRelationInputSchema.array(),driver_municipalitiesOrderByWithRelationInputSchema ]).optional(),
  cursor: driver_municipalitiesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default driver_municipalitiesAggregateArgsSchema;
