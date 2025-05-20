import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesUpdateManyMutationInputSchema } from '../inputTypeSchemas/vehiclesUpdateManyMutationInputSchema'
import { vehiclesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/vehiclesUncheckedUpdateManyInputSchema'
import { vehiclesWhereInputSchema } from '../inputTypeSchemas/vehiclesWhereInputSchema'

export const vehiclesUpdateManyArgsSchema: z.ZodType<Prisma.vehiclesUpdateManyArgs> = z.object({
  data: z.union([ vehiclesUpdateManyMutationInputSchema,vehiclesUncheckedUpdateManyInputSchema ]),
  where: vehiclesWhereInputSchema.optional(),
}).strict() ;

export default vehiclesUpdateManyArgsSchema;
