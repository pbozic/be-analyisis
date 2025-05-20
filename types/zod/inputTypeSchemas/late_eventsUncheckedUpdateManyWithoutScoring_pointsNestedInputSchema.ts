import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutScoring_pointsInputSchema } from './late_eventsCreateWithoutScoring_pointsInputSchema';
import { late_eventsUncheckedCreateWithoutScoring_pointsInputSchema } from './late_eventsUncheckedCreateWithoutScoring_pointsInputSchema';
import { late_eventsCreateOrConnectWithoutScoring_pointsInputSchema } from './late_eventsCreateOrConnectWithoutScoring_pointsInputSchema';
import { late_eventsUpsertWithWhereUniqueWithoutScoring_pointsInputSchema } from './late_eventsUpsertWithWhereUniqueWithoutScoring_pointsInputSchema';
import { late_eventsCreateManyScoring_pointsInputEnvelopeSchema } from './late_eventsCreateManyScoring_pointsInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithWhereUniqueWithoutScoring_pointsInputSchema } from './late_eventsUpdateWithWhereUniqueWithoutScoring_pointsInputSchema';
import { late_eventsUpdateManyWithWhereWithoutScoring_pointsInputSchema } from './late_eventsUpdateManyWithWhereWithoutScoring_pointsInputSchema';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';

export const late_eventsUncheckedUpdateManyWithoutScoring_pointsNestedInputSchema: z.ZodType<Prisma.late_eventsUncheckedUpdateManyWithoutScoring_pointsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => late_eventsCreateWithoutScoring_pointsInputSchema),
					z.lazy(() => late_eventsCreateWithoutScoring_pointsInputSchema).array(),
					z.lazy(() => late_eventsUncheckedCreateWithoutScoring_pointsInputSchema),
					z.lazy(() => late_eventsUncheckedCreateWithoutScoring_pointsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => late_eventsCreateOrConnectWithoutScoring_pointsInputSchema),
					z.lazy(() => late_eventsCreateOrConnectWithoutScoring_pointsInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutScoring_pointsInputSchema),
					z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutScoring_pointsInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => late_eventsCreateManyScoring_pointsInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => late_eventsWhereUniqueInputSchema),
					z.lazy(() => late_eventsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => late_eventsWhereUniqueInputSchema),
					z.lazy(() => late_eventsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => late_eventsWhereUniqueInputSchema),
					z.lazy(() => late_eventsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => late_eventsWhereUniqueInputSchema),
					z.lazy(() => late_eventsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutScoring_pointsInputSchema),
					z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutScoring_pointsInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => late_eventsUpdateManyWithWhereWithoutScoring_pointsInputSchema),
					z.lazy(() => late_eventsUpdateManyWithWhereWithoutScoring_pointsInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => late_eventsScalarWhereInputSchema),
					z.lazy(() => late_eventsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default late_eventsUncheckedUpdateManyWithoutScoring_pointsNestedInputSchema;
