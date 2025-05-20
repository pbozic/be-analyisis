import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutBusinessesInputSchema } from './late_eventsUpdateWithoutBusinessesInputSchema';
import { late_eventsUncheckedUpdateWithoutBusinessesInputSchema } from './late_eventsUncheckedUpdateWithoutBusinessesInputSchema';

export const late_eventsUpdateWithWhereUniqueWithoutBusinessesInputSchema: z.ZodType<Prisma.late_eventsUpdateWithWhereUniqueWithoutBusinessesInput> =
	z
		.object({
			where: z.lazy(() => late_eventsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => late_eventsUpdateWithoutBusinessesInputSchema),
				z.lazy(() => late_eventsUncheckedUpdateWithoutBusinessesInputSchema),
			]),
		})
		.strict();

export default late_eventsUpdateWithWhereUniqueWithoutBusinessesInputSchema;
