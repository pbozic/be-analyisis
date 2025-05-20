import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesUpdateWithoutTaxi_ordersInputSchema } from './vehiclesUpdateWithoutTaxi_ordersInputSchema';
import { vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema } from './vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema';
import { vehiclesCreateWithoutTaxi_ordersInputSchema } from './vehiclesCreateWithoutTaxi_ordersInputSchema';
import { vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema } from './vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const vehiclesUpsertWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.vehiclesUpsertWithoutTaxi_ordersInput> = z
	.object({
		update: z.union([
			z.lazy(() => vehiclesUpdateWithoutTaxi_ordersInputSchema),
			z.lazy(() => vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema),
		]),
		create: z.union([
			z.lazy(() => vehiclesCreateWithoutTaxi_ordersInputSchema),
			z.lazy(() => vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema),
		]),
		where: z.lazy(() => vehiclesWhereInputSchema).optional(),
	})
	.strict();

export default vehiclesUpsertWithoutTaxi_ordersInputSchema;
