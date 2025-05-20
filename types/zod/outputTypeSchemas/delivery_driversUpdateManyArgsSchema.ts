import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversUpdateManyMutationInputSchema } from '../inputTypeSchemas/delivery_driversUpdateManyMutationInputSchema'
import { delivery_driversUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/delivery_driversUncheckedUpdateManyInputSchema'
import { delivery_driversWhereInputSchema } from '../inputTypeSchemas/delivery_driversWhereInputSchema'

export const delivery_driversUpdateManyArgsSchema: z.ZodType<Prisma.delivery_driversUpdateManyArgs> = z.object({
  data: z.union([ delivery_driversUpdateManyMutationInputSchema,delivery_driversUncheckedUpdateManyInputSchema ]),
  where: delivery_driversWhereInputSchema.optional(),
}).strict() ;

export default delivery_driversUpdateManyArgsSchema;
