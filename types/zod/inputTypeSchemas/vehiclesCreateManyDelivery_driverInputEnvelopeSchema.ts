import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateManyDelivery_driverInputSchema } from './vehiclesCreateManyDelivery_driverInputSchema';

export const vehiclesCreateManyDelivery_driverInputEnvelopeSchema: z.ZodType<Prisma.vehiclesCreateManyDelivery_driverInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => vehiclesCreateManyDelivery_driverInputSchema),
				z.lazy(() => vehiclesCreateManyDelivery_driverInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default vehiclesCreateManyDelivery_driverInputEnvelopeSchema;
