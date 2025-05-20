import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyScalarWhereInputSchema } from './flag_historyScalarWhereInputSchema';
import { flag_historyUpdateManyMutationInputSchema } from './flag_historyUpdateManyMutationInputSchema';
import { flag_historyUncheckedUpdateManyWithoutUserInputSchema } from './flag_historyUncheckedUpdateManyWithoutUserInputSchema';

export const flag_historyUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.flag_historyUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => flag_historyScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => flag_historyUpdateManyMutationInputSchema),
				z.lazy(() => flag_historyUncheckedUpdateManyWithoutUserInputSchema),
			]),
		})
		.strict();

export default flag_historyUpdateManyWithWhereWithoutUserInputSchema;
