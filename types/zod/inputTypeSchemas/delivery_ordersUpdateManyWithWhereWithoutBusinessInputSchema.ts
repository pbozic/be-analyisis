import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';
import { delivery_ordersUpdateManyMutationInputSchema } from './delivery_ordersUpdateManyMutationInputSchema';
import { delivery_ordersUncheckedUpdateManyWithoutBusinessInputSchema } from './delivery_ordersUncheckedUpdateManyWithoutBusinessInputSchema';

export const delivery_ordersUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.delivery_ordersUpdateManyWithWhereWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => delivery_ordersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => delivery_ordersUpdateManyMutationInputSchema),
				z.lazy(() => delivery_ordersUncheckedUpdateManyWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default delivery_ordersUpdateManyWithWhereWithoutBusinessInputSchema;
