import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobby_usersUpdateManyMutationInputSchema } from '../inputTypeSchemas/order_lobby_usersUpdateManyMutationInputSchema'
import { order_lobby_usersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/order_lobby_usersUncheckedUpdateManyInputSchema'
import { order_lobby_usersWhereInputSchema } from '../inputTypeSchemas/order_lobby_usersWhereInputSchema'

export const order_lobby_usersUpdateManyArgsSchema: z.ZodType<Prisma.order_lobby_usersUpdateManyArgs> = z.object({
  data: z.union([ order_lobby_usersUpdateManyMutationInputSchema,order_lobby_usersUncheckedUpdateManyInputSchema ]),
  where: order_lobby_usersWhereInputSchema.optional(),
}).strict() ;

export default order_lobby_usersUpdateManyArgsSchema;
