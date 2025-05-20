import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutPromo_sectionsInputSchema } from './businessCreateWithoutPromo_sectionsInputSchema';
import { businessUncheckedCreateWithoutPromo_sectionsInputSchema } from './businessUncheckedCreateWithoutPromo_sectionsInputSchema';

export const businessCreateOrConnectWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutPromo_sectionsInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => businessCreateWithoutPromo_sectionsInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutPromo_sectionsInputSchema),
			]),
		})
		.strict();

export default businessCreateOrConnectWithoutPromo_sectionsInputSchema;
