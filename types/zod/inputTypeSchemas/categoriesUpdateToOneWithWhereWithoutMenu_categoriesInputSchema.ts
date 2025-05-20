import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';
import { categoriesUpdateWithoutMenu_categoriesInputSchema } from './categoriesUpdateWithoutMenu_categoriesInputSchema';
import { categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema } from './categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema';

export const categoriesUpdateToOneWithWhereWithoutMenu_categoriesInputSchema: z.ZodType<Prisma.categoriesUpdateToOneWithWhereWithoutMenu_categoriesInput> =
	z
		.object({
			where: z.lazy(() => categoriesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => categoriesUpdateWithoutMenu_categoriesInputSchema),
				z.lazy(() => categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema),
			]),
		})
		.strict();

export default categoriesUpdateToOneWithWhereWithoutMenu_categoriesInputSchema;
