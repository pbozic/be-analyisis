import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelopeSchema } from './delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelopeSchema';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from './delivery_driver_history_locationsWhereUniqueInputSchema';

export const delivery_driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_driverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema),
					z.lazy(() => delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema).array(),
					z.lazy(() => delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema),
					z
						.lazy(() => delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInputSchema),
					z
						.lazy(() => delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInputSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_driverInputSchema;
