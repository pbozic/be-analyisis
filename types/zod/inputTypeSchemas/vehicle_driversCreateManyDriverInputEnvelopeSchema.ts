import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversCreateManyDriverInputSchema } from './vehicle_driversCreateManyDriverInputSchema';

export const vehicle_driversCreateManyDriverInputEnvelopeSchema: z.ZodType<Prisma.vehicle_driversCreateManyDriverInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => vehicle_driversCreateManyDriverInputSchema),
				z.lazy(() => vehicle_driversCreateManyDriverInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default vehicle_driversCreateManyDriverInputEnvelopeSchema;
