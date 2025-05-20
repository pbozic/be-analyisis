import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithoutUserInputSchema } from './transactionsUpdateWithoutUserInputSchema';
import { transactionsUncheckedUpdateWithoutUserInputSchema } from './transactionsUncheckedUpdateWithoutUserInputSchema';
import { transactionsCreateWithoutUserInputSchema } from './transactionsCreateWithoutUserInputSchema';
import { transactionsUncheckedCreateWithoutUserInputSchema } from './transactionsUncheckedCreateWithoutUserInputSchema';

export const transactionsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.transactionsUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => transactionsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => transactionsUpdateWithoutUserInputSchema),
				z.lazy(() => transactionsUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => transactionsCreateWithoutUserInputSchema),
				z.lazy(() => transactionsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default transactionsUpsertWithWhereUniqueWithoutUserInputSchema;
