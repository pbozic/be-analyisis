import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutMenu_categoriesInputSchema } from './categoriesCreateWithoutMenu_categoriesInputSchema';
import { categoriesUncheckedCreateWithoutMenu_categoriesInputSchema } from './categoriesUncheckedCreateWithoutMenu_categoriesInputSchema';
import { categoriesCreateOrConnectWithoutMenu_categoriesInputSchema } from './categoriesCreateOrConnectWithoutMenu_categoriesInputSchema';
import { categoriesUpsertWithoutMenu_categoriesInputSchema } from './categoriesUpsertWithoutMenu_categoriesInputSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateToOneWithWhereWithoutMenu_categoriesInputSchema } from './categoriesUpdateToOneWithWhereWithoutMenu_categoriesInputSchema';
import { categoriesUpdateWithoutMenu_categoriesInputSchema } from './categoriesUpdateWithoutMenu_categoriesInputSchema';
import { categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema } from './categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema';

export const categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInputSchema: z.ZodType<Prisma.categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutMenu_categoriesInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutMenu_categoriesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutMenu_categoriesInputSchema).optional(),
			upsert: z.lazy(() => categoriesUpsertWithoutMenu_categoriesInputSchema).optional(),
			connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => categoriesUpdateToOneWithWhereWithoutMenu_categoriesInputSchema),
					z.lazy(() => categoriesUpdateWithoutMenu_categoriesInputSchema),
					z.lazy(() => categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema),
				])
				.optional(),
		})
		.strict();

export default categoriesUpdateOneRequiredWithoutMenu_categoriesNestedInputSchema;
