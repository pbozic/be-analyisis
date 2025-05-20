import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsCreateWithoutUsersInputSchema } from './late_eventsCreateWithoutUsersInputSchema';
import { late_eventsUncheckedCreateWithoutUsersInputSchema } from './late_eventsUncheckedCreateWithoutUsersInputSchema';

export const late_eventsCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.late_eventsCreateOrConnectWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => late_eventsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => late_eventsCreateWithoutUsersInputSchema),
				z.lazy(() => late_eventsUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default late_eventsCreateOrConnectWithoutUsersInputSchema;
