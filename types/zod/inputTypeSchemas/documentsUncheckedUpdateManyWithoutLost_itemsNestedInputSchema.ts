import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutLost_itemsInputSchema } from './documentsCreateWithoutLost_itemsInputSchema';
import { documentsUncheckedCreateWithoutLost_itemsInputSchema } from './documentsUncheckedCreateWithoutLost_itemsInputSchema';
import { documentsCreateOrConnectWithoutLost_itemsInputSchema } from './documentsCreateOrConnectWithoutLost_itemsInputSchema';
import { documentsUpsertWithWhereUniqueWithoutLost_itemsInputSchema } from './documentsUpsertWithWhereUniqueWithoutLost_itemsInputSchema';
import { documentsCreateManyLost_itemsInputEnvelopeSchema } from './documentsCreateManyLost_itemsInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithWhereUniqueWithoutLost_itemsInputSchema } from './documentsUpdateWithWhereUniqueWithoutLost_itemsInputSchema';
import { documentsUpdateManyWithWhereWithoutLost_itemsInputSchema } from './documentsUpdateManyWithWhereWithoutLost_itemsInputSchema';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';

export const documentsUncheckedUpdateManyWithoutLost_itemsNestedInputSchema: z.ZodType<Prisma.documentsUncheckedUpdateManyWithoutLost_itemsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutLost_itemsInputSchema),
					z.lazy(() => documentsCreateWithoutLost_itemsInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutLost_itemsInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutLost_itemsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutLost_itemsInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutLost_itemsInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutLost_itemsInputSchema),
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutLost_itemsInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyLost_itemsInputEnvelopeSchema).optional(),
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
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutLost_itemsInputSchema),
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutLost_itemsInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => documentsUpdateManyWithWhereWithoutLost_itemsInputSchema),
					z.lazy(() => documentsUpdateManyWithWhereWithoutLost_itemsInputSchema).array(),
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

export default documentsUncheckedUpdateManyWithoutLost_itemsNestedInputSchema;
