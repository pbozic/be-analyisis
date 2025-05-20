import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesWhereInputSchema } from './local_pricesWhereInputSchema';

export const Local_pricesListRelationFilterSchema: z.ZodType<Prisma.Local_pricesListRelationFilter> = z
	.object({
		every: z.lazy(() => local_pricesWhereInputSchema).optional(),
		some: z.lazy(() => local_pricesWhereInputSchema).optional(),
		none: z.lazy(() => local_pricesWhereInputSchema).optional(),
	})
	.strict();

export default Local_pricesListRelationFilterSchema;
