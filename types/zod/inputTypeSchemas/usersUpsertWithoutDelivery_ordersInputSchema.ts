import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutDelivery_ordersInputSchema } from './usersUpdateWithoutDelivery_ordersInputSchema';
import { usersUncheckedUpdateWithoutDelivery_ordersInputSchema } from './usersUncheckedUpdateWithoutDelivery_ordersInputSchema';
import { usersCreateWithoutDelivery_ordersInputSchema } from './usersCreateWithoutDelivery_ordersInputSchema';
import { usersUncheckedCreateWithoutDelivery_ordersInputSchema } from './usersUncheckedCreateWithoutDelivery_ordersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.usersUpsertWithoutDelivery_ordersInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutDelivery_ordersInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutDelivery_ordersInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutDelivery_ordersInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutDelivery_ordersInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutDelivery_ordersInputSchema;
