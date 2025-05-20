import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesWhereUniqueInputSchema } from './local_pricesWhereUniqueInputSchema';
import { local_pricesUpdateWithoutProductInputSchema } from './local_pricesUpdateWithoutProductInputSchema';
import { local_pricesUncheckedUpdateWithoutProductInputSchema } from './local_pricesUncheckedUpdateWithoutProductInputSchema';
import { local_pricesCreateWithoutProductInputSchema } from './local_pricesCreateWithoutProductInputSchema';
import { local_pricesUncheckedCreateWithoutProductInputSchema } from './local_pricesUncheckedCreateWithoutProductInputSchema';

export const local_pricesUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.local_pricesUpsertWithWhereUniqueWithoutProductInput> =
	z
		.object({
			where: z.lazy(() => local_pricesWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => local_pricesUpdateWithoutProductInputSchema),
				z.lazy(() => local_pricesUncheckedUpdateWithoutProductInputSchema),
			]),
			create: z.union([
				z.lazy(() => local_pricesCreateWithoutProductInputSchema),
				z.lazy(() => local_pricesUncheckedCreateWithoutProductInputSchema),
			]),
		})
		.strict();

export default local_pricesUpsertWithWhereUniqueWithoutProductInputSchema;
