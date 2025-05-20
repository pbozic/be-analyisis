import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDelivery_ordersInputSchema } from './businessCreateWithoutDelivery_ordersInputSchema';
import { businessUncheckedCreateWithoutDelivery_ordersInputSchema } from './businessUncheckedCreateWithoutDelivery_ordersInputSchema';
import { businessCreateOrConnectWithoutDelivery_ordersInputSchema } from './businessCreateOrConnectWithoutDelivery_ordersInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutDelivery_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutDelivery_ordersInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutDelivery_ordersInputSchema;
