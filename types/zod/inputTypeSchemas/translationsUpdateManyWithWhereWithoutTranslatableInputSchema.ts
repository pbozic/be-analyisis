import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsScalarWhereInputSchema } from './translationsScalarWhereInputSchema';
import { translationsUpdateManyMutationInputSchema } from './translationsUpdateManyMutationInputSchema';
import { translationsUncheckedUpdateManyWithoutTranslatableInputSchema } from './translationsUncheckedUpdateManyWithoutTranslatableInputSchema';

export const translationsUpdateManyWithWhereWithoutTranslatableInputSchema: z.ZodType<Prisma.translationsUpdateManyWithWhereWithoutTranslatableInput> =
	z
		.object({
			where: z.lazy(() => translationsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => translationsUpdateManyMutationInputSchema),
				z.lazy(() => translationsUncheckedUpdateManyWithoutTranslatableInputSchema),
			]),
		})
		.strict();

export default translationsUpdateManyWithWhereWithoutTranslatableInputSchema;
