import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsCreateWithoutBundlesInputSchema } from './wordsCreateWithoutBundlesInputSchema';
import { wordsUncheckedCreateWithoutBundlesInputSchema } from './wordsUncheckedCreateWithoutBundlesInputSchema';
import { wordsCreateOrConnectWithoutBundlesInputSchema } from './wordsCreateOrConnectWithoutBundlesInputSchema';
import { wordsUpsertWithWhereUniqueWithoutBundlesInputSchema } from './wordsUpsertWithWhereUniqueWithoutBundlesInputSchema';
import { wordsWhereUniqueInputSchema } from './wordsWhereUniqueInputSchema';
import { wordsUpdateWithWhereUniqueWithoutBundlesInputSchema } from './wordsUpdateWithWhereUniqueWithoutBundlesInputSchema';
import { wordsUpdateManyWithWhereWithoutBundlesInputSchema } from './wordsUpdateManyWithWhereWithoutBundlesInputSchema';
import { wordsScalarWhereInputSchema } from './wordsScalarWhereInputSchema';

export const wordsUncheckedUpdateManyWithoutBundlesNestedInputSchema: z.ZodType<Prisma.wordsUncheckedUpdateManyWithoutBundlesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => wordsCreateWithoutBundlesInputSchema),
					z.lazy(() => wordsCreateWithoutBundlesInputSchema).array(),
					z.lazy(() => wordsUncheckedCreateWithoutBundlesInputSchema),
					z.lazy(() => wordsUncheckedCreateWithoutBundlesInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => wordsCreateOrConnectWithoutBundlesInputSchema),
					z.lazy(() => wordsCreateOrConnectWithoutBundlesInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => wordsUpsertWithWhereUniqueWithoutBundlesInputSchema),
					z.lazy(() => wordsUpsertWithWhereUniqueWithoutBundlesInputSchema).array(),
				])
				.optional(),
			set: z
				.union([z.lazy(() => wordsWhereUniqueInputSchema), z.lazy(() => wordsWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => wordsWhereUniqueInputSchema), z.lazy(() => wordsWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => wordsWhereUniqueInputSchema), z.lazy(() => wordsWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => wordsWhereUniqueInputSchema), z.lazy(() => wordsWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => wordsUpdateWithWhereUniqueWithoutBundlesInputSchema),
					z.lazy(() => wordsUpdateWithWhereUniqueWithoutBundlesInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => wordsUpdateManyWithWhereWithoutBundlesInputSchema),
					z.lazy(() => wordsUpdateManyWithWhereWithoutBundlesInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => wordsScalarWhereInputSchema), z.lazy(() => wordsScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export default wordsUncheckedUpdateManyWithoutBundlesNestedInputSchema;
