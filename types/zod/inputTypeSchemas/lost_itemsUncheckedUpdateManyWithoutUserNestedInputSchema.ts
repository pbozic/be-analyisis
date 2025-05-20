import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsCreateWithoutUserInputSchema } from './lost_itemsCreateWithoutUserInputSchema';
import { lost_itemsUncheckedCreateWithoutUserInputSchema } from './lost_itemsUncheckedCreateWithoutUserInputSchema';
import { lost_itemsCreateOrConnectWithoutUserInputSchema } from './lost_itemsCreateOrConnectWithoutUserInputSchema';
import { lost_itemsUpsertWithWhereUniqueWithoutUserInputSchema } from './lost_itemsUpsertWithWhereUniqueWithoutUserInputSchema';
import { lost_itemsCreateManyUserInputEnvelopeSchema } from './lost_itemsCreateManyUserInputEnvelopeSchema';
import { lost_itemsWhereUniqueInputSchema } from './lost_itemsWhereUniqueInputSchema';
import { lost_itemsUpdateWithWhereUniqueWithoutUserInputSchema } from './lost_itemsUpdateWithWhereUniqueWithoutUserInputSchema';
import { lost_itemsUpdateManyWithWhereWithoutUserInputSchema } from './lost_itemsUpdateManyWithWhereWithoutUserInputSchema';
import { lost_itemsScalarWhereInputSchema } from './lost_itemsScalarWhereInputSchema';

export const lost_itemsUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.lost_itemsUncheckedUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => lost_itemsCreateWithoutUserInputSchema),
					z.lazy(() => lost_itemsCreateWithoutUserInputSchema).array(),
					z.lazy(() => lost_itemsUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => lost_itemsUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => lost_itemsCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => lost_itemsCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => lost_itemsUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => lost_itemsUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => lost_itemsCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => lost_itemsWhereUniqueInputSchema),
					z.lazy(() => lost_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => lost_itemsWhereUniqueInputSchema),
					z.lazy(() => lost_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => lost_itemsWhereUniqueInputSchema),
					z.lazy(() => lost_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => lost_itemsWhereUniqueInputSchema),
					z.lazy(() => lost_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => lost_itemsUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => lost_itemsUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => lost_itemsUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => lost_itemsUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => lost_itemsScalarWhereInputSchema),
					z.lazy(() => lost_itemsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default lost_itemsUncheckedUpdateManyWithoutUserNestedInputSchema;
