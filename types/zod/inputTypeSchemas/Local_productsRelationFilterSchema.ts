import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';

export const Local_productsRelationFilterSchema: z.ZodType<Prisma.Local_productsRelationFilter> = z
	.object({
		is: z.lazy(() => local_productsWhereInputSchema).optional(),
		isNot: z.lazy(() => local_productsWhereInputSchema).optional(),
	})
	.strict();

export default Local_productsRelationFilterSchema;
