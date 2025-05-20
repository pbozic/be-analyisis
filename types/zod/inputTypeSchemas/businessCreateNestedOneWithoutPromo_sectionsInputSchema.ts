import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutPromo_sectionsInputSchema } from './businessCreateWithoutPromo_sectionsInputSchema';
import { businessUncheckedCreateWithoutPromo_sectionsInputSchema } from './businessUncheckedCreateWithoutPromo_sectionsInputSchema';
import { businessCreateOrConnectWithoutPromo_sectionsInputSchema } from './businessCreateOrConnectWithoutPromo_sectionsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutPromo_sectionsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutPromo_sectionsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutPromo_sectionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutPromo_sectionsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutPromo_sectionsInputSchema;
