import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyCreateWithoutWordInputSchema } from './word_buyCreateWithoutWordInputSchema';
import { word_buyUncheckedCreateWithoutWordInputSchema } from './word_buyUncheckedCreateWithoutWordInputSchema';
import { word_buyCreateOrConnectWithoutWordInputSchema } from './word_buyCreateOrConnectWithoutWordInputSchema';
import { word_buyUpsertWithWhereUniqueWithoutWordInputSchema } from './word_buyUpsertWithWhereUniqueWithoutWordInputSchema';
import { word_buyCreateManyWordInputEnvelopeSchema } from './word_buyCreateManyWordInputEnvelopeSchema';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';
import { word_buyUpdateWithWhereUniqueWithoutWordInputSchema } from './word_buyUpdateWithWhereUniqueWithoutWordInputSchema';
import { word_buyUpdateManyWithWhereWithoutWordInputSchema } from './word_buyUpdateManyWithWhereWithoutWordInputSchema';
import { word_buyScalarWhereInputSchema } from './word_buyScalarWhereInputSchema';

export const word_buyUncheckedUpdateManyWithoutWordNestedInputSchema: z.ZodType<Prisma.word_buyUncheckedUpdateManyWithoutWordNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => word_buyCreateWithoutWordInputSchema),
					z.lazy(() => word_buyCreateWithoutWordInputSchema).array(),
					z.lazy(() => word_buyUncheckedCreateWithoutWordInputSchema),
					z.lazy(() => word_buyUncheckedCreateWithoutWordInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => word_buyCreateOrConnectWithoutWordInputSchema),
					z.lazy(() => word_buyCreateOrConnectWithoutWordInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => word_buyUpsertWithWhereUniqueWithoutWordInputSchema),
					z.lazy(() => word_buyUpsertWithWhereUniqueWithoutWordInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => word_buyCreateManyWordInputEnvelopeSchema).optional(),
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
					z.lazy(() => word_buyUpdateWithWhereUniqueWithoutWordInputSchema),
					z.lazy(() => word_buyUpdateWithWhereUniqueWithoutWordInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => word_buyUpdateManyWithWhereWithoutWordInputSchema),
					z.lazy(() => word_buyUpdateManyWithWhereWithoutWordInputSchema).array(),
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

export default word_buyUncheckedUpdateManyWithoutWordNestedInputSchema;
