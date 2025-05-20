import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_driversCreateManyInputSchema } from '../inputTypeSchemas/vehicle_driversCreateManyInputSchema'

export const vehicle_driversCreateManyAndReturnArgsSchema: z.ZodType<Prisma.vehicle_driversCreateManyAndReturnArgs> = z.object({
  data: z.union([ vehicle_driversCreateManyInputSchema,vehicle_driversCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default vehicle_driversCreateManyAndReturnArgsSchema;
