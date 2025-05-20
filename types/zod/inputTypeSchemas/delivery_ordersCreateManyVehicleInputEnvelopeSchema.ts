import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateManyVehicleInputSchema } from './delivery_ordersCreateManyVehicleInputSchema';

export const delivery_ordersCreateManyVehicleInputEnvelopeSchema: z.ZodType<Prisma.delivery_ordersCreateManyVehicleInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => delivery_ordersCreateManyVehicleInputSchema),
				z.lazy(() => delivery_ordersCreateManyVehicleInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default delivery_ordersCreateManyVehicleInputEnvelopeSchema;
