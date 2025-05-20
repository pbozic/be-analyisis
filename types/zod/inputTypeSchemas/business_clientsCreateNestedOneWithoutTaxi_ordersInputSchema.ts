import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsCreateWithoutTaxi_ordersInputSchema } from './business_clientsCreateWithoutTaxi_ordersInputSchema';
import { business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema } from './business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema';
import { business_clientsCreateOrConnectWithoutTaxi_ordersInputSchema } from './business_clientsCreateOrConnectWithoutTaxi_ordersInputSchema';
import { business_clientsWhereUniqueInputSchema } from './business_clientsWhereUniqueInputSchema';

export const business_clientsCreateNestedOneWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_clientsCreateNestedOneWithoutTaxi_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => business_clientsCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => business_clientsUncheckedCreateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => business_clientsCreateOrConnectWithoutTaxi_ordersInputSchema).optional(),
			connect: z.lazy(() => business_clientsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default business_clientsCreateNestedOneWithoutTaxi_ordersInputSchema;
