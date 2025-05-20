import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutDelivery_driverInputSchema } from './delivery_ordersCreateWithoutDelivery_driverInputSchema';
import { delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema';
import { delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema } from './delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema';
import { delivery_ordersCreateManyDelivery_driverInputEnvelopeSchema } from './delivery_ordersCreateManyDelivery_driverInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersUncheckedCreateNestedManyWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_ordersUncheckedCreateNestedManyWithoutDelivery_driverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutDelivery_driverInputSchema),
					z.lazy(() => delivery_ordersCreateWithoutDelivery_driverInputSchema).array(),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutDelivery_driverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema),
					z.lazy(() => delivery_ordersCreateOrConnectWithoutDelivery_driverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_ordersCreateManyDelivery_driverInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersUncheckedCreateNestedManyWithoutDelivery_driverInputSchema;
