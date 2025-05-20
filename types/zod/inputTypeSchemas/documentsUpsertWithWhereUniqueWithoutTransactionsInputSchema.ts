import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutTransactionsInputSchema } from './documentsUpdateWithoutTransactionsInputSchema';
import { documentsUncheckedUpdateWithoutTransactionsInputSchema } from './documentsUncheckedUpdateWithoutTransactionsInputSchema';
import { documentsCreateWithoutTransactionsInputSchema } from './documentsCreateWithoutTransactionsInputSchema';
import { documentsUncheckedCreateWithoutTransactionsInputSchema } from './documentsUncheckedCreateWithoutTransactionsInputSchema';

export const documentsUpsertWithWhereUniqueWithoutTransactionsInputSchema: z.ZodType<Prisma.documentsUpsertWithWhereUniqueWithoutTransactionsInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => documentsUpdateWithoutTransactionsInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutTransactionsInputSchema),
			]),
			create: z.union([
				z.lazy(() => documentsCreateWithoutTransactionsInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutTransactionsInputSchema),
			]),
		})
		.strict();

export default documentsUpsertWithWhereUniqueWithoutTransactionsInputSchema;
