import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsUpdateWithoutHistoryInputSchema } from './flagsUpdateWithoutHistoryInputSchema';
import { flagsUncheckedUpdateWithoutHistoryInputSchema } from './flagsUncheckedUpdateWithoutHistoryInputSchema';
import { flagsCreateWithoutHistoryInputSchema } from './flagsCreateWithoutHistoryInputSchema';
import { flagsUncheckedCreateWithoutHistoryInputSchema } from './flagsUncheckedCreateWithoutHistoryInputSchema';
import { flagsWhereInputSchema } from './flagsWhereInputSchema';

export const flagsUpsertWithoutHistoryInputSchema: z.ZodType<Prisma.flagsUpsertWithoutHistoryInput> = z
	.object({
		update: z.union([
			z.lazy(() => flagsUpdateWithoutHistoryInputSchema),
			z.lazy(() => flagsUncheckedUpdateWithoutHistoryInputSchema),
		]),
		create: z.union([
			z.lazy(() => flagsCreateWithoutHistoryInputSchema),
			z.lazy(() => flagsUncheckedCreateWithoutHistoryInputSchema),
		]),
		where: z.lazy(() => flagsWhereInputSchema).optional(),
	})
	.strict();

export default flagsUpsertWithoutHistoryInputSchema;
