import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateWithoutDelivery_driverInputSchema } from './delivery_order_sentCreateWithoutDelivery_driverInputSchema';
import { delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema';
import { delivery_order_sentCreateOrConnectWithoutDelivery_driverInputSchema } from './delivery_order_sentCreateOrConnectWithoutDelivery_driverInputSchema';
import { delivery_order_sentCreateManyDelivery_driverInputEnvelopeSchema } from './delivery_order_sentCreateManyDelivery_driverInputEnvelopeSchema';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';

export const delivery_order_sentCreateNestedManyWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_order_sentCreateNestedManyWithoutDelivery_driverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_order_sentCreateWithoutDelivery_driverInputSchema),
					z.lazy(() => delivery_order_sentCreateWithoutDelivery_driverInputSchema).array(),
					z.lazy(() => delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema),
					z.lazy(() => delivery_order_sentUncheckedCreateWithoutDelivery_driverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_order_sentCreateOrConnectWithoutDelivery_driverInputSchema),
					z.lazy(() => delivery_order_sentCreateOrConnectWithoutDelivery_driverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_order_sentCreateManyDelivery_driverInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_order_sentCreateNestedManyWithoutDelivery_driverInputSchema;
