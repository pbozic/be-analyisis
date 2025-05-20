import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDelivery_ordersInputSchema } from './businessCreateWithoutDelivery_ordersInputSchema';
import { businessUncheckedCreateWithoutDelivery_ordersInputSchema } from './businessUncheckedCreateWithoutDelivery_ordersInputSchema';
import { businessCreateOrConnectWithoutDelivery_ordersInputSchema } from './businessCreateOrConnectWithoutDelivery_ordersInputSchema';
import { businessUpsertWithoutDelivery_ordersInputSchema } from './businessUpsertWithoutDelivery_ordersInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutDelivery_ordersInputSchema } from './businessUpdateToOneWithWhereWithoutDelivery_ordersInputSchema';
import { businessUpdateWithoutDelivery_ordersInputSchema } from './businessUpdateWithoutDelivery_ordersInputSchema';
import { businessUncheckedUpdateWithoutDelivery_ordersInputSchema } from './businessUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const businessUpdateOneWithoutDelivery_ordersNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutDelivery_ordersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutDelivery_ordersInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutDelivery_ordersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutDelivery_ordersInputSchema),
					z.lazy(() => businessUpdateWithoutDelivery_ordersInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutDelivery_ordersInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneWithoutDelivery_ordersNestedInputSchema;
