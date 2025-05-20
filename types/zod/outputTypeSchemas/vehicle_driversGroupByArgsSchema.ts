import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_driversWhereInputSchema } from '../inputTypeSchemas/vehicle_driversWhereInputSchema'
import { vehicle_driversOrderByWithAggregationInputSchema } from '../inputTypeSchemas/vehicle_driversOrderByWithAggregationInputSchema'
import { Vehicle_driversScalarFieldEnumSchema } from '../inputTypeSchemas/Vehicle_driversScalarFieldEnumSchema'
import { vehicle_driversScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/vehicle_driversScalarWhereWithAggregatesInputSchema'

export const vehicle_driversGroupByArgsSchema: z.ZodType<Prisma.vehicle_driversGroupByArgs> = z.object({
  where: vehicle_driversWhereInputSchema.optional(),
  orderBy: z.union([ vehicle_driversOrderByWithAggregationInputSchema.array(),vehicle_driversOrderByWithAggregationInputSchema ]).optional(),
  by: Vehicle_driversScalarFieldEnumSchema.array(),
  having: vehicle_driversScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default vehicle_driversGroupByArgsSchema;
