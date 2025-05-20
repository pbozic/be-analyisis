import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsWhereUniqueInputSchema } from './driver_activity_logsWhereUniqueInputSchema';
import { driver_activity_logsCreateWithoutDriverInputSchema } from './driver_activity_logsCreateWithoutDriverInputSchema';
import { driver_activity_logsUncheckedCreateWithoutDriverInputSchema } from './driver_activity_logsUncheckedCreateWithoutDriverInputSchema';

export const driver_activity_logsCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.driver_activity_logsCreateOrConnectWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => driver_activity_logsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driver_activity_logsCreateWithoutDriverInputSchema),
				z.lazy(() => driver_activity_logsUncheckedCreateWithoutDriverInputSchema),
			]),
		})
		.strict();

export default driver_activity_logsCreateOrConnectWithoutDriverInputSchema;
