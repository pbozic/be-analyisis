import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutParent_businessInputSchema } from './businessCreateWithoutParent_businessInputSchema';
import { businessUncheckedCreateWithoutParent_businessInputSchema } from './businessUncheckedCreateWithoutParent_businessInputSchema';
import { businessCreateOrConnectWithoutParent_businessInputSchema } from './businessCreateOrConnectWithoutParent_businessInputSchema';
import { businessUpsertWithWhereUniqueWithoutParent_businessInputSchema } from './businessUpsertWithWhereUniqueWithoutParent_businessInputSchema';
import { businessCreateManyParent_businessInputEnvelopeSchema } from './businessCreateManyParent_businessInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithWhereUniqueWithoutParent_businessInputSchema } from './businessUpdateWithWhereUniqueWithoutParent_businessInputSchema';
import { businessUpdateManyWithWhereWithoutParent_businessInputSchema } from './businessUpdateManyWithWhereWithoutParent_businessInputSchema';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';

export const businessUncheckedUpdateManyWithoutParent_businessNestedInputSchema: z.ZodType<Prisma.businessUncheckedUpdateManyWithoutParent_businessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutParent_businessInputSchema),
					z.lazy(() => businessCreateWithoutParent_businessInputSchema).array(),
					z.lazy(() => businessUncheckedCreateWithoutParent_businessInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutParent_businessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => businessCreateOrConnectWithoutParent_businessInputSchema),
					z.lazy(() => businessCreateOrConnectWithoutParent_businessInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => businessUpsertWithWhereUniqueWithoutParent_businessInputSchema),
					z.lazy(() => businessUpsertWithWhereUniqueWithoutParent_businessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => businessCreateManyParent_businessInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => businessWhereUniqueInputSchema),
					z.lazy(() => businessWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => businessWhereUniqueInputSchema),
					z.lazy(() => businessWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => businessWhereUniqueInputSchema),
					z.lazy(() => businessWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => businessWhereUniqueInputSchema),
					z.lazy(() => businessWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateWithWhereUniqueWithoutParent_businessInputSchema),
					z.lazy(() => businessUpdateWithWhereUniqueWithoutParent_businessInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => businessUpdateManyWithWhereWithoutParent_businessInputSchema),
					z.lazy(() => businessUpdateManyWithWhereWithoutParent_businessInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => businessScalarWhereInputSchema),
					z.lazy(() => businessScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default businessUncheckedUpdateManyWithoutParent_businessNestedInputSchema;
