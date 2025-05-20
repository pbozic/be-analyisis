import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutPromo_sectionsInputSchema } from './businessUpdateWithoutPromo_sectionsInputSchema';
import { businessUncheckedUpdateWithoutPromo_sectionsInputSchema } from './businessUncheckedUpdateWithoutPromo_sectionsInputSchema';
import { businessCreateWithoutPromo_sectionsInputSchema } from './businessCreateWithoutPromo_sectionsInputSchema';
import { businessUncheckedCreateWithoutPromo_sectionsInputSchema } from './businessUncheckedCreateWithoutPromo_sectionsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.businessUpsertWithoutPromo_sectionsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => businessUpdateWithoutPromo_sectionsInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutPromo_sectionsInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutPromo_sectionsInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutPromo_sectionsInputSchema),
			]),
			where: z.lazy(() => businessWhereInputSchema).optional(),
		})
		.strict();

export default businessUpsertWithoutPromo_sectionsInputSchema;
