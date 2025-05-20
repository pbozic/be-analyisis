import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateWithoutOrderInputSchema } from './driver_history_locationsCreateWithoutOrderInputSchema';
import { driver_history_locationsUncheckedCreateWithoutOrderInputSchema } from './driver_history_locationsUncheckedCreateWithoutOrderInputSchema';
import { driver_history_locationsCreateOrConnectWithoutOrderInputSchema } from './driver_history_locationsCreateOrConnectWithoutOrderInputSchema';
import { driver_history_locationsUpsertWithWhereUniqueWithoutOrderInputSchema } from './driver_history_locationsUpsertWithWhereUniqueWithoutOrderInputSchema';
import { driver_history_locationsCreateManyOrderInputEnvelopeSchema } from './driver_history_locationsCreateManyOrderInputEnvelopeSchema';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';
import { driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema } from './driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema';
import { driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema } from './driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema';
import { driver_history_locationsScalarWhereInputSchema } from './driver_history_locationsScalarWhereInputSchema';

export const driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driver_history_locationsCreateWithoutOrderInputSchema),
					z.lazy(() => driver_history_locationsCreateWithoutOrderInputSchema).array(),
					z.lazy(() => driver_history_locationsUncheckedCreateWithoutOrderInputSchema),
					z.lazy(() => driver_history_locationsUncheckedCreateWithoutOrderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => driver_history_locationsCreateOrConnectWithoutOrderInputSchema),
					z.lazy(() => driver_history_locationsCreateOrConnectWithoutOrderInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => driver_history_locationsUpsertWithWhereUniqueWithoutOrderInputSchema),
					z.lazy(() => driver_history_locationsUpsertWithWhereUniqueWithoutOrderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => driver_history_locationsCreateManyOrderInputEnvelopeSchema).optional(),
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
					z.lazy(() => driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema),
					z.lazy(() => driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema),
					z.lazy(() => driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema).array(),
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

export default driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema;
