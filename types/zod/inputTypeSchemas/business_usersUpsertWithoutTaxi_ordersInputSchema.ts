import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersUpdateWithoutTaxi_ordersInputSchema } from './business_usersUpdateWithoutTaxi_ordersInputSchema';
import { business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema } from './business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema';
import { business_usersCreateWithoutTaxi_ordersInputSchema } from './business_usersCreateWithoutTaxi_ordersInputSchema';
import { business_usersUncheckedCreateWithoutTaxi_ordersInputSchema } from './business_usersUncheckedCreateWithoutTaxi_ordersInputSchema';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';

export const business_usersUpsertWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_usersUpsertWithoutTaxi_ordersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => business_usersUpdateWithoutTaxi_ordersInputSchema),
				z.lazy(() => business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema),
			]),
			create: z.union([
				z.lazy(() => business_usersCreateWithoutTaxi_ordersInputSchema),
				z.lazy(() => business_usersUncheckedCreateWithoutTaxi_ordersInputSchema),
			]),
			where: z.lazy(() => business_usersWhereInputSchema).optional(),
		})
		.strict();

export default business_usersUpsertWithoutTaxi_ordersInputSchema;
