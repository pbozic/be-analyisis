import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsCreateWithoutUserInputSchema } from './reservationsCreateWithoutUserInputSchema';
import { reservationsUncheckedCreateWithoutUserInputSchema } from './reservationsUncheckedCreateWithoutUserInputSchema';
import { reservationsCreateOrConnectWithoutUserInputSchema } from './reservationsCreateOrConnectWithoutUserInputSchema';
import { reservationsUpsertWithWhereUniqueWithoutUserInputSchema } from './reservationsUpsertWithWhereUniqueWithoutUserInputSchema';
import { reservationsCreateManyUserInputEnvelopeSchema } from './reservationsCreateManyUserInputEnvelopeSchema';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';
import { reservationsUpdateWithWhereUniqueWithoutUserInputSchema } from './reservationsUpdateWithWhereUniqueWithoutUserInputSchema';
import { reservationsUpdateManyWithWhereWithoutUserInputSchema } from './reservationsUpdateManyWithWhereWithoutUserInputSchema';
import { reservationsScalarWhereInputSchema } from './reservationsScalarWhereInputSchema';

export const reservationsUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.reservationsUncheckedUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => reservationsCreateWithoutUserInputSchema),
					z.lazy(() => reservationsCreateWithoutUserInputSchema).array(),
					z.lazy(() => reservationsUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => reservationsUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => reservationsCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => reservationsCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => reservationsUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => reservationsUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => reservationsCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => reservationsWhereUniqueInputSchema),
					z.lazy(() => reservationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => reservationsWhereUniqueInputSchema),
					z.lazy(() => reservationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => reservationsWhereUniqueInputSchema),
					z.lazy(() => reservationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => reservationsWhereUniqueInputSchema),
					z.lazy(() => reservationsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => reservationsUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => reservationsUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => reservationsUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => reservationsUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => reservationsScalarWhereInputSchema),
					z.lazy(() => reservationsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default reservationsUncheckedUpdateManyWithoutUserNestedInputSchema;
