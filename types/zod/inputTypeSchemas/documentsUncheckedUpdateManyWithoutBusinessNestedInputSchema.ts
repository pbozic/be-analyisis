import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutBusinessInputSchema } from './documentsCreateWithoutBusinessInputSchema';
import { documentsUncheckedCreateWithoutBusinessInputSchema } from './documentsUncheckedCreateWithoutBusinessInputSchema';
import { documentsCreateOrConnectWithoutBusinessInputSchema } from './documentsCreateOrConnectWithoutBusinessInputSchema';
import { documentsUpsertWithWhereUniqueWithoutBusinessInputSchema } from './documentsUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { documentsCreateManyBusinessInputEnvelopeSchema } from './documentsCreateManyBusinessInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithWhereUniqueWithoutBusinessInputSchema } from './documentsUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { documentsUpdateManyWithWhereWithoutBusinessInputSchema } from './documentsUpdateManyWithWhereWithoutBusinessInputSchema';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';

export const documentsUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.documentsUncheckedUpdateManyWithoutBusinessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutBusinessInputSchema),
					z.lazy(() => documentsCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyBusinessInputEnvelopeSchema).optional(),
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
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => documentsUpdateManyWithWhereWithoutBusinessInputSchema),
					z.lazy(() => documentsUpdateManyWithWhereWithoutBusinessInputSchema).array(),
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

export default documentsUncheckedUpdateManyWithoutBusinessNestedInputSchema;
