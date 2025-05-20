import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutWallet_transferInputSchema } from './delivery_ordersCreateWithoutWallet_transferInputSchema';
import { delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema } from './delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema';
import { delivery_ordersCreateOrConnectWithoutWallet_transferInputSchema } from './delivery_ordersCreateOrConnectWithoutWallet_transferInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutWallet_transferInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutWallet_transferInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutWallet_transferInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutWallet_transferInputSchema).optional(),
			connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default delivery_ordersCreateNestedOneWithoutWallet_transferInputSchema;
