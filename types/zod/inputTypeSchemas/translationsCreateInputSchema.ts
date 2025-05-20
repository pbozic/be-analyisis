import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateNestedOneWithoutTranslationsInputSchema } from './translatableCreateNestedOneWithoutTranslationsInputSchema';

export const translationsCreateInputSchema: z.ZodType<Prisma.translationsCreateInput> = z
	.object({
		translations_id: z.string().uuid().optional(),
		field: z.string().optional().nullable(),
		language: z.string(),
		translation: z.string(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		translatable: z.lazy(() => translatableCreateNestedOneWithoutTranslationsInputSchema),
	})
	.strict();

export default translationsCreateInputSchema;
