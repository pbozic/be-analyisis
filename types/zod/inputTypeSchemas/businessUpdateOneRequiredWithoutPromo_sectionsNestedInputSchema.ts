import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutPromo_sectionsInputSchema } from './businessCreateWithoutPromo_sectionsInputSchema';
import { businessUncheckedCreateWithoutPromo_sectionsInputSchema } from './businessUncheckedCreateWithoutPromo_sectionsInputSchema';
import { businessCreateOrConnectWithoutPromo_sectionsInputSchema } from './businessCreateOrConnectWithoutPromo_sectionsInputSchema';
import { businessUpsertWithoutPromo_sectionsInputSchema } from './businessUpsertWithoutPromo_sectionsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutPromo_sectionsInputSchema } from './businessUpdateToOneWithWhereWithoutPromo_sectionsInputSchema';
import { businessUpdateWithoutPromo_sectionsInputSchema } from './businessUpdateWithoutPromo_sectionsInputSchema';
import { businessUncheckedUpdateWithoutPromo_sectionsInputSchema } from './businessUncheckedUpdateWithoutPromo_sectionsInputSchema';

export const businessUpdateOneRequiredWithoutPromo_sectionsNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutPromo_sectionsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutPromo_sectionsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutPromo_sectionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutPromo_sectionsInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutPromo_sectionsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutPromo_sectionsInputSchema),
					z.lazy(() => businessUpdateWithoutPromo_sectionsInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutPromo_sectionsInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneRequiredWithoutPromo_sectionsNestedInputSchema;
