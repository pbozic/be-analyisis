import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsWhereUniqueInputSchema } from './flagsWhereUniqueInputSchema';
import { flagsCreateWithoutHistoryInputSchema } from './flagsCreateWithoutHistoryInputSchema';
import { flagsUncheckedCreateWithoutHistoryInputSchema } from './flagsUncheckedCreateWithoutHistoryInputSchema';

export const flagsCreateOrConnectWithoutHistoryInputSchema: z.ZodType<Prisma.flagsCreateOrConnectWithoutHistoryInput> =
	z
		.object({
			where: z.lazy(() => flagsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => flagsCreateWithoutHistoryInputSchema),
				z.lazy(() => flagsUncheckedCreateWithoutHistoryInputSchema),
			]),
		})
		.strict();

export default flagsCreateOrConnectWithoutHistoryInputSchema;
