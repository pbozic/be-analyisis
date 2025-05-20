import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutTaxi_ordersInputSchema } from './businessCreateWithoutTaxi_ordersInputSchema';
import { businessUncheckedCreateWithoutTaxi_ordersInputSchema } from './businessUncheckedCreateWithoutTaxi_ordersInputSchema';
import { businessCreateOrConnectWithoutTaxi_ordersInputSchema } from './businessCreateOrConnectWithoutTaxi_ordersInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutTaxi_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutTaxi_ordersInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutTaxi_ordersInputSchema;
