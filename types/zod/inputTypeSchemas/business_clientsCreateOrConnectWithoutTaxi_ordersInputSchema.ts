import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsWhereUniqueInputSchema } from './business_clientsWhereUniqueInputSchema';
import { business_clientsCreateWithoutTaxi_ordersInputSchema } from './business_clientsCreateWithoutTaxi_ordersInputSchema';
import { business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema } from './business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema';

export const business_clientsCreateOrConnectWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_clientsCreateOrConnectWithoutTaxi_ordersInput> =
	z
		.object({
			where: z.lazy(() => business_clientsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => business_clientsCreateWithoutTaxi_ordersInputSchema),
				z.lazy(() => business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema),
			]),
		})
		.strict();

export default business_clientsCreateOrConnectWithoutTaxi_ordersInputSchema;
