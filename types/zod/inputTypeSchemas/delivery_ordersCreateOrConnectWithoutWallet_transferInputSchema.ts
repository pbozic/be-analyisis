import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersCreateWithoutWallet_transferInputSchema } from './delivery_ordersCreateWithoutWallet_transferInputSchema';
import { delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema } from './delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema';

export const delivery_ordersCreateOrConnectWithoutWallet_transferInputSchema: z.ZodType<Prisma.delivery_ordersCreateOrConnectWithoutWallet_transferInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutWallet_transferInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema),
			]),
		})
		.strict();

export default delivery_ordersCreateOrConnectWithoutWallet_transferInputSchema;
