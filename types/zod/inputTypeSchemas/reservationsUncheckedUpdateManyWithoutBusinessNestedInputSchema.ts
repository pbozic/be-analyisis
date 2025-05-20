import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsCreateWithoutBusinessInputSchema } from './reservationsCreateWithoutBusinessInputSchema';
import { reservationsUncheckedCreateWithoutBusinessInputSchema } from './reservationsUncheckedCreateWithoutBusinessInputSchema';
import { reservationsCreateOrConnectWithoutBusinessInputSchema } from './reservationsCreateOrConnectWithoutBusinessInputSchema';
import { reservationsUpsertWithWhereUniqueWithoutBusinessInputSchema } from './reservationsUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { reservationsCreateManyBusinessInputEnvelopeSchema } from './reservationsCreateManyBusinessInputEnvelopeSchema';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';
import { reservationsUpdateWithWhereUniqueWithoutBusinessInputSchema } from './reservationsUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { reservationsUpdateManyWithWhereWithoutBusinessInputSchema } from './reservationsUpdateManyWithWhereWithoutBusinessInputSchema';
import { reservationsScalarWhereInputSchema } from './reservationsScalarWhereInputSchema';

export const reservationsUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.reservationsUncheckedUpdateManyWithoutBusinessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => reservationsCreateWithoutBusinessInputSchema),
					z.lazy(() => reservationsCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => reservationsUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => reservationsUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => reservationsCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => reservationsCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => reservationsUpsertWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => reservationsUpsertWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => reservationsCreateManyBusinessInputEnvelopeSchema).optional(),
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
					z.lazy(() => reservationsUpdateWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => reservationsUpdateWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => reservationsUpdateManyWithWhereWithoutBusinessInputSchema),
					z.lazy(() => reservationsUpdateManyWithWhereWithoutBusinessInputSchema).array(),
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

export default reservationsUncheckedUpdateManyWithoutBusinessNestedInputSchema;
