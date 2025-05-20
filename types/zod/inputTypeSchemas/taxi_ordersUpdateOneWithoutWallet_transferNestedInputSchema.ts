import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutWallet_transferInputSchema } from './taxi_ordersCreateWithoutWallet_transferInputSchema';
import { taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema } from './taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema';
import { taxi_ordersCreateOrConnectWithoutWallet_transferInputSchema } from './taxi_ordersCreateOrConnectWithoutWallet_transferInputSchema';
import { taxi_ordersUpsertWithoutWallet_transferInputSchema } from './taxi_ordersUpsertWithoutWallet_transferInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema } from './taxi_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema';
import { taxi_ordersUpdateWithoutWallet_transferInputSchema } from './taxi_ordersUpdateWithoutWallet_transferInputSchema';
import { taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema } from './taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema';

export const taxi_ordersUpdateOneWithoutWallet_transferNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateOneWithoutWallet_transferNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutWallet_transferInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutWallet_transferInputSchema).optional(),
			upsert: z.lazy(() => taxi_ordersUpsertWithoutWallet_transferInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => taxi_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema),
					z.lazy(() => taxi_ordersUpdateWithoutWallet_transferInputSchema),
					z.lazy(() => taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersUpdateOneWithoutWallet_transferNestedInputSchema;
