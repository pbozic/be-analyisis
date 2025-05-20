import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyCreateWithoutUserInputSchema } from './flag_historyCreateWithoutUserInputSchema';
import { flag_historyUncheckedCreateWithoutUserInputSchema } from './flag_historyUncheckedCreateWithoutUserInputSchema';
import { flag_historyCreateOrConnectWithoutUserInputSchema } from './flag_historyCreateOrConnectWithoutUserInputSchema';
import { flag_historyUpsertWithWhereUniqueWithoutUserInputSchema } from './flag_historyUpsertWithWhereUniqueWithoutUserInputSchema';
import { flag_historyCreateManyUserInputEnvelopeSchema } from './flag_historyCreateManyUserInputEnvelopeSchema';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';
import { flag_historyUpdateWithWhereUniqueWithoutUserInputSchema } from './flag_historyUpdateWithWhereUniqueWithoutUserInputSchema';
import { flag_historyUpdateManyWithWhereWithoutUserInputSchema } from './flag_historyUpdateManyWithWhereWithoutUserInputSchema';
import { flag_historyScalarWhereInputSchema } from './flag_historyScalarWhereInputSchema';

export const flag_historyUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.flag_historyUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => flag_historyCreateWithoutUserInputSchema),
					z.lazy(() => flag_historyCreateWithoutUserInputSchema).array(),
					z.lazy(() => flag_historyUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => flag_historyUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => flag_historyCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => flag_historyCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => flag_historyUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => flag_historyUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => flag_historyCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => flag_historyWhereUniqueInputSchema),
					z.lazy(() => flag_historyWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => flag_historyWhereUniqueInputSchema),
					z.lazy(() => flag_historyWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => flag_historyWhereUniqueInputSchema),
					z.lazy(() => flag_historyWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => flag_historyWhereUniqueInputSchema),
					z.lazy(() => flag_historyWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => flag_historyUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => flag_historyUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => flag_historyUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => flag_historyUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => flag_historyScalarWhereInputSchema),
					z.lazy(() => flag_historyScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default flag_historyUpdateManyWithoutUserNestedInputSchema;
