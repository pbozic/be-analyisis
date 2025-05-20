import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesWhereUniqueInputSchema } from './local_pricesWhereUniqueInputSchema';
import { local_pricesCreateWithoutProductInputSchema } from './local_pricesCreateWithoutProductInputSchema';
import { local_pricesUncheckedCreateWithoutProductInputSchema } from './local_pricesUncheckedCreateWithoutProductInputSchema';

export const local_pricesCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.local_pricesCreateOrConnectWithoutProductInput> =
	z
		.object({
			where: z.lazy(() => local_pricesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => local_pricesCreateWithoutProductInputSchema),
				z.lazy(() => local_pricesUncheckedCreateWithoutProductInputSchema),
			]),
		})
		.strict();

export default local_pricesCreateOrConnectWithoutProductInputSchema;
