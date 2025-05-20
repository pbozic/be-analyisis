import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categories_categoriesCreateWithoutMenu_categoryInputSchema } from './menu_categories_categoriesCreateWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema } from './menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema } from './menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema';
import { menu_categories_categoriesCreateManyMenu_categoryInputEnvelopeSchema } from './menu_categories_categoriesCreateManyMenu_categoryInputEnvelopeSchema';
import { menu_categories_categoriesWhereUniqueInputSchema } from './menu_categories_categoriesWhereUniqueInputSchema';

export const menu_categories_categoriesUncheckedCreateNestedManyWithoutMenu_categoryInputSchema: z.ZodType<Prisma.menu_categories_categoriesUncheckedCreateNestedManyWithoutMenu_categoryInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menu_categories_categoriesCreateWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_categories_categoriesCreateWithoutMenu_categoryInputSchema).array(),
					z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_categories_categoriesUncheckedCreateWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema),
					z.lazy(() => menu_categories_categoriesCreateOrConnectWithoutMenu_categoryInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => menu_categories_categoriesCreateManyMenu_categoryInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema),
					z.lazy(() => menu_categories_categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default menu_categories_categoriesUncheckedCreateNestedManyWithoutMenu_categoryInputSchema;
