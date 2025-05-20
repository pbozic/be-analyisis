import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutFiscal_deviceInputSchema } from './businessCreateWithoutFiscal_deviceInputSchema';
import { businessUncheckedCreateWithoutFiscal_deviceInputSchema } from './businessUncheckedCreateWithoutFiscal_deviceInputSchema';
import { businessCreateOrConnectWithoutFiscal_deviceInputSchema } from './businessCreateOrConnectWithoutFiscal_deviceInputSchema';
import { businessUpsertWithWhereUniqueWithoutFiscal_deviceInputSchema } from './businessUpsertWithWhereUniqueWithoutFiscal_deviceInputSchema';
import { businessCreateManyFiscal_deviceInputEnvelopeSchema } from './businessCreateManyFiscal_deviceInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithWhereUniqueWithoutFiscal_deviceInputSchema } from './businessUpdateWithWhereUniqueWithoutFiscal_deviceInputSchema';
import { businessUpdateManyWithWhereWithoutFiscal_deviceInputSchema } from './businessUpdateManyWithWhereWithoutFiscal_deviceInputSchema';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';

export const businessUncheckedUpdateManyWithoutFiscal_deviceNestedInputSchema: z.ZodType<Prisma.businessUncheckedUpdateManyWithoutFiscal_deviceNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutFiscal_deviceInputSchema),
					z.lazy(() => businessCreateWithoutFiscal_deviceInputSchema).array(),
					z.lazy(() => businessUncheckedCreateWithoutFiscal_deviceInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutFiscal_deviceInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => businessCreateOrConnectWithoutFiscal_deviceInputSchema),
					z.lazy(() => businessCreateOrConnectWithoutFiscal_deviceInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => businessUpsertWithWhereUniqueWithoutFiscal_deviceInputSchema),
					z.lazy(() => businessUpsertWithWhereUniqueWithoutFiscal_deviceInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => businessCreateManyFiscal_deviceInputEnvelopeSchema).optional(),
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
					z.lazy(() => businessUpdateWithWhereUniqueWithoutFiscal_deviceInputSchema),
					z.lazy(() => businessUpdateWithWhereUniqueWithoutFiscal_deviceInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => businessUpdateManyWithWhereWithoutFiscal_deviceInputSchema),
					z.lazy(() => businessUpdateManyWithWhereWithoutFiscal_deviceInputSchema).array(),
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

export default businessUncheckedUpdateManyWithoutFiscal_deviceNestedInputSchema;
