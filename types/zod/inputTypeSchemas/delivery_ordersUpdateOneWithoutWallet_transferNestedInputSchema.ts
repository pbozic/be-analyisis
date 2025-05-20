import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutWallet_transferInputSchema } from './delivery_ordersCreateWithoutWallet_transferInputSchema';
import { delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema } from './delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema';
import { delivery_ordersCreateOrConnectWithoutWallet_transferInputSchema } from './delivery_ordersCreateOrConnectWithoutWallet_transferInputSchema';
import { delivery_ordersUpsertWithoutWallet_transferInputSchema } from './delivery_ordersUpsertWithoutWallet_transferInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema';
import { delivery_ordersUpdateWithoutWallet_transferInputSchema } from './delivery_ordersUpdateWithoutWallet_transferInputSchema';
import { delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema } from './delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema';

export const delivery_ordersUpdateOneWithoutWallet_transferNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutWallet_transferNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutWallet_transferInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutWallet_transferInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutWallet_transferInputSchema).optional(),
			upsert: z.lazy(() => delivery_ordersUpsertWithoutWallet_transferInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => delivery_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => delivery_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => delivery_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema),
					z.lazy(() => delivery_ordersUpdateWithoutWallet_transferInputSchema),
					z.lazy(() => delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersUpdateOneWithoutWallet_transferNestedInputSchema;
