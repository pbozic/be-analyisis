import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsCreateWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsUncheckedCreateWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsCreateOrConnectWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelopeSchema } from './delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelopeSchema';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from './delivery_driver_history_locationsWhereUniqueInputSchema';
import { delivery_driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsUpdateManyWithWhereWithoutDelivery_driverInputSchema } from './delivery_driver_history_locationsUpdateManyWithWhereWithoutDelivery_driverInputSchema';
import { delivery_driver_history_locationsScalarWhereInputSchema } from './delivery_driver_history_locationsScalarWhereInputSchema';

export const delivery_driver_history_locationsUncheckedUpdateManyWithoutDelivery_driverNestedInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsUncheckedUpdateManyWithoutDelivery_driverNestedInput> =
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
			upsert: z
				.union([
					z.lazy(
						() => delivery_driver_history_locationsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema
					),
					z
						.lazy(
							() =>
								delivery_driver_history_locationsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => delivery_driver_history_locationsCreateManyDelivery_driverInputEnvelopeSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(
						() => delivery_driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema
					),
					z
						.lazy(
							() =>
								delivery_driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema
						)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => delivery_driver_history_locationsUpdateManyWithWhereWithoutDelivery_driverInputSchema),
					z
						.lazy(
							() => delivery_driver_history_locationsUpdateManyWithWhereWithoutDelivery_driverInputSchema
						)
						.array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => delivery_driver_history_locationsScalarWhereInputSchema),
					z.lazy(() => delivery_driver_history_locationsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_driver_history_locationsUncheckedUpdateManyWithoutDelivery_driverNestedInputSchema;
