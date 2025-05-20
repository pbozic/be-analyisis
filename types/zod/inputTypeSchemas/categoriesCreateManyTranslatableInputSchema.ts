import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';

export const categoriesCreateManyTranslatableInputSchema: z.ZodType<Prisma.categoriesCreateManyTranslatableInput> = z
	.object({
		categories_id: z.string().uuid().optional(),
		name: z.string(),
		description: z.string().optional().nullable(),
		tag: z.string(),
		icon_file_id: z.string().optional().nullable(),
		category_type: z.lazy(() => CATEGORY_TYPESchema),
		parent_categories_id: z.string().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		deleted_at: z.coerce.date().optional().nullable(),
	})
	.strict();

export default categoriesCreateManyTranslatableInputSchema;
