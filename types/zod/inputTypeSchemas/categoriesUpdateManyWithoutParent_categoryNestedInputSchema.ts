import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutParent_categoryInputSchema } from './categoriesCreateWithoutParent_categoryInputSchema';
import { categoriesUncheckedCreateWithoutParent_categoryInputSchema } from './categoriesUncheckedCreateWithoutParent_categoryInputSchema';
import { categoriesCreateOrConnectWithoutParent_categoryInputSchema } from './categoriesCreateOrConnectWithoutParent_categoryInputSchema';
import { categoriesUpsertWithWhereUniqueWithoutParent_categoryInputSchema } from './categoriesUpsertWithWhereUniqueWithoutParent_categoryInputSchema';
import { categoriesCreateManyParent_categoryInputEnvelopeSchema } from './categoriesCreateManyParent_categoryInputEnvelopeSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateWithWhereUniqueWithoutParent_categoryInputSchema } from './categoriesUpdateWithWhereUniqueWithoutParent_categoryInputSchema';
import { categoriesUpdateManyWithWhereWithoutParent_categoryInputSchema } from './categoriesUpdateManyWithWhereWithoutParent_categoryInputSchema';
import { categoriesScalarWhereInputSchema } from './categoriesScalarWhereInputSchema';

export const categoriesUpdateManyWithoutParent_categoryNestedInputSchema: z.ZodType<Prisma.categoriesUpdateManyWithoutParent_categoryNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesCreateWithoutParent_categoryInputSchema).array(),
					z.lazy(() => categoriesUncheckedCreateWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutParent_categoryInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => categoriesCreateOrConnectWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesCreateOrConnectWithoutParent_categoryInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => categoriesUpsertWithWhereUniqueWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesUpsertWithWhereUniqueWithoutParent_categoryInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => categoriesCreateManyParent_categoryInputEnvelopeSchema).optional(),
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
					z.lazy(() => categoriesUpdateWithWhereUniqueWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesUpdateWithWhereUniqueWithoutParent_categoryInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => categoriesUpdateManyWithWhereWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesUpdateManyWithWhereWithoutParent_categoryInputSchema).array(),
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

export default categoriesUpdateManyWithoutParent_categoryNestedInputSchema;
