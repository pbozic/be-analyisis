import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateManyDelivery_driverInputSchema } from './documentsCreateManyDelivery_driverInputSchema';

export const documentsCreateManyDelivery_driverInputEnvelopeSchema: z.ZodType<Prisma.documentsCreateManyDelivery_driverInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => documentsCreateManyDelivery_driverInputSchema),
				z.lazy(() => documentsCreateManyDelivery_driverInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default documentsCreateManyDelivery_driverInputEnvelopeSchema;
