import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';
import { taxi_ordersUpdateManyMutationInputSchema } from './taxi_ordersUpdateManyMutationInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutBusiness_clientsInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutBusiness_clientsInputSchema';

export const taxi_ordersUpdateManyWithWhereWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithWhereWithoutBusiness_clientsInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateManyMutationInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutBusiness_clientsInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateManyWithWhereWithoutBusiness_clientsInputSchema;
