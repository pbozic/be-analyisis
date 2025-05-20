import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const translationsCreateManyTranslatableInputSchema: z.ZodType<Prisma.translationsCreateManyTranslatableInput> =
	z
		.object({
			translations_id: z.string().uuid().optional(),
			field: z.string().optional().nullable(),
			language: z.string(),
			translation: z.string(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default translationsCreateManyTranslatableInputSchema;
