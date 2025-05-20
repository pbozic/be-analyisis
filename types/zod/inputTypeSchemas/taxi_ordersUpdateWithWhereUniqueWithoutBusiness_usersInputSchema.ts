import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutBusiness_usersInputSchema } from './taxi_ordersUpdateWithoutBusiness_usersInputSchema';
import { taxi_ordersUncheckedUpdateWithoutBusiness_usersInputSchema } from './taxi_ordersUncheckedUpdateWithoutBusiness_usersInputSchema';

export const taxi_ordersUpdateWithWhereUniqueWithoutBusiness_usersInputSchema: z.ZodType<Prisma.taxi_ordersUpdateWithWhereUniqueWithoutBusiness_usersInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateWithoutBusiness_usersInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateWithoutBusiness_usersInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateWithWhereUniqueWithoutBusiness_usersInputSchema;
