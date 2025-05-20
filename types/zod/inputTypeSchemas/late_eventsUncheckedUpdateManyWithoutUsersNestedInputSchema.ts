import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutUsersInputSchema } from './late_eventsCreateWithoutUsersInputSchema';
import { late_eventsUncheckedCreateWithoutUsersInputSchema } from './late_eventsUncheckedCreateWithoutUsersInputSchema';
import { late_eventsCreateOrConnectWithoutUsersInputSchema } from './late_eventsCreateOrConnectWithoutUsersInputSchema';
import { late_eventsUpsertWithWhereUniqueWithoutUsersInputSchema } from './late_eventsUpsertWithWhereUniqueWithoutUsersInputSchema';
import { late_eventsCreateManyUsersInputEnvelopeSchema } from './late_eventsCreateManyUsersInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';
import { late_eventsUpdateWithWhereUniqueWithoutUsersInputSchema } from './late_eventsUpdateWithWhereUniqueWithoutUsersInputSchema';
import { late_eventsUpdateManyWithWhereWithoutUsersInputSchema } from './late_eventsUpdateManyWithWhereWithoutUsersInputSchema';
import { late_eventsScalarWhereInputSchema } from './late_eventsScalarWhereInputSchema';

export const late_eventsUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.late_eventsUncheckedUpdateManyWithoutUsersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => late_eventsCreateWithoutUsersInputSchema),
					z.lazy(() => late_eventsCreateWithoutUsersInputSchema).array(),
					z.lazy(() => late_eventsUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => late_eventsUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => late_eventsCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => late_eventsCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => late_eventsUpsertWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => late_eventsCreateManyUsersInputEnvelopeSchema).optional(),
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
					z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => late_eventsUpdateWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => late_eventsUpdateManyWithWhereWithoutUsersInputSchema),
					z.lazy(() => late_eventsUpdateManyWithWhereWithoutUsersInputSchema).array(),
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

export default late_eventsUncheckedUpdateManyWithoutUsersNestedInputSchema;
