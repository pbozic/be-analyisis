import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';
import { late_eventsUpdateManyMutationInputSchema } from './late_eventsUpdateManyMutationInputSchema';
import { late_eventsUncheckedUpdateManyWithoutScoring_pointsInputSchema } from './late_eventsUncheckedUpdateManyWithoutScoring_pointsInputSchema';

export const late_eventsUpdateManyWithWhereWithoutScoring_pointsInputSchema: z.ZodType<Prisma.late_eventsUpdateManyWithWhereWithoutScoring_pointsInput> =
	z
		.object({
			where: z.lazy(() => late_eventsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => late_eventsUpdateManyMutationInputSchema),
				z.lazy(() => late_eventsUncheckedUpdateManyWithoutScoring_pointsInputSchema),
			]),
		})
		.strict();

export default late_eventsUpdateManyWithWhereWithoutScoring_pointsInputSchema;
