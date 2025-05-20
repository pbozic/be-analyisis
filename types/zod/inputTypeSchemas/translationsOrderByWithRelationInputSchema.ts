import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { translatableOrderByWithRelationInputSchema } from './translatableOrderByWithRelationInputSchema';

export const translationsOrderByWithRelationInputSchema: z.ZodType<Prisma.translationsOrderByWithRelationInput> = z
	.object({
		translations_id: z.lazy(() => SortOrderSchema).optional(),
		translatable_id: z.lazy(() => SortOrderSchema).optional(),
		field: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		language: z.lazy(() => SortOrderSchema).optional(),
		translation: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		translatable: z.lazy(() => translatableOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default translationsOrderByWithRelationInputSchema;
