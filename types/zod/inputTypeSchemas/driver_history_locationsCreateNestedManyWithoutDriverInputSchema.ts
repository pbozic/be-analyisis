import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateWithoutDriverInputSchema } from './driver_history_locationsCreateWithoutDriverInputSchema';
import { driver_history_locationsUncheckedCreateWithoutDriverInputSchema } from './driver_history_locationsUncheckedCreateWithoutDriverInputSchema';
import { driver_history_locationsCreateOrConnectWithoutDriverInputSchema } from './driver_history_locationsCreateOrConnectWithoutDriverInputSchema';
import { driver_history_locationsCreateManyDriverInputEnvelopeSchema } from './driver_history_locationsCreateManyDriverInputEnvelopeSchema';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';

export const driver_history_locationsCreateNestedManyWithoutDriverInputSchema: z.ZodType<Prisma.driver_history_locationsCreateNestedManyWithoutDriverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driver_history_locationsCreateWithoutDriverInputSchema),
					z.lazy(() => driver_history_locationsCreateWithoutDriverInputSchema).array(),
					z.lazy(() => driver_history_locationsUncheckedCreateWithoutDriverInputSchema),
					z.lazy(() => driver_history_locationsUncheckedCreateWithoutDriverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => driver_history_locationsCreateOrConnectWithoutDriverInputSchema),
					z.lazy(() => driver_history_locationsCreateOrConnectWithoutDriverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => driver_history_locationsCreateManyDriverInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default driver_history_locationsCreateNestedManyWithoutDriverInputSchema;
