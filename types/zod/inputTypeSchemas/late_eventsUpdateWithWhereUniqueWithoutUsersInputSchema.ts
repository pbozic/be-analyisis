import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithoutUsersInputSchema } from './late_eventsUpdateWithoutUsersInputSchema';
import { late_eventsUncheckedUpdateWithoutUsersInputSchema } from './late_eventsUncheckedUpdateWithoutUsersInputSchema';

export const late_eventsUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.late_eventsUpdateWithWhereUniqueWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => late_eventsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => late_eventsUpdateWithoutUsersInputSchema),
				z.lazy(() => late_eventsUncheckedUpdateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default late_eventsUpdateWithWhereUniqueWithoutUsersInputSchema;
