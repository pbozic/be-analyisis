import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutGrouped_ordersInputSchema } from './taxi_ordersCreateWithoutGrouped_ordersInputSchema';
import { taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema } from './taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema';
import { taxi_ordersCreateOrConnectWithoutGrouped_ordersInputSchema } from './taxi_ordersCreateOrConnectWithoutGrouped_ordersInputSchema';
import { taxi_ordersUpsertWithoutGrouped_ordersInputSchema } from './taxi_ordersUpsertWithoutGrouped_ordersInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateToOneWithWhereWithoutGrouped_ordersInputSchema } from './taxi_ordersUpdateToOneWithWhereWithoutGrouped_ordersInputSchema';
import { taxi_ordersUpdateWithoutGrouped_ordersInputSchema } from './taxi_ordersUpdateWithoutGrouped_ordersInputSchema';
import { taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema } from './taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema';

export const taxi_ordersUpdateOneWithoutGrouped_ordersNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateOneWithoutGrouped_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutGrouped_ordersInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutGrouped_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => taxi_ordersCreateOrConnectWithoutGrouped_ordersInputSchema).optional(),
			upsert: z.lazy(() => taxi_ordersUpsertWithoutGrouped_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => taxi_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => taxi_ordersUpdateToOneWithWhereWithoutGrouped_ordersInputSchema),
					z.lazy(() => taxi_ordersUpdateWithoutGrouped_ordersInputSchema),
					z.lazy(() => taxi_ordersUncheckedUpdateWithoutGrouped_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersUpdateOneWithoutGrouped_ordersNestedInputSchema;
