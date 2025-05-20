import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutReviewableInputSchema } from './businessUpdateWithoutReviewableInputSchema';
import { businessUncheckedUpdateWithoutReviewableInputSchema } from './businessUncheckedUpdateWithoutReviewableInputSchema';
import { businessCreateWithoutReviewableInputSchema } from './businessCreateWithoutReviewableInputSchema';
import { businessUncheckedCreateWithoutReviewableInputSchema } from './businessUncheckedCreateWithoutReviewableInputSchema';

export const businessUpsertWithWhereUniqueWithoutReviewableInputSchema: z.ZodType<Prisma.businessUpsertWithWhereUniqueWithoutReviewableInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => businessUpdateWithoutReviewableInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutReviewableInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutReviewableInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutReviewableInputSchema),
			]),
		})
		.strict();

export default businessUpsertWithWhereUniqueWithoutReviewableInputSchema;
