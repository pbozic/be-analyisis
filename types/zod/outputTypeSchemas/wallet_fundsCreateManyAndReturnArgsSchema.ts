import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_fundsCreateManyInputSchema } from '../inputTypeSchemas/wallet_fundsCreateManyInputSchema'

export const wallet_fundsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.wallet_fundsCreateManyAndReturnArgs> = z.object({
  data: z.union([ wallet_fundsCreateManyInputSchema,wallet_fundsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default wallet_fundsCreateManyAndReturnArgsSchema;
