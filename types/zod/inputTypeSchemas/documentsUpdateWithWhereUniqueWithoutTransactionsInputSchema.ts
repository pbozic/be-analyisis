import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutTransactionsInputSchema } from './documentsUpdateWithoutTransactionsInputSchema';
import { documentsUncheckedUpdateWithoutTransactionsInputSchema } from './documentsUncheckedUpdateWithoutTransactionsInputSchema';

export const documentsUpdateWithWhereUniqueWithoutTransactionsInputSchema: z.ZodType<Prisma.documentsUpdateWithWhereUniqueWithoutTransactionsInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => documentsUpdateWithoutTransactionsInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutTransactionsInputSchema),
			]),
		})
		.strict();

export default documentsUpdateWithWhereUniqueWithoutTransactionsInputSchema;
