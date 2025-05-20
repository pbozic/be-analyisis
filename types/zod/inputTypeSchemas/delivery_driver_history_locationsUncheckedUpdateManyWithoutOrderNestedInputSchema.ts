import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsCreateWithoutOrderInputSchema } from './delivery_driver_history_locationsCreateWithoutOrderInputSchema';
import { delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema } from './delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema';
import { delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema } from './delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema';
import { delivery_driver_history_locationsUpsertWithWhereUniqueWithoutOrderInputSchema } from './delivery_driver_history_locationsUpsertWithWhereUniqueWithoutOrderInputSchema';
import { delivery_driver_history_locationsCreateManyOrderInputEnvelopeSchema } from './delivery_driver_history_locationsCreateManyOrderInputEnvelopeSchema';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from './delivery_driver_history_locationsWhereUniqueInputSchema';
import { delivery_driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema } from './delivery_driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema';
import { delivery_driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema } from './delivery_driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema';
import { delivery_driver_history_locationsScalarWhereInputSchema } from './delivery_driver_history_locationsScalarWhereInputSchema';

export const delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driver_history_locationsCreateWithoutOrderInputSchema),
					z.lazy(() => delivery_driver_history_locationsCreateWithoutOrderInputSchema).array(),
					z.lazy(() => delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema),
					z.lazy(() => delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema),
					z.lazy(() => delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => delivery_driver_history_locationsUpsertWithWhereUniqueWithoutOrderInputSchema),
					z.lazy(() => delivery_driver_history_locationsUpsertWithWhereUniqueWithoutOrderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_driver_history_locationsCreateManyOrderInputEnvelopeSchema).optional(),
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
					z.lazy(() => delivery_driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema),
					z.lazy(() => delivery_driver_history_locationsUpdateWithWhereUniqueWithoutOrderInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => delivery_driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema),
					z.lazy(() => delivery_driver_history_locationsUpdateManyWithWhereWithoutOrderInputSchema).array(),
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

export default delivery_driver_history_locationsUncheckedUpdateManyWithoutOrderNestedInputSchema;
