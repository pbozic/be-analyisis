import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsScalarWhereInputSchema } from './wordsScalarWhereInputSchema';
import { wordsUpdateManyMutationInputSchema } from './wordsUpdateManyMutationInputSchema';
import { wordsUncheckedUpdateManyWithoutBundlesInputSchema } from './wordsUncheckedUpdateManyWithoutBundlesInputSchema';

export const wordsUpdateManyWithWhereWithoutBundlesInputSchema: z.ZodType<Prisma.wordsUpdateManyWithWhereWithoutBundlesInput> =
	z
		.object({
			where: z.lazy(() => wordsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => wordsUpdateManyMutationInputSchema),
				z.lazy(() => wordsUncheckedUpdateManyWithoutBundlesInputSchema),
			]),
		})
		.strict();

export default wordsUpdateManyWithWhereWithoutBundlesInputSchema;
