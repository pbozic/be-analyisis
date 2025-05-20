import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesScalarWhereInputSchema } from './menu_categoriesScalarWhereInputSchema';
import { menu_categoriesUpdateManyMutationInputSchema } from './menu_categoriesUpdateManyMutationInputSchema';
import { menu_categoriesUncheckedUpdateManyWithoutMenuInputSchema } from './menu_categoriesUncheckedUpdateManyWithoutMenuInputSchema';

export const menu_categoriesUpdateManyWithWhereWithoutMenuInputSchema: z.ZodType<Prisma.menu_categoriesUpdateManyWithWhereWithoutMenuInput> =
	z
		.object({
			where: z.lazy(() => menu_categoriesScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => menu_categoriesUpdateManyMutationInputSchema),
				z.lazy(() => menu_categoriesUncheckedUpdateManyWithoutMenuInputSchema),
			]),
		})
		.strict();

export default menu_categoriesUpdateManyWithWhereWithoutMenuInputSchema;
