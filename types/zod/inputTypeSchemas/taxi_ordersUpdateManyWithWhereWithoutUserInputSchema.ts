import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';
import { taxi_ordersUpdateManyMutationInputSchema } from './taxi_ordersUpdateManyMutationInputSchema';
import { taxi_ordersUncheckedUpdateManyWithoutUserInputSchema } from './taxi_ordersUncheckedUpdateManyWithoutUserInputSchema';

export const taxi_ordersUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => taxi_ordersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => taxi_ordersUpdateManyMutationInputSchema),
				z.lazy(() => taxi_ordersUncheckedUpdateManyWithoutUserInputSchema),
			]),
		})
		.strict();

export default taxi_ordersUpdateManyWithWhereWithoutUserInputSchema;
