import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutHistoryInputSchema } from './delivery_ordersCreateWithoutHistoryInputSchema';
import { delivery_ordersUncheckedCreateWithoutHistoryInputSchema } from './delivery_ordersUncheckedCreateWithoutHistoryInputSchema';
import { delivery_ordersCreateOrConnectWithoutHistoryInputSchema } from './delivery_ordersCreateOrConnectWithoutHistoryInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutHistoryInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutHistoryInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutHistoryInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutHistoryInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutHistoryInputSchema).optional(),
			connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default delivery_ordersCreateNestedOneWithoutHistoryInputSchema;
