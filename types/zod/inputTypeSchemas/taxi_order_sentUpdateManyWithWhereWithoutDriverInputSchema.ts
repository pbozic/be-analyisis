import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentScalarWhereInputSchema } from './taxi_order_sentScalarWhereInputSchema';
import { taxi_order_sentUpdateManyMutationInputSchema } from './taxi_order_sentUpdateManyMutationInputSchema';
import { taxi_order_sentUncheckedUpdateManyWithoutDriverInputSchema } from './taxi_order_sentUncheckedUpdateManyWithoutDriverInputSchema';

export const taxi_order_sentUpdateManyWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.taxi_order_sentUpdateManyWithWhereWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => taxi_order_sentScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => taxi_order_sentUpdateManyMutationInputSchema),
				z.lazy(() => taxi_order_sentUncheckedUpdateManyWithoutDriverInputSchema),
			]),
		})
		.strict();

export default taxi_order_sentUpdateManyWithWhereWithoutDriverInputSchema;
