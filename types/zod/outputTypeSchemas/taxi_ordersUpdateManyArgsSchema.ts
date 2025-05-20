import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersUpdateManyMutationInputSchema } from '../inputTypeSchemas/taxi_ordersUpdateManyMutationInputSchema'
import { taxi_ordersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/taxi_ordersUncheckedUpdateManyInputSchema'
import { taxi_ordersWhereInputSchema } from '../inputTypeSchemas/taxi_ordersWhereInputSchema'

export const taxi_ordersUpdateManyArgsSchema: z.ZodType<Prisma.taxi_ordersUpdateManyArgs> = z.object({
  data: z.union([ taxi_ordersUpdateManyMutationInputSchema,taxi_ordersUncheckedUpdateManyInputSchema ]),
  where: taxi_ordersWhereInputSchema.optional(),
}).strict() ;

export default taxi_ordersUpdateManyArgsSchema;
