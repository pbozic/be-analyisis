import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableUpdateWithoutPromo_sectionsInputSchema } from './translatableUpdateWithoutPromo_sectionsInputSchema';
import { translatableUncheckedUpdateWithoutPromo_sectionsInputSchema } from './translatableUncheckedUpdateWithoutPromo_sectionsInputSchema';
import { translatableCreateWithoutPromo_sectionsInputSchema } from './translatableCreateWithoutPromo_sectionsInputSchema';
import { translatableUncheckedCreateWithoutPromo_sectionsInputSchema } from './translatableUncheckedCreateWithoutPromo_sectionsInputSchema';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';

export const translatableUpsertWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.translatableUpsertWithoutPromo_sectionsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => translatableUpdateWithoutPromo_sectionsInputSchema),
				z.lazy(() => translatableUncheckedUpdateWithoutPromo_sectionsInputSchema),
			]),
			create: z.union([
				z.lazy(() => translatableCreateWithoutPromo_sectionsInputSchema),
				z.lazy(() => translatableUncheckedCreateWithoutPromo_sectionsInputSchema),
			]),
			where: z.lazy(() => translatableWhereInputSchema).optional(),
		})
		.strict();

export default translatableUpsertWithoutPromo_sectionsInputSchema;
