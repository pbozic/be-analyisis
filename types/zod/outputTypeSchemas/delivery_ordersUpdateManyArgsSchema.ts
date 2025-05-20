import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersUpdateManyMutationInputSchema } from '../inputTypeSchemas/delivery_ordersUpdateManyMutationInputSchema'
import { delivery_ordersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/delivery_ordersUncheckedUpdateManyInputSchema'
import { delivery_ordersWhereInputSchema } from '../inputTypeSchemas/delivery_ordersWhereInputSchema'

export const delivery_ordersUpdateManyArgsSchema: z.ZodType<Prisma.delivery_ordersUpdateManyArgs> = z.object({
  data: z.union([ delivery_ordersUpdateManyMutationInputSchema,delivery_ordersUncheckedUpdateManyInputSchema ]),
  where: delivery_ordersWhereInputSchema.optional(),
}).strict() ;

export default delivery_ordersUpdateManyArgsSchema;
