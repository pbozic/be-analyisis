import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutHistoryInputSchema } from './taxi_ordersCreateWithoutHistoryInputSchema';
import { taxi_ordersUncheckedCreateWithoutHistoryInputSchema } from './taxi_ordersUncheckedCreateWithoutHistoryInputSchema';
import { taxi_ordersCreateOrConnectWithoutHistoryInputSchema } from './taxi_ordersCreateOrConnectWithoutHistoryInputSchema';
import { taxi_ordersUpsertWithoutHistoryInputSchema } from './taxi_ordersUpsertWithoutHistoryInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateToOneWithWhereWithoutHistoryInputSchema } from './taxi_ordersUpdateToOneWithWhereWithoutHistoryInputSchema';
import { taxi_ordersUpdateWithoutHistoryInputSchema } from './taxi_ordersUpdateWithoutHistoryInputSchema';
import { taxi_ordersUncheckedUpdateWithoutHistoryInputSchema } from './taxi_ordersUncheckedUpdateWithoutHistoryInputSchema';

export const taxi_ordersUpdateOneWithoutHistoryNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateOneWithoutHistoryNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutHistoryInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutHistoryInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutHistoryInputSchema).optional(),
			upsert: z.lazy(() => taxi_ordersUpsertWithoutHistoryInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => taxi_ordersUpdateToOneWithWhereWithoutHistoryInputSchema),
					z.lazy(() => taxi_ordersUpdateWithoutHistoryInputSchema),
					z.lazy(() => taxi_ordersUncheckedUpdateWithoutHistoryInputSchema),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersUpdateOneWithoutHistoryNestedInputSchema;
