import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutTaxi_ordersInputSchema } from './business_usersCreateWithoutTaxi_ordersInputSchema';
import { business_usersUncheckedCreateWithoutTaxi_ordersInputSchema } from './business_usersUncheckedCreateWithoutTaxi_ordersInputSchema';
import { business_usersCreateOrConnectWithoutTaxi_ordersInputSchema } from './business_usersCreateOrConnectWithoutTaxi_ordersInputSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';

export const business_usersCreateNestedOneWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_usersCreateNestedOneWithoutTaxi_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => business_usersCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => business_usersUncheckedCreateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => business_usersCreateOrConnectWithoutTaxi_ordersInputSchema).optional(),
			connect: z.lazy(() => business_usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default business_usersCreateNestedOneWithoutTaxi_ordersInputSchema;
