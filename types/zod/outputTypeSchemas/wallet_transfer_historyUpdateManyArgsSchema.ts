import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_transfer_historyUpdateManyMutationInputSchema } from '../inputTypeSchemas/wallet_transfer_historyUpdateManyMutationInputSchema'
import { wallet_transfer_historyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/wallet_transfer_historyUncheckedUpdateManyInputSchema'
import { wallet_transfer_historyWhereInputSchema } from '../inputTypeSchemas/wallet_transfer_historyWhereInputSchema'

export const wallet_transfer_historyUpdateManyArgsSchema: z.ZodType<Prisma.wallet_transfer_historyUpdateManyArgs> = z.object({
  data: z.union([ wallet_transfer_historyUpdateManyMutationInputSchema,wallet_transfer_historyUncheckedUpdateManyInputSchema ]),
  where: wallet_transfer_historyWhereInputSchema.optional(),
}).strict() ;

export default wallet_transfer_historyUpdateManyArgsSchema;
