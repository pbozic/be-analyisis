import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutDelivery_ordersInputSchema } from './businessCreateWithoutDelivery_ordersInputSchema';
import { businessUncheckedCreateWithoutDelivery_ordersInputSchema } from './businessUncheckedCreateWithoutDelivery_ordersInputSchema';

export const businessCreateOrConnectWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutDelivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => businessCreateWithoutDelivery_ordersInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutDelivery_ordersInputSchema),
			]),
		})
		.strict();

export default businessCreateOrConnectWithoutDelivery_ordersInputSchema;
