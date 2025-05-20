import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentScalarWhereInputSchema } from './delivery_order_sentScalarWhereInputSchema';
import { delivery_order_sentUpdateManyMutationInputSchema } from './delivery_order_sentUpdateManyMutationInputSchema';
import { delivery_order_sentUncheckedUpdateManyWithoutDelivery_driverInputSchema } from './delivery_order_sentUncheckedUpdateManyWithoutDelivery_driverInputSchema';

export const delivery_order_sentUpdateManyWithWhereWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_order_sentUpdateManyWithWhereWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => delivery_order_sentScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => delivery_order_sentUpdateManyMutationInputSchema),
				z.lazy(() => delivery_order_sentUncheckedUpdateManyWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default delivery_order_sentUpdateManyWithWhereWithoutDelivery_driverInputSchema;
