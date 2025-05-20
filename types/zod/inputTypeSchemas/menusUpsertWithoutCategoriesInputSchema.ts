import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusUpdateWithoutCategoriesInputSchema } from './menusUpdateWithoutCategoriesInputSchema';
import { menusUncheckedUpdateWithoutCategoriesInputSchema } from './menusUncheckedUpdateWithoutCategoriesInputSchema';
import { menusCreateWithoutCategoriesInputSchema } from './menusCreateWithoutCategoriesInputSchema';
import { menusUncheckedCreateWithoutCategoriesInputSchema } from './menusUncheckedCreateWithoutCategoriesInputSchema';
import { menusWhereInputSchema } from './menusWhereInputSchema';

export const menusUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.menusUpsertWithoutCategoriesInput> = z
	.object({
		update: z.union([
			z.lazy(() => menusUpdateWithoutCategoriesInputSchema),
			z.lazy(() => menusUncheckedUpdateWithoutCategoriesInputSchema),
		]),
		create: z.union([
			z.lazy(() => menusCreateWithoutCategoriesInputSchema),
			z.lazy(() => menusUncheckedCreateWithoutCategoriesInputSchema),
		]),
		where: z.lazy(() => menusWhereInputSchema).optional(),
	})
	.strict();

export default menusUpsertWithoutCategoriesInputSchema;
