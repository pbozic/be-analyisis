import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutDriversInputSchema } from './documentsCreateWithoutDriversInputSchema';
import { documentsUncheckedCreateWithoutDriversInputSchema } from './documentsUncheckedCreateWithoutDriversInputSchema';
import { documentsCreateOrConnectWithoutDriversInputSchema } from './documentsCreateOrConnectWithoutDriversInputSchema';
import { documentsUpsertWithWhereUniqueWithoutDriversInputSchema } from './documentsUpsertWithWhereUniqueWithoutDriversInputSchema';
import { documentsCreateManyDriversInputEnvelopeSchema } from './documentsCreateManyDriversInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithWhereUniqueWithoutDriversInputSchema } from './documentsUpdateWithWhereUniqueWithoutDriversInputSchema';
import { documentsUpdateManyWithWhereWithoutDriversInputSchema } from './documentsUpdateManyWithWhereWithoutDriversInputSchema';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';

export const documentsUncheckedUpdateManyWithoutDriversNestedInputSchema: z.ZodType<Prisma.documentsUncheckedUpdateManyWithoutDriversNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutDriversInputSchema),
					z.lazy(() => documentsCreateWithoutDriversInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutDriversInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutDriversInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutDriversInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutDriversInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutDriversInputSchema),
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutDriversInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyDriversInputEnvelopeSchema).optional(),
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
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutDriversInputSchema),
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutDriversInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => documentsUpdateManyWithWhereWithoutDriversInputSchema),
					z.lazy(() => documentsUpdateManyWithWhereWithoutDriversInputSchema).array(),
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

export default documentsUncheckedUpdateManyWithoutDriversNestedInputSchema;
