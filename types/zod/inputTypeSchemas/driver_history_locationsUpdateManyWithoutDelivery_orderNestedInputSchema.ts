import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateWithoutDelivery_orderInputSchema } from './driver_history_locationsCreateWithoutDelivery_orderInputSchema';
import { driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema } from './driver_history_locationsUncheckedCreateWithoutDelivery_orderInputSchema';
import { driver_history_locationsCreateOrConnectWithoutDelivery_orderInputSchema } from './driver_history_locationsCreateOrConnectWithoutDelivery_orderInputSchema';
import { driver_history_locationsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema } from './driver_history_locationsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema';
import { driver_history_locationsCreateManyDelivery_orderInputEnvelopeSchema } from './driver_history_locationsCreateManyDelivery_orderInputEnvelopeSchema';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema } from './driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema';
import { driver_history_locationsUpdateManyWithWhereWithoutDelivery_orderInputSchema } from './driver_history_locationsUpdateManyWithWhereWithoutDelivery_orderInputSchema';
import { driver_history_locationsScalarWhereInputSchema } from './driver_history_locationsScalarWhereInputSchema';

export const driver_history_locationsUpdateManyWithoutDelivery_orderNestedInputSchema: z.ZodType<Prisma.driver_history_locationsUpdateManyWithoutDelivery_orderNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => driver_history_locationsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema),
					z.lazy(() => driver_history_locationsUpsertWithWhereUniqueWithoutDelivery_orderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => driver_history_locationsCreateManyDelivery_orderInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema),
					z.lazy(() => driver_history_locationsUpdateWithWhereUniqueWithoutDelivery_orderInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => driver_history_locationsUpdateManyWithWhereWithoutDelivery_orderInputSchema),
					z.lazy(() => driver_history_locationsUpdateManyWithWhereWithoutDelivery_orderInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => driver_history_locationsScalarWhereInputSchema),
					z.lazy(() => driver_history_locationsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default driver_history_locationsUpdateManyWithoutDelivery_orderNestedInputSchema;
