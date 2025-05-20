import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutScoring_pointsInputSchema } from './businessCreateWithoutScoring_pointsInputSchema';
import { businessUncheckedCreateWithoutScoring_pointsInputSchema } from './businessUncheckedCreateWithoutScoring_pointsInputSchema';

export const businessCreateOrConnectWithoutScoring_pointsInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutScoring_pointsInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => businessCreateWithoutScoring_pointsInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutScoring_pointsInputSchema),
			]),
		})
		.strict();

export default businessCreateOrConnectWithoutScoring_pointsInputSchema;
