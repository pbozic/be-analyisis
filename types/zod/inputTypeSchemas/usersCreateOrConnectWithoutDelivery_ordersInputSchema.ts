import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutDelivery_ordersInputSchema } from './usersCreateWithoutDelivery_ordersInputSchema';
import { usersUncheckedCreateWithoutDelivery_ordersInputSchema } from './usersUncheckedCreateWithoutDelivery_ordersInputSchema';

export const usersCreateOrConnectWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutDelivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutDelivery_ordersInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutDelivery_ordersInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutDelivery_ordersInputSchema;
