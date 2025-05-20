import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutDriver_history_locationsInputSchema } from './taxi_ordersCreateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema } from './taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { taxi_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema } from './taxi_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedOneWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedOneWithoutDriver_history_locationsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutDriver_history_locationsInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutDriver_history_locationsInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => taxi_ordersCreateOrConnectWithoutDriver_history_locationsInputSchema)
				.optional(),
			connect: z.lazy(() => taxi_ordersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default taxi_ordersCreateNestedOneWithoutDriver_history_locationsInputSchema;
