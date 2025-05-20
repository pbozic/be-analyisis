import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutActivity_logsInputSchema } from './driversUpdateWithoutActivity_logsInputSchema';
import { driversUncheckedUpdateWithoutActivity_logsInputSchema } from './driversUncheckedUpdateWithoutActivity_logsInputSchema';
import { driversCreateWithoutActivity_logsInputSchema } from './driversCreateWithoutActivity_logsInputSchema';
import { driversUncheckedCreateWithoutActivity_logsInputSchema } from './driversUncheckedCreateWithoutActivity_logsInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutActivity_logsInputSchema: z.ZodType<Prisma.driversUpsertWithoutActivity_logsInput> = z
	.object({
		update: z.union([
			z.lazy(() => driversUpdateWithoutActivity_logsInputSchema),
			z.lazy(() => driversUncheckedUpdateWithoutActivity_logsInputSchema),
		]),
		create: z.union([
			z.lazy(() => driversCreateWithoutActivity_logsInputSchema),
			z.lazy(() => driversUncheckedCreateWithoutActivity_logsInputSchema),
		]),
		where: z.lazy(() => driversWhereInputSchema).optional(),
	})
	.strict();

export default driversUpsertWithoutActivity_logsInputSchema;
