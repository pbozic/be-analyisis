import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsCreateWithoutScoring_pointsInputSchema } from './late_eventsCreateWithoutScoring_pointsInputSchema';
import { late_eventsUncheckedCreateWithoutScoring_pointsInputSchema } from './late_eventsUncheckedCreateWithoutScoring_pointsInputSchema';

export const late_eventsCreateOrConnectWithoutScoring_pointsInputSchema: z.ZodType<Prisma.late_eventsCreateOrConnectWithoutScoring_pointsInput> =
	z
		.object({
			where: z.lazy(() => late_eventsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => late_eventsCreateWithoutScoring_pointsInputSchema),
				z.lazy(() => late_eventsUncheckedCreateWithoutScoring_pointsInputSchema),
			]),
		})
		.strict();

export default late_eventsCreateOrConnectWithoutScoring_pointsInputSchema;
