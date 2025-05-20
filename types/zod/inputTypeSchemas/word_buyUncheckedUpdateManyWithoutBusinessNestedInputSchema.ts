import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyCreateWithoutBusinessInputSchema } from './word_buyCreateWithoutBusinessInputSchema';
import { word_buyUncheckedCreateWithoutBusinessInputSchema } from './word_buyUncheckedCreateWithoutBusinessInputSchema';
import { word_buyCreateOrConnectWithoutBusinessInputSchema } from './word_buyCreateOrConnectWithoutBusinessInputSchema';
import { word_buyUpsertWithWhereUniqueWithoutBusinessInputSchema } from './word_buyUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { word_buyCreateManyBusinessInputEnvelopeSchema } from './word_buyCreateManyBusinessInputEnvelopeSchema';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';
import { word_buyUpdateWithWhereUniqueWithoutBusinessInputSchema } from './word_buyUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { word_buyUpdateManyWithWhereWithoutBusinessInputSchema } from './word_buyUpdateManyWithWhereWithoutBusinessInputSchema';
import { word_buyScalarWhereInputSchema } from './word_buyScalarWhereInputSchema';

export const word_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.word_buyUncheckedUpdateManyWithoutBusinessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => word_buyCreateWithoutBusinessInputSchema),
					z.lazy(() => word_buyCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => word_buyUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => word_buyUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => word_buyCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => word_buyCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => word_buyUpsertWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => word_buyUpsertWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => word_buyCreateManyBusinessInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => word_buyWhereUniqueInputSchema),
					z.lazy(() => word_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => word_buyWhereUniqueInputSchema),
					z.lazy(() => word_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => word_buyWhereUniqueInputSchema),
					z.lazy(() => word_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => word_buyWhereUniqueInputSchema),
					z.lazy(() => word_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => word_buyUpdateWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => word_buyUpdateWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => word_buyUpdateManyWithWhereWithoutBusinessInputSchema),
					z.lazy(() => word_buyUpdateManyWithWhereWithoutBusinessInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => word_buyScalarWhereInputSchema),
					z.lazy(() => word_buyScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default word_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema;
