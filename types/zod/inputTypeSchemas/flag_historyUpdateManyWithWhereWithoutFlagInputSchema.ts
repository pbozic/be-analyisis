import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyScalarWhereInputSchema } from './flag_historyScalarWhereInputSchema';
import { flag_historyUpdateManyMutationInputSchema } from './flag_historyUpdateManyMutationInputSchema';
import { flag_historyUncheckedUpdateManyWithoutFlagInputSchema } from './flag_historyUncheckedUpdateManyWithoutFlagInputSchema';

export const flag_historyUpdateManyWithWhereWithoutFlagInputSchema: z.ZodType<Prisma.flag_historyUpdateManyWithWhereWithoutFlagInput> =
	z
		.object({
			where: z.lazy(() => flag_historyScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => flag_historyUpdateManyMutationInputSchema),
				z.lazy(() => flag_historyUncheckedUpdateManyWithoutFlagInputSchema),
			]),
		})
		.strict();

export default flag_historyUpdateManyWithWhereWithoutFlagInputSchema;
