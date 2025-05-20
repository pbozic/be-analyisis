import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesCreateWithoutProductInputSchema } from './local_pricesCreateWithoutProductInputSchema';
import { local_pricesUncheckedCreateWithoutProductInputSchema } from './local_pricesUncheckedCreateWithoutProductInputSchema';
import { local_pricesCreateOrConnectWithoutProductInputSchema } from './local_pricesCreateOrConnectWithoutProductInputSchema';
import { local_pricesUpsertWithWhereUniqueWithoutProductInputSchema } from './local_pricesUpsertWithWhereUniqueWithoutProductInputSchema';
import { local_pricesCreateManyProductInputEnvelopeSchema } from './local_pricesCreateManyProductInputEnvelopeSchema';
import { local_pricesWhereUniqueInputSchema } from './local_pricesWhereUniqueInputSchema';
import { local_pricesUpdateWithWhereUniqueWithoutProductInputSchema } from './local_pricesUpdateWithWhereUniqueWithoutProductInputSchema';
import { local_pricesUpdateManyWithWhereWithoutProductInputSchema } from './local_pricesUpdateManyWithWhereWithoutProductInputSchema';
import { local_pricesScalarWhereInputSchema } from './local_pricesScalarWhereInputSchema';

export const local_pricesUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.local_pricesUpdateManyWithoutProductNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => local_pricesCreateWithoutProductInputSchema),
					z.lazy(() => local_pricesCreateWithoutProductInputSchema).array(),
					z.lazy(() => local_pricesUncheckedCreateWithoutProductInputSchema),
					z.lazy(() => local_pricesUncheckedCreateWithoutProductInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => local_pricesCreateOrConnectWithoutProductInputSchema),
					z.lazy(() => local_pricesCreateOrConnectWithoutProductInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => local_pricesUpsertWithWhereUniqueWithoutProductInputSchema),
					z.lazy(() => local_pricesUpsertWithWhereUniqueWithoutProductInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => local_pricesCreateManyProductInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => local_pricesWhereUniqueInputSchema),
					z.lazy(() => local_pricesWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => local_pricesWhereUniqueInputSchema),
					z.lazy(() => local_pricesWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => local_pricesWhereUniqueInputSchema),
					z.lazy(() => local_pricesWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => local_pricesWhereUniqueInputSchema),
					z.lazy(() => local_pricesWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => local_pricesUpdateWithWhereUniqueWithoutProductInputSchema),
					z.lazy(() => local_pricesUpdateWithWhereUniqueWithoutProductInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => local_pricesUpdateManyWithWhereWithoutProductInputSchema),
					z.lazy(() => local_pricesUpdateManyWithWhereWithoutProductInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => local_pricesScalarWhereInputSchema),
					z.lazy(() => local_pricesScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default local_pricesUpdateManyWithoutProductNestedInputSchema;
