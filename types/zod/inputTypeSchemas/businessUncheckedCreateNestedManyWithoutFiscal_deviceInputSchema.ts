import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutFiscal_deviceInputSchema } from './businessCreateWithoutFiscal_deviceInputSchema';
import { businessUncheckedCreateWithoutFiscal_deviceInputSchema } from './businessUncheckedCreateWithoutFiscal_deviceInputSchema';
import { businessCreateOrConnectWithoutFiscal_deviceInputSchema } from './businessCreateOrConnectWithoutFiscal_deviceInputSchema';
import { businessCreateManyFiscal_deviceInputEnvelopeSchema } from './businessCreateManyFiscal_deviceInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessUncheckedCreateNestedManyWithoutFiscal_deviceInputSchema: z.ZodType<Prisma.businessUncheckedCreateNestedManyWithoutFiscal_deviceInput> =
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
			createMany: z.lazy(() => businessCreateManyFiscal_deviceInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => businessWhereUniqueInputSchema),
					z.lazy(() => businessWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default businessUncheckedCreateNestedManyWithoutFiscal_deviceInputSchema;
