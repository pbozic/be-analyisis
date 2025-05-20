import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';
import { taxi_ordersUpdateManyMutationInputSchema } from './taxi_ordersUpdateManyMutationInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutBusiness_usersInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutBusiness_usersInputSchema';

export const taxi_ordersUpdateManyWithWhereWithoutBusiness_usersInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithWhereWithoutBusiness_usersInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateManyMutationInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutBusiness_usersInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateManyWithWhereWithoutBusiness_usersInputSchema;
