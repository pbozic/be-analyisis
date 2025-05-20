import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateWithoutDelivery_orderInputSchema } from './driver_history_locationsCreateWithoutDelivery_orderInputSchema';
import { driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema } from './driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema';
import { driver_history_locationsCreateOrConnectWithoutDelivery_orderInputSchema } from './driver_history_locationsCreateOrConnectWithoutDelivery_orderInputSchema';
import { driver_history_locationsCreateManyDelivery_orderInputEnvelopeSchema } from './driver_history_locationsCreateManyDelivery_orderInputEnvelopeSchema';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';

export const driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema: z.ZodType<Prisma.driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_orderInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driver_history_locationsCreateWithoutDelivery_orderInputSchema),
					z.lazy(() => driver_history_locationsCreateWithoutDelivery_orderInputSchema).array(),
					z.lazy(() => driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema),
					z.lazy(() => driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => driver_history_locationsCreateOrConnectWithoutDelivery_orderInputSchema),
					z.lazy(() => driver_history_locationsCreateOrConnectWithoutDelivery_orderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => driver_history_locationsCreateManyDelivery_orderInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default driver_history_locationsUncheckedCreateNestedManyWithoutDelivery_orderInputSchema;
