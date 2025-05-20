import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_bundlesCreateWithoutWordsInputSchema } from './word_bundlesCreateWithoutWordsInputSchema';
import { word_bundlesUncheckedCreateWithoutWordsInputSchema } from './word_bundlesUncheckedCreateWithoutWordsInputSchema';
import { word_bundlesCreateOrConnectWithoutWordsInputSchema } from './word_bundlesCreateOrConnectWithoutWordsInputSchema';
import { word_bundlesUpsertWithWhereUniqueWithoutWordsInputSchema } from './word_bundlesUpsertWithWhereUniqueWithoutWordsInputSchema';
import { word_bundlesWhereUniqueInputSchema } from './word_bundlesWhereUniqueInputSchema';
import { word_bundlesUpdateWithWhereUniqueWithoutWordsInputSchema } from './word_bundlesUpdateWithWhereUniqueWithoutWordsInputSchema';
import { word_bundlesUpdateManyWithWhereWithoutWordsInputSchema } from './word_bundlesUpdateManyWithWhereWithoutWordsInputSchema';
import { word_bundlesScalarWhereInputSchema } from './word_bundlesScalarWhereInputSchema';

export const word_bundlesUpdateManyWithoutWordsNestedInputSchema: z.ZodType<Prisma.word_bundlesUpdateManyWithoutWordsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => word_bundlesCreateWithoutWordsInputSchema),
					z.lazy(() => word_bundlesCreateWithoutWordsInputSchema).array(),
					z.lazy(() => word_bundlesUncheckedCreateWithoutWordsInputSchema),
					z.lazy(() => word_bundlesUncheckedCreateWithoutWordsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => word_bundlesCreateOrConnectWithoutWordsInputSchema),
					z.lazy(() => word_bundlesCreateOrConnectWithoutWordsInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => word_bundlesUpsertWithWhereUniqueWithoutWordsInputSchema),
					z.lazy(() => word_bundlesUpsertWithWhereUniqueWithoutWordsInputSchema).array(),
				])
				.optional(),
			set: z
				.union([
					z.lazy(() => word_bundlesWhereUniqueInputSchema),
					z.lazy(() => word_bundlesWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => word_bundlesWhereUniqueInputSchema),
					z.lazy(() => word_bundlesWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => word_bundlesWhereUniqueInputSchema),
					z.lazy(() => word_bundlesWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => word_bundlesWhereUniqueInputSchema),
					z.lazy(() => word_bundlesWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => word_bundlesUpdateWithWhereUniqueWithoutWordsInputSchema),
					z.lazy(() => word_bundlesUpdateWithWhereUniqueWithoutWordsInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => word_bundlesUpdateManyWithWhereWithoutWordsInputSchema),
					z.lazy(() => word_bundlesUpdateManyWithWhereWithoutWordsInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => word_bundlesScalarWhereInputSchema),
					z.lazy(() => word_bundlesScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default word_bundlesUpdateManyWithoutWordsNestedInputSchema;
