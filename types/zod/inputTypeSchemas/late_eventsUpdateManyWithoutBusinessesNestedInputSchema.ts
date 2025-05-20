import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutBusinessesInputSchema } from './late_eventsCreateWithoutBusinessesInputSchema';
import { late_eventsUncheckedCreateWithoutBusinessesInputSchema } from './late_eventsUncheckedCreateWithoutBusinessesInputSchema';
import { late_eventsCreateOrConnectWithoutBusinessesInputSchema } from './late_eventsCreateOrConnectWithoutBusinessesInputSchema';
import { late_eventsUpsertWithWhereUniqueWithoutBusinessesInputSchema } from './late_eventsUpsertWithWhereUniqueWithoutBusinessesInputSchema';
import { late_eventsCreateManyBusinessesInputEnvelopeSchema } from './late_eventsCreateManyBusinessesInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithWhereUniqueWithoutBusinessesInputSchema } from './late_eventsUpdateWithWhereUniqueWithoutBusinessesInputSchema';
import { late_eventsUpdateManyWithWhereWithoutBusinessesInputSchema } from './late_eventsUpdateManyWithWhereWithoutBusinessesInputSchema';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';

export const late_eventsUpdateManyWithoutBusinessesNestedInputSchema: z.ZodType<Prisma.late_eventsUpdateManyWithoutBusinessesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => late_eventsCreateWithoutBusinessesInputSchema),
					z.lazy(() => late_eventsCreateWithoutBusinessesInputSchema).array(),
					z.lazy(() => late_eventsUncheckedCreateWithoutBusinessesInputSchema),
					z.lazy(() => late_eventsUncheckedCreateWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => late_eventsCreateOrConnectWithoutBusinessesInputSchema),
					z.lazy(() => late_eventsCreateOrConnectWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutBusinessesInputSchema),
					z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => late_eventsCreateManyBusinessesInputEnvelopeSchema).optional(),
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
					z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutBusinessesInputSchema),
					z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => late_eventsUpdateManyWithWhereWithoutBusinessesInputSchema),
					z.lazy(() => late_eventsUpdateManyWithWhereWithoutBusinessesInputSchema).array(),
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

export default late_eventsUpdateManyWithoutBusinessesNestedInputSchema;
