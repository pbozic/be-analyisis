import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_driversUpdateManyMutationInputSchema } from '../inputTypeSchemas/vehicle_driversUpdateManyMutationInputSchema'
import { vehicle_driversUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/vehicle_driversUncheckedUpdateManyInputSchema'
import { vehicle_driversWhereInputSchema } from '../inputTypeSchemas/vehicle_driversWhereInputSchema'

export const vehicle_driversUpdateManyArgsSchema: z.ZodType<Prisma.vehicle_driversUpdateManyArgs> = z.object({
  data: z.union([ vehicle_driversUpdateManyMutationInputSchema,vehicle_driversUncheckedUpdateManyInputSchema ]),
  where: vehicle_driversWhereInputSchema.optional(),
}).strict() ;

export default vehicle_driversUpdateManyArgsSchema;
