import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutTaxi_ordersInputSchema } from './businessCreateWithoutTaxi_ordersInputSchema';
import { businessUncheckedCreateWithoutTaxi_ordersInputSchema } from './businessUncheckedCreateWithoutTaxi_ordersInputSchema';
import { businessCreateOrConnectWithoutTaxi_ordersInputSchema } from './businessCreateOrConnectWithoutTaxi_ordersInputSchema';
import { businessUpsertWithoutTaxi_ordersInputSchema } from './businessUpsertWithoutTaxi_ordersInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutTaxi_ordersInputSchema } from './businessUpdateToOneWithWhereWithoutTaxi_ordersInputSchema';
import { businessUpdateWithoutTaxi_ordersInputSchema } from './businessUpdateWithoutTaxi_ordersInputSchema';
import { businessUncheckedUpdateWithoutTaxi_ordersInputSchema } from './businessUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const businessUpdateOneWithoutTaxi_ordersNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutTaxi_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutTaxi_ordersInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutTaxi_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutTaxi_ordersInputSchema),
					z.lazy(() => businessUpdateWithoutTaxi_ordersInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutTaxi_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneWithoutTaxi_ordersNestedInputSchema;
