import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableUpdateWithoutTranslationsInputSchema } from './translatableUpdateWithoutTranslationsInputSchema';
import { translatableUncheckedUpdateWithoutTranslationsInputSchema } from './translatableUncheckedUpdateWithoutTranslationsInputSchema';
import { translatableCreateWithoutTranslationsInputSchema } from './translatableCreateWithoutTranslationsInputSchema';
import { translatableUncheckedCreateWithoutTranslationsInputSchema } from './translatableUncheckedCreateWithoutTranslationsInputSchema';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';

export const translatableUpsertWithoutTranslationsInputSchema: z.ZodType<Prisma.translatableUpsertWithoutTranslationsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => translatableUpdateWithoutTranslationsInputSchema),
				z.lazy(() => translatableUncheckedUpdateWithoutTranslationsInputSchema),
			]),
			create: z.union([
				z.lazy(() => translatableCreateWithoutTranslationsInputSchema),
				z.lazy(() => translatableUncheckedCreateWithoutTranslationsInputSchema),
			]),
			where: z.lazy(() => translatableWhereInputSchema).optional(),
		})
		.strict();

export default translatableUpsertWithoutTranslationsInputSchema;
