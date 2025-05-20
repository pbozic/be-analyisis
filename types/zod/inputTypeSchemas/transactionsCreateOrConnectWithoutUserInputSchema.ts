import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsCreateWithoutUserInputSchema } from './transactionsCreateWithoutUserInputSchema';
import { transactionsUncheckedCreateWithoutUserInputSchema } from './transactionsUncheckedCreateWithoutUserInputSchema';

export const transactionsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.transactionsCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => transactionsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => transactionsCreateWithoutUserInputSchema),
				z.lazy(() => transactionsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default transactionsCreateOrConnectWithoutUserInputSchema;
