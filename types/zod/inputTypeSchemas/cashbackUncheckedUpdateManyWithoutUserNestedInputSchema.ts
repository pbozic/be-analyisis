import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateWithoutUserInputSchema } from './cashbackCreateWithoutUserInputSchema';
import { cashbackUncheckedCreateWithoutUserInputSchema } from './cashbackUncheckedCreateWithoutUserInputSchema';
import { cashbackCreateOrConnectWithoutUserInputSchema } from './cashbackCreateOrConnectWithoutUserInputSchema';
import { cashbackUpsertWithWhereUniqueWithoutUserInputSchema } from './cashbackUpsertWithWhereUniqueWithoutUserInputSchema';
import { cashbackCreateManyUserInputEnvelopeSchema } from './cashbackCreateManyUserInputEnvelopeSchema';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';
import { cashbackUpdateWithWhereUniqueWithoutUserInputSchema } from './cashbackUpdateWithWhereUniqueWithoutUserInputSchema';
import { cashbackUpdateManyWithWhereWithoutUserInputSchema } from './cashbackUpdateManyWithWhereWithoutUserInputSchema';
import { cashbackScalarWhereInputSchema } from './cashbackScalarWhereInputSchema';

export const cashbackUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.cashbackUncheckedUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => cashbackCreateWithoutUserInputSchema),
					z.lazy(() => cashbackCreateWithoutUserInputSchema).array(),
					z.lazy(() => cashbackUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => cashbackUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => cashbackCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => cashbackCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => cashbackUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => cashbackUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => cashbackCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => cashbackWhereUniqueInputSchema),
					z.lazy(() => cashbackWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => cashbackWhereUniqueInputSchema),
					z.lazy(() => cashbackWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => cashbackWhereUniqueInputSchema),
					z.lazy(() => cashbackWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => cashbackWhereUniqueInputSchema),
					z.lazy(() => cashbackWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => cashbackUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => cashbackUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => cashbackUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => cashbackUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => cashbackScalarWhereInputSchema),
					z.lazy(() => cashbackScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default cashbackUncheckedUpdateManyWithoutUserNestedInputSchema;
