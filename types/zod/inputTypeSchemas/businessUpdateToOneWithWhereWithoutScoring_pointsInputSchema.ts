import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutScoring_pointsInputSchema } from './businessUpdateWithoutScoring_pointsInputSchema';
import { businessUncheckedUpdateWithoutScoring_pointsInputSchema } from './businessUncheckedUpdateWithoutScoring_pointsInputSchema';

export const businessUpdateToOneWithWhereWithoutScoring_pointsInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutScoring_pointsInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutScoring_pointsInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutScoring_pointsInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutScoring_pointsInputSchema;
