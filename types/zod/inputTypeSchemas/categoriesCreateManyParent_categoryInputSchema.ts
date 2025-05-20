import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';

export const categoriesCreateManyParent_categoryInputSchema: z.ZodType<Prisma.categoriesCreateManyParent_categoryInput> =
	z
		.object({
			categories_id: z.string().uuid().optional(),
			name: z.string(),
			description: z.string().optional().nullable(),
			tag: z.string(),
			icon_file_id: z.string().optional().nullable(),
			category_type: z.lazy(() => CATEGORY_TYPESchema),
			translatable_id: z.string(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			deleted_at: z.coerce.date().optional().nullable(),
		})
		.strict();

export default categoriesCreateManyParent_categoryInputSchema;
