import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithoutUserInputSchema } from './transactionsUpdateWithoutUserInputSchema';
import { transactionsUncheckedUpdateWithoutUserInputSchema } from './transactionsUncheckedUpdateWithoutUserInputSchema';

export const transactionsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.transactionsUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => transactionsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => transactionsUpdateWithoutUserInputSchema),
				z.lazy(() => transactionsUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict();

export default transactionsUpdateWithWhereUniqueWithoutUserInputSchema;
