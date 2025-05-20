import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensWhereInputSchema } from './tokensWhereInputSchema';

export const TokensListRelationFilterSchema: z.ZodType<Prisma.TokensListRelationFilter> = z.object({
  every: z.lazy(() => tokensWhereInputSchema).optional(),
  some: z.lazy(() => tokensWhereInputSchema).optional(),
  none: z.lazy(() => tokensWhereInputSchema).optional()
}).strict();

export default TokensListRelationFilterSchema;
