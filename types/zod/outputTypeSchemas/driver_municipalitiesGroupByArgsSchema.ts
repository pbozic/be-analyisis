import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesWhereInputSchema } from '../inputTypeSchemas/driver_municipalitiesWhereInputSchema'
import { driver_municipalitiesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/driver_municipalitiesOrderByWithAggregationInputSchema'
import { Driver_municipalitiesScalarFieldEnumSchema } from '../inputTypeSchemas/Driver_municipalitiesScalarFieldEnumSchema'
import { driver_municipalitiesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/driver_municipalitiesScalarWhereWithAggregatesInputSchema'

export const driver_municipalitiesGroupByArgsSchema: z.ZodType<Prisma.driver_municipalitiesGroupByArgs> = z.object({
  where: driver_municipalitiesWhereInputSchema.optional(),
  orderBy: z.union([ driver_municipalitiesOrderByWithAggregationInputSchema.array(),driver_municipalitiesOrderByWithAggregationInputSchema ]).optional(),
  by: Driver_municipalitiesScalarFieldEnumSchema.array(),
  having: driver_municipalitiesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default driver_municipalitiesGroupByArgsSchema;
