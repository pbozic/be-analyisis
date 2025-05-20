import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';
import { taxi_ordersUpdateManyMutationInputSchema } from './taxi_ordersUpdateManyMutationInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutBusinessInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutBusinessInputSchema';

export const taxi_ordersUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithWhereWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateManyMutationInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateManyWithWhereWithoutBusinessInputSchema;
