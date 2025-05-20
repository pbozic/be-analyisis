import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesUpdateWithoutCategoriesInputSchema } from './filesUpdateWithoutCategoriesInputSchema';
import { filesUncheckedUpdateWithoutCategoriesInputSchema } from './filesUncheckedUpdateWithoutCategoriesInputSchema';
import { filesCreateWithoutCategoriesInputSchema } from './filesCreateWithoutCategoriesInputSchema';
import { filesUncheckedCreateWithoutCategoriesInputSchema } from './filesUncheckedCreateWithoutCategoriesInputSchema';
import { filesWhereInputSchema } from './filesWhereInputSchema';

export const filesUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.filesUpsertWithoutCategoriesInput> = z
	.object({
		update: z.union([
			z.lazy(() => filesUpdateWithoutCategoriesInputSchema),
			z.lazy(() => filesUncheckedUpdateWithoutCategoriesInputSchema),
		]),
		create: z.union([
			z.lazy(() => filesCreateWithoutCategoriesInputSchema),
			z.lazy(() => filesUncheckedCreateWithoutCategoriesInputSchema),
		]),
		where: z.lazy(() => filesWhereInputSchema).optional(),
	})
	.strict();

export default filesUpsertWithoutCategoriesInputSchema;
