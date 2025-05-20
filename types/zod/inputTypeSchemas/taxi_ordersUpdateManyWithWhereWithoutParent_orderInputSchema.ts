import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';
import { taxi_ordersUpdateManyMutationInputSchema } from './taxi_ordersUpdateManyMutationInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutParent_orderInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutParent_orderInputSchema';

export const taxi_ordersUpdateManyWithWhereWithoutParent_orderInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithWhereWithoutParent_orderInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateManyMutationInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutParent_orderInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateManyWithWhereWithoutParent_orderInputSchema;
