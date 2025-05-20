import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wallet_fundsSelectSchema } from '../inputTypeSchemas/wallet_fundsSelectSchema';
import { wallet_fundsIncludeSchema } from '../inputTypeSchemas/wallet_fundsIncludeSchema';

export const wallet_fundsArgsSchema: z.ZodType<Prisma.wallet_fundsDefaultArgs> = z.object({
  select: z.lazy(() => wallet_fundsSelectSchema).optional(),
  include: z.lazy(() => wallet_fundsIncludeSchema).optional(),
}).strict();

export default wallet_fundsArgsSchema;
