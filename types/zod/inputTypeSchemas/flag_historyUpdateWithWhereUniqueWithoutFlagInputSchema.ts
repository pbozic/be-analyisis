import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';
import { flag_historyUpdateWithoutFlagInputSchema } from './flag_historyUpdateWithoutFlagInputSchema';
import { flag_historyUncheckedUpdateWithoutFlagInputSchema } from './flag_historyUncheckedUpdateWithoutFlagInputSchema';

export const flag_historyUpdateWithWhereUniqueWithoutFlagInputSchema: z.ZodType<Prisma.flag_historyUpdateWithWhereUniqueWithoutFlagInput> =
	z
		.object({
			where: z.lazy(() => flag_historyWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => flag_historyUpdateWithoutFlagInputSchema),
				z.lazy(() => flag_historyUncheckedUpdateWithoutFlagInputSchema),
			]),
		})
		.strict();

export default flag_historyUpdateWithWhereUniqueWithoutFlagInputSchema;
