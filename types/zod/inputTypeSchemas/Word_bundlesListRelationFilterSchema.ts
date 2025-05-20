import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesWhereInputSchema } from './word_bundlesWhereInputSchema';

export const Word_bundlesListRelationFilterSchema: z.ZodType<Prisma.Word_bundlesListRelationFilter> = z
	.object({
		every: z.lazy(() => word_bundlesWhereInputSchema).optional(),
		some: z.lazy(() => word_bundlesWhereInputSchema).optional(),
		none: z.lazy(() => word_bundlesWhereInputSchema).optional(),
	})
	.strict();

export default Word_bundlesListRelationFilterSchema;
