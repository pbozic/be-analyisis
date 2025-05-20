import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutBusiness_clientsInputSchema } from './taxi_ordersUpdateWithoutBusiness_clientsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutBusiness_clientsInputSchema } from './taxi_ordersUncheckedUpdateWithoutBusiness_clientsInputSchema';
import { taxi_ordersCreateWithoutBusiness_clientsInputSchema } from './taxi_ordersCreateWithoutBusiness_clientsInputSchema';
import { taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema } from './taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema';

export const taxi_ordersUpsertWithWhereUniqueWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithWhereUniqueWithoutBusiness_clientsInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutBusiness_clientsInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutBusiness_clientsInputSchema),
			]),
			create: z.union([
				z.lazy(() => taxi_ordersCreateWithoutBusiness_clientsInputSchema),
				z.lazy(() => taxi_ordersUncheckedCreateWithoutBusiness_clientsInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpsertWithWhereUniqueWithoutBusiness_clientsInputSchema;
