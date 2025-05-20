import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_transfer_historyCreateManyInputSchema } from '../inputTypeSchemas/wallet_transfer_historyCreateManyInputSchema'

export const wallet_transfer_historyCreateManyArgsSchema: z.ZodType<Prisma.wallet_transfer_historyCreateManyArgs> = z.object({
  data: z.union([ wallet_transfer_historyCreateManyInputSchema,wallet_transfer_historyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default wallet_transfer_historyCreateManyArgsSchema;
