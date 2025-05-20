import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutUserInputSchema } from './documentsCreateWithoutUserInputSchema';
import { documentsUncheckedCreateWithoutUserInputSchema } from './documentsUncheckedCreateWithoutUserInputSchema';
import { documentsCreateOrConnectWithoutUserInputSchema } from './documentsCreateOrConnectWithoutUserInputSchema';
import { documentsUpsertWithWhereUniqueWithoutUserInputSchema } from './documentsUpsertWithWhereUniqueWithoutUserInputSchema';
import { documentsCreateManyUserInputEnvelopeSchema } from './documentsCreateManyUserInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithWhereUniqueWithoutUserInputSchema } from './documentsUpdateWithWhereUniqueWithoutUserInputSchema';
import { documentsUpdateManyWithWhereWithoutUserInputSchema } from './documentsUpdateManyWithWhereWithoutUserInputSchema';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';

export const documentsUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.documentsUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutUserInputSchema),
					z.lazy(() => documentsCreateWithoutUserInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => documentsUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => documentsUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => documentsScalarWhereInputSchema),
					z.lazy(() => documentsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default documentsUpdateManyWithoutUserNestedInputSchema;
