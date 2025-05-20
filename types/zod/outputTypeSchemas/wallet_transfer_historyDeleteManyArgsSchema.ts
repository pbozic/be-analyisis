import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_transfer_historyWhereInputSchema } from '../inputTypeSchemas/wallet_transfer_historyWhereInputSchema'

export const wallet_transfer_historyDeleteManyArgsSchema: z.ZodType<Prisma.wallet_transfer_historyDeleteManyArgs> = z.object({
  where: wallet_transfer_historyWhereInputSchema.optional(),
}).strict() ;

export default wallet_transfer_historyDeleteManyArgsSchema;
