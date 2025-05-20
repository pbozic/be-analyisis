import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesCreateManyDriversInputSchema } from './driver_municipalitiesCreateManyDriversInputSchema';

export const driver_municipalitiesCreateManyDriversInputEnvelopeSchema: z.ZodType<Prisma.driver_municipalitiesCreateManyDriversInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => driver_municipalitiesCreateManyDriversInputSchema),
				z.lazy(() => driver_municipalitiesCreateManyDriversInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default driver_municipalitiesCreateManyDriversInputEnvelopeSchema;
