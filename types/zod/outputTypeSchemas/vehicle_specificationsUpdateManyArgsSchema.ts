import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_specificationsUpdateManyMutationInputSchema } from '../inputTypeSchemas/vehicle_specificationsUpdateManyMutationInputSchema'
import { vehicle_specificationsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/vehicle_specificationsUncheckedUpdateManyInputSchema'
import { vehicle_specificationsWhereInputSchema } from '../inputTypeSchemas/vehicle_specificationsWhereInputSchema'

export const vehicle_specificationsUpdateManyArgsSchema: z.ZodType<Prisma.vehicle_specificationsUpdateManyArgs> = z.object({
  data: z.union([ vehicle_specificationsUpdateManyMutationInputSchema,vehicle_specificationsUncheckedUpdateManyInputSchema ]),
  where: vehicle_specificationsWhereInputSchema.optional(),
}).strict() ;

export default vehicle_specificationsUpdateManyArgsSchema;
