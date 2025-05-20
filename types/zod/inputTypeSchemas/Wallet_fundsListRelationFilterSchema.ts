import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereInputSchema } from './wallet_fundsWhereInputSchema';

export const Wallet_fundsListRelationFilterSchema: z.ZodType<Prisma.Wallet_fundsListRelationFilter> = z.object({
  every: z.lazy(() => wallet_fundsWhereInputSchema).optional(),
  some: z.lazy(() => wallet_fundsWhereInputSchema).optional(),
  none: z.lazy(() => wallet_fundsWhereInputSchema).optional()
}).strict();

export default Wallet_fundsListRelationFilterSchema;
