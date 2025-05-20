import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusCreateWithoutCategoriesInputSchema } from './menusCreateWithoutCategoriesInputSchema';
import { menusUncheckedCreateWithoutCategoriesInputSchema } from './menusUncheckedCreateWithoutCategoriesInputSchema';
import { menusCreateOrConnectWithoutCategoriesInputSchema } from './menusCreateOrConnectWithoutCategoriesInputSchema';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';

export const menusCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.menusCreateNestedOneWithoutCategoriesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menusCreateWithoutCategoriesInputSchema),
					z.lazy(() => menusUncheckedCreateWithoutCategoriesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => menusCreateOrConnectWithoutCategoriesInputSchema).optional(),
			connect: z.lazy(() => menusWhereUniqueInputSchema).optional(),
		})
		.strict();

export default menusCreateNestedOneWithoutCategoriesInputSchema;
