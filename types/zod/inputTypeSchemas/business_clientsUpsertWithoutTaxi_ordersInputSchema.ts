import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsUpdateWithoutTaxi_ordersInputSchema } from './business_clientsUpdateWithoutTaxi_ordersInputSchema';
import { business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema } from './business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema';
import { business_clientsCreateWithoutTaxi_ordersInputSchema } from './business_clientsCreateWithoutTaxi_ordersInputSchema';
import { business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema } from './business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema';
import { business_clientsWhereInputSchema } from './business_clientsWhereInputSchema';

export const business_clientsUpsertWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_clientsUpsertWithoutTaxi_ordersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => business_clientsUpdateWithoutTaxi_ordersInputSchema),
				z.lazy(() => business_clientsUncheckedUpdateWithoutTaxi_ordersInputSchema),
			]),
			create: z.union([
				z.lazy(() => business_clientsCreateWithoutTaxi_ordersInputSchema),
				z.lazy(() => business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema),
			]),
			where: z.lazy(() => business_clientsWhereInputSchema).optional(),
		})
		.strict();

export default business_clientsUpsertWithoutTaxi_ordersInputSchema;
