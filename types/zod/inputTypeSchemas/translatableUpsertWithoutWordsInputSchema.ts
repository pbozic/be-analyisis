import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableUpdateWithoutWordsInputSchema } from './translatableUpdateWithoutWordsInputSchema';
import { translatableUncheckedUpdateWithoutWordsInputSchema } from './translatableUncheckedUpdateWithoutWordsInputSchema';
import { translatableCreateWithoutWordsInputSchema } from './translatableCreateWithoutWordsInputSchema';
import { translatableUncheckedCreateWithoutWordsInputSchema } from './translatableUncheckedCreateWithoutWordsInputSchema';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';

export const translatableUpsertWithoutWordsInputSchema: z.ZodType<Prisma.translatableUpsertWithoutWordsInput> = z
	.object({
		update: z.union([
			z.lazy(() => translatableUpdateWithoutWordsInputSchema),
			z.lazy(() => translatableUncheckedUpdateWithoutWordsInputSchema),
		]),
		create: z.union([
			z.lazy(() => translatableCreateWithoutWordsInputSchema),
			z.lazy(() => translatableUncheckedCreateWithoutWordsInputSchema),
		]),
		where: z.lazy(() => translatableWhereInputSchema).optional(),
	})
	.strict();

export default translatableUpsertWithoutWordsInputSchema;
