import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_driversWhereInputSchema } from '../inputTypeSchemas/vehicle_driversWhereInputSchema'

export const vehicle_driversDeleteManyArgsSchema: z.ZodType<Prisma.vehicle_driversDeleteManyArgs> = z.object({
  where: vehicle_driversWhereInputSchema.optional(),
}).strict() ;

export default vehicle_driversDeleteManyArgsSchema;
