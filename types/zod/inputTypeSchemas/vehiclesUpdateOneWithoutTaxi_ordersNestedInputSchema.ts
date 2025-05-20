import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutTaxi_ordersInputSchema } from './vehiclesCreateWithoutTaxi_ordersInputSchema';
import { vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema } from './vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema';
import { vehiclesCreateOrConnectWithoutTaxi_ordersInputSchema } from './vehiclesCreateOrConnectWithoutTaxi_ordersInputSchema';
import { vehiclesUpsertWithoutTaxi_ordersInputSchema } from './vehiclesUpsertWithoutTaxi_ordersInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateToOneWithWhereWithoutTaxi_ordersInputSchema } from './vehiclesUpdateToOneWithWhereWithoutTaxi_ordersInputSchema';
import { vehiclesUpdateWithoutTaxi_ordersInputSchema } from './vehiclesUpdateWithoutTaxi_ordersInputSchema';
import { vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema } from './vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const vehiclesUpdateOneWithoutTaxi_ordersNestedInputSchema: z.ZodType<Prisma.vehiclesUpdateOneWithoutTaxi_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => vehiclesCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => vehiclesUncheckedCreateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutTaxi_ordersInputSchema).optional(),
			upsert: z.lazy(() => vehiclesUpsertWithoutTaxi_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => vehiclesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => vehiclesWhereInputSchema)]).optional(),
			connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => vehiclesUpdateToOneWithWhereWithoutTaxi_ordersInputSchema),
					z.lazy(() => vehiclesUpdateWithoutTaxi_ordersInputSchema),
					z.lazy(() => vehiclesUncheckedUpdateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default vehiclesUpdateOneWithoutTaxi_ordersNestedInputSchema;
