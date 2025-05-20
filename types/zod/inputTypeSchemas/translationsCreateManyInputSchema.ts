import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const translationsCreateManyInputSchema: z.ZodType<Prisma.translationsCreateManyInput> = z
	.object({
		translations_id: z.string().uuid().optional(),
		translatable_id: z.string(),
		field: z.string().optional().nullable(),
		language: z.string(),
		translation: z.string(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default translationsCreateManyInputSchema;
