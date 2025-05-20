import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsWhereInputSchema } from './wallet_fundsWhereInputSchema';

export const Wallet_fundsNullableRelationFilterSchema: z.ZodType<Prisma.Wallet_fundsNullableRelationFilter> = z.object({
  is: z.lazy(() => wallet_fundsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => wallet_fundsWhereInputSchema).optional().nullable()
}).strict();

export default Wallet_fundsNullableRelationFilterSchema;
