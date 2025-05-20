import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';

export const categoriesTagCategory_typeCompoundUniqueInputSchema: z.ZodType<Prisma.categoriesTagCategory_typeCompoundUniqueInput> =
	z
		.object({
			tag: z.string(),
			category_type: z.lazy(() => CATEGORY_TYPESchema),
		})
		.strict();

export default categoriesTagCategory_typeCompoundUniqueInputSchema;
