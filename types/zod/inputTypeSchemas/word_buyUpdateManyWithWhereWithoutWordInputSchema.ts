import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyScalarWhereInputSchema } from './word_buyScalarWhereInputSchema';
import { word_buyUpdateManyMutationInputSchema } from './word_buyUpdateManyMutationInputSchema';
import { word_buyUncheckedUpdateManyWithoutWordInputSchema } from './word_buyUncheckedUpdateManyWithoutWordInputSchema';

export const word_buyUpdateManyWithWhereWithoutWordInputSchema: z.ZodType<Prisma.word_buyUpdateManyWithWhereWithoutWordInput> =
	z
		.object({
			where: z.lazy(() => word_buyScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => word_buyUpdateManyMutationInputSchema),
				z.lazy(() => word_buyUncheckedUpdateManyWithoutWordInputSchema),
			]),
		})
		.strict();

export default word_buyUpdateManyWithWhereWithoutWordInputSchema;
