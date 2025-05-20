import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';
import { flag_historyUpdateWithoutFlagInputSchema } from './flag_historyUpdateWithoutFlagInputSchema';
import { flag_historyUncheckedUpdateWithoutFlagInputSchema } from './flag_historyUncheckedUpdateWithoutFlagInputSchema';
import { flag_historyCreateWithoutFlagInputSchema } from './flag_historyCreateWithoutFlagInputSchema';
import { flag_historyUncheckedCreateWithoutFlagInputSchema } from './flag_historyUncheckedCreateWithoutFlagInputSchema';

export const flag_historyUpsertWithWhereUniqueWithoutFlagInputSchema: z.ZodType<Prisma.flag_historyUpsertWithWhereUniqueWithoutFlagInput> =
	z
		.object({
			where: z.lazy(() => flag_historyWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => flag_historyUpdateWithoutFlagInputSchema),
				z.lazy(() => flag_historyUncheckedUpdateWithoutFlagInputSchema),
			]),
			create: z.union([
				z.lazy(() => flag_historyCreateWithoutFlagInputSchema),
				z.lazy(() => flag_historyUncheckedCreateWithoutFlagInputSchema),
			]),
		})
		.strict();

export default flag_historyUpsertWithWhereUniqueWithoutFlagInputSchema;
