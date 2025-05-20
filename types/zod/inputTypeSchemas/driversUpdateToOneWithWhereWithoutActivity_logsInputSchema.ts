import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutActivity_logsInputSchema } from './driversUpdateWithoutActivity_logsInputSchema';
import { driversUncheckedUpdateWithoutActivity_logsInputSchema } from './driversUncheckedUpdateWithoutActivity_logsInputSchema';

export const driversUpdateToOneWithWhereWithoutActivity_logsInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutActivity_logsInput> =
	z
		.object({
			where: z.lazy(() => driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => driversUpdateWithoutActivity_logsInputSchema),
				z.lazy(() => driversUncheckedUpdateWithoutActivity_logsInputSchema),
			]),
		})
		.strict();

export default driversUpdateToOneWithWhereWithoutActivity_logsInputSchema;
