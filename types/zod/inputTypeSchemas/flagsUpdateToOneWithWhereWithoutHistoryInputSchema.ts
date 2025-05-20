import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsWhereInputSchema } from './flagsWhereInputSchema';
import { flagsUpdateWithoutHistoryInputSchema } from './flagsUpdateWithoutHistoryInputSchema';
import { flagsUncheckedUpdateWithoutHistoryInputSchema } from './flagsUncheckedUpdateWithoutHistoryInputSchema';

export const flagsUpdateToOneWithWhereWithoutHistoryInputSchema: z.ZodType<Prisma.flagsUpdateToOneWithWhereWithoutHistoryInput> =
	z
		.object({
			where: z.lazy(() => flagsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => flagsUpdateWithoutHistoryInputSchema),
				z.lazy(() => flagsUncheckedUpdateWithoutHistoryInputSchema),
			]),
		})
		.strict();

export default flagsUpdateToOneWithWhereWithoutHistoryInputSchema;
