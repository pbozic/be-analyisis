import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_fundsWhereInputSchema } from '../inputTypeSchemas/wallet_fundsWhereInputSchema'

export const wallet_fundsDeleteManyArgsSchema: z.ZodType<Prisma.wallet_fundsDeleteManyArgs> = z.object({
  where: wallet_fundsWhereInputSchema.optional(),
}).strict() ;

export default wallet_fundsDeleteManyArgsSchema;
