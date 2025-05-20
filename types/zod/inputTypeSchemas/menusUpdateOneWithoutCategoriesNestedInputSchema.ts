import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusCreateWithoutCategoriesInputSchema } from './menusCreateWithoutCategoriesInputSchema';
import { menusUncheckedCreateWithoutCategoriesInputSchema } from './menusUncheckedCreateWithoutCategoriesInputSchema';
import { menusCreateOrConnectWithoutCategoriesInputSchema } from './menusCreateOrConnectWithoutCategoriesInputSchema';
import { menusUpsertWithoutCategoriesInputSchema } from './menusUpsertWithoutCategoriesInputSchema';
import { menusWhereInputSchema } from './menusWhereInputSchema';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';
import { menusUpdateToOneWithWhereWithoutCategoriesInputSchema } from './menusUpdateToOneWithWhereWithoutCategoriesInputSchema';
import { menusUpdateWithoutCategoriesInputSchema } from './menusUpdateWithoutCategoriesInputSchema';
import { menusUncheckedUpdateWithoutCategoriesInputSchema } from './menusUncheckedUpdateWithoutCategoriesInputSchema';

export const menusUpdateOneWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.menusUpdateOneWithoutCategoriesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menusCreateWithoutCategoriesInputSchema),
					z.lazy(() => menusUncheckedCreateWithoutCategoriesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => menusCreateOrConnectWithoutCategoriesInputSchema).optional(),
			upsert: z.lazy(() => menusUpsertWithoutCategoriesInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => menusWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => menusWhereInputSchema)]).optional(),
			connect: z.lazy(() => menusWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => menusUpdateToOneWithWhereWithoutCategoriesInputSchema),
					z.lazy(() => menusUpdateWithoutCategoriesInputSchema),
					z.lazy(() => menusUncheckedUpdateWithoutCategoriesInputSchema),
				])
				.optional(),
		})
		.strict();

export default menusUpdateOneWithoutCategoriesNestedInputSchema;
