import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_history_locationsCreateWithoutOrderInputSchema } from './driver_history_locationsCreateWithoutOrderInputSchema';
import { driver_history_locationsUncheckedCreateWithoutOrderInputSchema } from './driver_history_locationsUncheckedCreateWithoutOrderInputSchema';
import { driver_history_locationsCreateOrConnectWithoutOrderInputSchema } from './driver_history_locationsCreateOrConnectWithoutOrderInputSchema';
import { driver_history_locationsCreateManyOrderInputEnvelopeSchema } from './driver_history_locationsCreateManyOrderInputEnvelopeSchema';
import { driver_history_locationsWhereUniqueInputSchema } from './driver_history_locationsWhereUniqueInputSchema';

export const driver_history_locationsCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.driver_history_locationsCreateNestedManyWithoutOrderInput> =
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
			createMany: z.lazy(() => driver_history_locationsCreateManyOrderInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema),
					z.lazy(() => driver_history_locationsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default driver_history_locationsCreateNestedManyWithoutOrderInputSchema;
