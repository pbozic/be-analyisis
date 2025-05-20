import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithoutTranslatableInputSchema } from './wordsUpdateWithoutTranslatableInputSchema';
import { wordsUncheckedUpdateWithoutTranslatableInputSchema } from './wordsUncheckedUpdateWithoutTranslatableInputSchema';

export const wordsUpdateWithWhereUniqueWithoutTranslatableInputSchema: z.ZodType<Prisma.wordsUpdateWithWhereUniqueWithoutTranslatableInput> =
	z
		.object({
			where: z.lazy(() => wordsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => wordsUpdateWithoutTranslatableInputSchema),
				z.lazy(() => wordsUncheckedUpdateWithoutTranslatableInputSchema),
			]),
		})
		.strict();

export default wordsUpdateWithWhereUniqueWithoutTranslatableInputSchema;
