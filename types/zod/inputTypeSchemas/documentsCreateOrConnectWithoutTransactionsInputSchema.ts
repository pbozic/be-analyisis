import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutTransactionsInputSchema } from './documentsCreateWithoutTransactionsInputSchema';
import { documentsUncheckedCreateWithoutTransactionsInputSchema } from './documentsUncheckedCreateWithoutTransactionsInputSchema';

export const documentsCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutTransactionsInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => documentsCreateWithoutTransactionsInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutTransactionsInputSchema),
			]),
		})
		.strict();

export default documentsCreateOrConnectWithoutTransactionsInputSchema;
