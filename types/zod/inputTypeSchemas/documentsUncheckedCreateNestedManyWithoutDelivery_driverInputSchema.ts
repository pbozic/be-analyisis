import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutDelivery_driverInputSchema } from './documentsCreateWithoutDelivery_driverInputSchema';
import { documentsUncheckedCreateWithoutDelivery_driverInputSchema } from './documentsUncheckedCreateWithoutDelivery_driverInputSchema';
import { documentsCreateOrConnectWithoutDelivery_driverInputSchema } from './documentsCreateOrConnectWithoutDelivery_driverInputSchema';
import { documentsCreateManyDelivery_driverInputEnvelopeSchema } from './documentsCreateManyDelivery_driverInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsUncheckedCreateNestedManyWithoutDelivery_driverInputSchema: z.ZodType<Prisma.documentsUncheckedCreateNestedManyWithoutDelivery_driverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutDelivery_driverInputSchema),
					z.lazy(() => documentsCreateWithoutDelivery_driverInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutDelivery_driverInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutDelivery_driverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutDelivery_driverInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutDelivery_driverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyDelivery_driverInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default documentsUncheckedCreateNestedManyWithoutDelivery_driverInputSchema;
