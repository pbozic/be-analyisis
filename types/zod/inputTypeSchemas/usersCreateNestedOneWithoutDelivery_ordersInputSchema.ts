import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDelivery_ordersInputSchema } from './usersCreateWithoutDelivery_ordersInputSchema';
import { usersUncheckedCreateWithoutDelivery_ordersInputSchema } from './usersUncheckedCreateWithoutDelivery_ordersInputSchema';
import { usersCreateOrConnectWithoutDelivery_ordersInputSchema } from './usersCreateOrConnectWithoutDelivery_ordersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutDelivery_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutDelivery_ordersInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutDelivery_ordersInputSchema;
