import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereInputSchema } from './scoring_pointsWhereInputSchema';
import { scoring_pointsUpdateWithoutLate_eventsInputSchema } from './scoring_pointsUpdateWithoutLate_eventsInputSchema';
import { scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema } from './scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema';

export const scoring_pointsUpdateToOneWithWhereWithoutLate_eventsInputSchema: z.ZodType<Prisma.scoring_pointsUpdateToOneWithWhereWithoutLate_eventsInput> =
	z
		.object({
			where: z.lazy(() => scoring_pointsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => scoring_pointsUpdateWithoutLate_eventsInputSchema),
				z.lazy(() => scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema),
			]),
		})
		.strict();

export default scoring_pointsUpdateToOneWithWhereWithoutLate_eventsInputSchema;
