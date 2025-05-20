import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithoutTranslatableInputSchema } from './categoriesUpdateWithoutTranslatableInputSchema';
import { categoriesUncheckedUpdateWithoutTranslatableInputSchema } from './categoriesUncheckedUpdateWithoutTranslatableInputSchema';
import { categoriesCreateWithoutTranslatableInputSchema } from './categoriesCreateWithoutTranslatableInputSchema';
import { categoriesUncheckedCreateWithoutTranslatableInputSchema } from './categoriesUncheckedCreateWithoutTranslatableInputSchema';

export const categoriesUpsertWithWhereUniqueWithoutTranslatableInputSchema: z.ZodType<Prisma.categoriesUpsertWithWhereUniqueWithoutTranslatableInput> =
	z
		.object({
			where: z.lazy(() => categoriesWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => categoriesUpdateWithoutTranslatableInputSchema),
				z.lazy(() => categoriesUncheckedUpdateWithoutTranslatableInputSchema),
			]),
			create: z.union([
				z.lazy(() => categoriesCreateWithoutTranslatableInputSchema),
				z.lazy(() => categoriesUncheckedCreateWithoutTranslatableInputSchema),
			]),
		})
		.strict();

export default categoriesUpsertWithWhereUniqueWithoutTranslatableInputSchema;
