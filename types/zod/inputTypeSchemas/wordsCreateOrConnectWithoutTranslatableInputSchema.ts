import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsCreateWithoutTranslatableInputSchema } from './wordsCreateWithoutTranslatableInputSchema';
import { wordsUncheckedCreateWithoutTranslatableInputSchema } from './wordsUncheckedCreateWithoutTranslatableInputSchema';

export const wordsCreateOrConnectWithoutTranslatableInputSchema: z.ZodType<Prisma.wordsCreateOrConnectWithoutTranslatableInput> =
	z
		.object({
			where: z.lazy(() => wordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => wordsCreateWithoutTranslatableInputSchema),
				z.lazy(() => wordsUncheckedCreateWithoutTranslatableInputSchema),
			]),
		})
		.strict();

export default wordsCreateOrConnectWithoutTranslatableInputSchema;
