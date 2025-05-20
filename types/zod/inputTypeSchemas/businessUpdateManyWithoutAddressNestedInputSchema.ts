import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutAddressInputSchema } from './businessCreateWithoutAddressInputSchema';
import { businessUncheckedCreateWithoutAddressInputSchema } from './businessUncheckedCreateWithoutAddressInputSchema';
import { businessCreateOrConnectWithoutAddressInputSchema } from './businessCreateOrConnectWithoutAddressInputSchema';
import { businessUpsertWithWhereUniqueWithoutAddressInputSchema } from './businessUpsertWithWhereUniqueWithoutAddressInputSchema';
import { businessCreateManyAddressInputEnvelopeSchema } from './businessCreateManyAddressInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithWhereUniqueWithoutAddressInputSchema } from './businessUpdateWithWhereUniqueWithoutAddressInputSchema';
import { businessUpdateManyWithWhereWithoutAddressInputSchema } from './businessUpdateManyWithWhereWithoutAddressInputSchema';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';

export const businessUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.businessUpdateManyWithoutAddressNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutAddressInputSchema),
					z.lazy(() => businessCreateWithoutAddressInputSchema).array(),
					z.lazy(() => businessUncheckedCreateWithoutAddressInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutAddressInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => businessCreateOrConnectWithoutAddressInputSchema),
					z.lazy(() => businessCreateOrConnectWithoutAddressInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => businessUpsertWithWhereUniqueWithoutAddressInputSchema),
					z.lazy(() => businessUpsertWithWhereUniqueWithoutAddressInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => businessCreateManyAddressInputEnvelopeSchema).optional(),
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
					z.lazy(() => businessUpdateWithWhereUniqueWithoutAddressInputSchema),
					z.lazy(() => businessUpdateWithWhereUniqueWithoutAddressInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => businessUpdateManyWithWhereWithoutAddressInputSchema),
					z.lazy(() => businessUpdateManyWithWhereWithoutAddressInputSchema).array(),
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

export default businessUpdateManyWithoutAddressNestedInputSchema;
