import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutCashbackInputSchema } from './taxi_ordersCreateWithoutCashbackInputSchema';
import { taxi_ordersUncheckedCreateWithoutCashbackInputSchema } from './taxi_ordersUncheckedCreateWithoutCashbackInputSchema';
import { taxi_ordersCreateOrConnectWithoutCashbackInputSchema } from './taxi_ordersCreateOrConnectWithoutCashbackInputSchema';
import { taxi_ordersUpsertWithoutCashbackInputSchema } from './taxi_ordersUpsertWithoutCashbackInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateToOneWithWhereWithoutCashbackInputSchema } from './taxi_ordersUpdateToOneWithWhereWithoutCashbackInputSchema';
import { taxi_ordersUpdateWithoutCashbackInputSchema } from './taxi_ordersUpdateWithoutCashbackInputSchema';
import { taxi_ordersUncheckedUpdateWithoutCashbackInputSchema } from './taxi_ordersUncheckedUpdateWithoutCashbackInputSchema';

export const taxi_ordersUpdateOneWithoutCashbackNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateOneWithoutCashbackNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutCashbackInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutCashbackInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutCashbackInputSchema).optional(),
			upsert: z.lazy(() => taxi_ordersUpsertWithoutCashbackInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => taxi_ordersUpdateToOneWithWhereWithoutCashbackInputSchema),
					z.lazy(() => taxi_ordersUpdateWithoutCashbackInputSchema),
					z.lazy(() => taxi_ordersUncheckedUpdateWithoutCashbackInputSchema),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersUpdateOneWithoutCashbackNestedInputSchema;
