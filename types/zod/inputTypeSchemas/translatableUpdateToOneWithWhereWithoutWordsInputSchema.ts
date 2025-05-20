import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';
import { translatableUpdateWithoutWordsInputSchema } from './translatableUpdateWithoutWordsInputSchema';
import { translatableUncheckedUpdateWithoutWordsInputSchema } from './translatableUncheckedUpdateWithoutWordsInputSchema';

export const translatableUpdateToOneWithWhereWithoutWordsInputSchema: z.ZodType<Prisma.translatableUpdateToOneWithWhereWithoutWordsInput> =
	z
		.object({
			where: z.lazy(() => translatableWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => translatableUpdateWithoutWordsInputSchema),
				z.lazy(() => translatableUncheckedUpdateWithoutWordsInputSchema),
			]),
		})
		.strict();

export default translatableUpdateToOneWithWhereWithoutWordsInputSchema;
