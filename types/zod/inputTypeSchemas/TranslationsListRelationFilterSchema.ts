import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsWhereInputSchema } from './translationsWhereInputSchema';

export const TranslationsListRelationFilterSchema: z.ZodType<Prisma.TranslationsListRelationFilter> = z
	.object({
		every: z.lazy(() => translationsWhereInputSchema).optional(),
		some: z.lazy(() => translationsWhereInputSchema).optional(),
		none: z.lazy(() => translationsWhereInputSchema).optional(),
	})
	.strict();

export default TranslationsListRelationFilterSchema;
