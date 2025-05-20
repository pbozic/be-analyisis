import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutIconInputSchema } from './categoriesCreateWithoutIconInputSchema';
import { categoriesUncheckedCreateWithoutIconInputSchema } from './categoriesUncheckedCreateWithoutIconInputSchema';
import { categoriesCreateOrConnectWithoutIconInputSchema } from './categoriesCreateOrConnectWithoutIconInputSchema';
import { categoriesUpsertWithWhereUniqueWithoutIconInputSchema } from './categoriesUpsertWithWhereUniqueWithoutIconInputSchema';
import { categoriesCreateManyIconInputEnvelopeSchema } from './categoriesCreateManyIconInputEnvelopeSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithWhereUniqueWithoutIconInputSchema } from './categoriesUpdateWithWhereUniqueWithoutIconInputSchema';
import { categoriesUpdateManyWithWhereWithoutIconInputSchema } from './categoriesUpdateManyWithWhereWithoutIconInputSchema';
import { categoriesScalarWhereInputSchema } from './categoriesScalarWhereInputSchema';

export const categoriesUpdateManyWithoutIconNestedInputSchema: z.ZodType<Prisma.categoriesUpdateManyWithoutIconNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutIconInputSchema),
					z.lazy(() => categoriesCreateWithoutIconInputSchema).array(),
					z.lazy(() => categoriesUncheckedCreateWithoutIconInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutIconInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => categoriesCreateOrConnectWithoutIconInputSchema),
					z.lazy(() => categoriesCreateOrConnectWithoutIconInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => categoriesUpsertWithWhereUniqueWithoutIconInputSchema),
					z.lazy(() => categoriesUpsertWithWhereUniqueWithoutIconInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => categoriesCreateManyIconInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => categoriesWhereUniqueInputSchema),
					z.lazy(() => categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => categoriesWhereUniqueInputSchema),
					z.lazy(() => categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => categoriesWhereUniqueInputSchema),
					z.lazy(() => categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => categoriesWhereUniqueInputSchema),
					z.lazy(() => categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => categoriesUpdateWithWhereUniqueWithoutIconInputSchema),
					z.lazy(() => categoriesUpdateWithWhereUniqueWithoutIconInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => categoriesUpdateManyWithWhereWithoutIconInputSchema),
					z.lazy(() => categoriesUpdateManyWithWhereWithoutIconInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => categoriesScalarWhereInputSchema),
					z.lazy(() => categoriesScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default categoriesUpdateManyWithoutIconNestedInputSchema;
