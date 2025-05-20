import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesWhereUniqueInputSchema } from './local_pricesWhereUniqueInputSchema';
import { local_pricesUpdateWithoutProductInputSchema } from './local_pricesUpdateWithoutProductInputSchema';
import { local_pricesUncheckedUpdateWithoutProductInputSchema } from './local_pricesUncheckedUpdateWithoutProductInputSchema';

export const local_pricesUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.local_pricesUpdateWithWhereUniqueWithoutProductInput> =
	z
		.object({
			where: z.lazy(() => local_pricesWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => local_pricesUpdateWithoutProductInputSchema),
				z.lazy(() => local_pricesUncheckedUpdateWithoutProductInputSchema),
			]),
		})
		.strict();

export default local_pricesUpdateWithWhereUniqueWithoutProductInputSchema;
