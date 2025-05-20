import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutWallet_transferInputSchema } from './taxi_ordersCreateWithoutWallet_transferInputSchema';
import { taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema } from './taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema';
import { taxi_ordersCreateOrConnectWithoutWallet_transferInputSchema } from './taxi_ordersCreateOrConnectWithoutWallet_transferInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedOneWithoutWallet_transferInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedOneWithoutWallet_transferInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutWallet_transferInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutWallet_transferInputSchema).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default taxi_ordersCreateNestedOneWithoutWallet_transferInputSchema;
