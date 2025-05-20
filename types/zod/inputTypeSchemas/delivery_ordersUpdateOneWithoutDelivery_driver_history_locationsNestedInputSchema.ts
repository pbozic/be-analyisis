import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUpsertWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUpsertWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema';

export const delivery_ordersUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutDelivery_driver_history_locationsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutDelivery_driver_history_locationsInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driver_history_locationsInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => delivery_ordersCreateOrConnectWithoutDelivery_driver_history_locationsInputSchema)
				.optional(),
			upsert: z.lazy(() => delivery_ordersUpsertWithoutDelivery_driver_history_locationsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => delivery_ordersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => delivery_ordersWhereInputSchema)]).optional(),
			connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => delivery_ordersUpdateToOneWithWhereWithoutDelivery_driver_history_locationsInputSchema
					),
					z.lazy(() => delivery_ordersUpdateWithoutDelivery_driver_history_locationsInputSchema),
					z.lazy(() => delivery_ordersUncheckedUpdateWithoutDelivery_driver_history_locationsInputSchema),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema;
