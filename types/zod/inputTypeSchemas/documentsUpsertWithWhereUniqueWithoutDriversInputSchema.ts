import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutDriversInputSchema } from './documentsUpdateWithoutDriversInputSchema';
import { documentsUncheckedUpdateWithoutDriversInputSchema } from './documentsUncheckedUpdateWithoutDriversInputSchema';
import { documentsCreateWithoutDriversInputSchema } from './documentsCreateWithoutDriversInputSchema';
import { documentsUncheckedCreateWithoutDriversInputSchema } from './documentsUncheckedCreateWithoutDriversInputSchema';

export const documentsUpsertWithWhereUniqueWithoutDriversInputSchema: z.ZodType<Prisma.documentsUpsertWithWhereUniqueWithoutDriversInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => documentsUpdateWithoutDriversInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutDriversInputSchema),
			]),
			create: z.union([
				z.lazy(() => documentsCreateWithoutDriversInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutDriversInputSchema),
			]),
		})
		.strict();

export default documentsUpsertWithWhereUniqueWithoutDriversInputSchema;
