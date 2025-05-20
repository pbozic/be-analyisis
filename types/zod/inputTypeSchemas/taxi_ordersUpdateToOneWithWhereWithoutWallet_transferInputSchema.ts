import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersUpdateWithoutWallet_transferInputSchema } from './taxi_ordersUpdateWithoutWallet_transferInputSchema';
import { taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema } from './taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema';

export const taxi_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema: z.ZodType<Prisma.taxi_ordersUpdateToOneWithWhereWithoutWallet_transferInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutWallet_transferInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema;
