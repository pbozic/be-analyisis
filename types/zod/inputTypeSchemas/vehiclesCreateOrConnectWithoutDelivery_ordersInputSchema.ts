import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesCreateWithoutDelivery_ordersInputSchema } from './vehiclesCreateWithoutDelivery_ordersInputSchema';
import { vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema } from './vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema';

export const vehiclesCreateOrConnectWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.vehiclesCreateOrConnectWithoutDelivery_ordersInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => vehiclesCreateWithoutDelivery_ordersInputSchema),
				z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema),
			]),
		})
		.strict();

export default vehiclesCreateOrConnectWithoutDelivery_ordersInputSchema;
