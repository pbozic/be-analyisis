import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDelivery_addressInputSchema } from './businessCreateWithoutDelivery_addressInputSchema';
import { businessUncheckedCreateWithoutDelivery_addressInputSchema } from './businessUncheckedCreateWithoutDelivery_addressInputSchema';
import { businessCreateOrConnectWithoutDelivery_addressInputSchema } from './businessCreateOrConnectWithoutDelivery_addressInputSchema';
import { businessUpsertWithWhereUniqueWithoutDelivery_addressInputSchema } from './businessUpsertWithWhereUniqueWithoutDelivery_addressInputSchema';
import { businessCreateManyDelivery_addressInputEnvelopeSchema } from './businessCreateManyDelivery_addressInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithWhereUniqueWithoutDelivery_addressInputSchema } from './businessUpdateWithWhereUniqueWithoutDelivery_addressInputSchema';
import { businessUpdateManyWithWhereWithoutDelivery_addressInputSchema } from './businessUpdateManyWithWhereWithoutDelivery_addressInputSchema';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';

export const businessUpdateManyWithoutDelivery_addressNestedInputSchema: z.ZodType<Prisma.businessUpdateManyWithoutDelivery_addressNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutDelivery_addressInputSchema),
					z.lazy(() => businessCreateWithoutDelivery_addressInputSchema).array(),
					z.lazy(() => businessUncheckedCreateWithoutDelivery_addressInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutDelivery_addressInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => businessCreateOrConnectWithoutDelivery_addressInputSchema),
					z.lazy(() => businessCreateOrConnectWithoutDelivery_addressInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => businessUpsertWithWhereUniqueWithoutDelivery_addressInputSchema),
					z.lazy(() => businessUpsertWithWhereUniqueWithoutDelivery_addressInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => businessCreateManyDelivery_addressInputEnvelopeSchema).optional(),
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
					z.lazy(() => businessUpdateWithWhereUniqueWithoutDelivery_addressInputSchema),
					z.lazy(() => businessUpdateWithWhereUniqueWithoutDelivery_addressInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => businessUpdateManyWithWhereWithoutDelivery_addressInputSchema),
					z.lazy(() => businessUpdateManyWithWhereWithoutDelivery_addressInputSchema).array(),
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

export default businessUpdateManyWithoutDelivery_addressNestedInputSchema;
