import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesCreateWithoutCategoryInputSchema } from './menu_categories_categoriesCreateWithoutCategoryInputSchema';
import { menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema } from './menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema';
import { menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema } from './menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema';
import { menu_categories_categoriesCreateManyCategoryInputEnvelopeSchema } from './menu_categories_categoriesCreateManyCategoryInputEnvelopeSchema';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';

export const menu_categories_categoriesUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUncheckedCreateNestedManyWithoutCategoryInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menu_categories_categoriesCreateWithoutCategoryInputSchema),
					z.lazy(() => menu_categories_categoriesCreateWithoutCategoryInputSchema).array(),
					z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema),
					z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutCategoryInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema),
					z.lazy(() => menu_categories_categoriesCreateOrConnectWithoutCategoryInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => menu_categories_categoriesCreateManyCategoryInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),
					z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default menu_categories_categoriesUncheckedCreateNestedManyWithoutCategoryInputSchema;
