import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersUpdateWithoutWallet_transferInputSchema } from './delivery_ordersUpdateWithoutWallet_transferInputSchema';
import { delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema } from './delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema';
import { delivery_ordersCreateWithoutWallet_transferInputSchema } from './delivery_ordersCreateWithoutWallet_transferInputSchema';
import { delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema } from './delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';

export const delivery_ordersUpsertWithoutWallet_transferInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithoutWallet_transferInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => delivery_ordersUpdateWithoutWallet_transferInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema),
			]),
			create: z.union([
				z.lazy(() => delivery_ordersCreateWithoutWallet_transferInputSchema),
				z.lazy(() => delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema),
			]),
			where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
		})
		.strict();

export default delivery_ordersUpsertWithoutWallet_transferInputSchema;
