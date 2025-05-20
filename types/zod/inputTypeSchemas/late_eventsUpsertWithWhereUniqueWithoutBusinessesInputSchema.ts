import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutBusinessesInputSchema } from './late_eventsUpdateWithoutBusinessesInputSchema';
import { late_eventsUncheckedUpdateWithoutBusinessesInputSchema } from './late_eventsUncheckedUpdateWithoutBusinessesInputSchema';
import { late_eventsCreateWithoutBusinessesInputSchema } from './late_eventsCreateWithoutBusinessesInputSchema';
import { late_eventsUncheckedCreateWithoutBusinessesInputSchema } from './late_eventsUncheckedCreateWithoutBusinessesInputSchema';

export const late_eventsUpsertWithWhereUniqueWithoutBusinessesInputSchema: z.ZodType<Prisma.late_eventsUpsertWithWhereUniqueWithoutBusinessesInput> =
	z
		.object({
			where: z.lazy(() => late_eventsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => late_eventsUpdateWithoutBusinessesInputSchema),
				z.lazy(() => late_eventsUncheckedUpdateWithoutBusinessesInputSchema),
			]),
			create: z.union([
				z.lazy(() => late_eventsCreateWithoutBusinessesInputSchema),
				z.lazy(() => late_eventsUncheckedCreateWithoutBusinessesInputSchema),
			]),
		})
		.strict();

export default late_eventsUpsertWithWhereUniqueWithoutBusinessesInputSchema;
