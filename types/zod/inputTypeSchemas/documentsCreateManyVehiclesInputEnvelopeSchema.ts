import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateManyVehiclesInputSchema } from './documentsCreateManyVehiclesInputSchema';

export const documentsCreateManyVehiclesInputEnvelopeSchema: z.ZodType<Prisma.documentsCreateManyVehiclesInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => documentsCreateManyVehiclesInputSchema),
				z.lazy(() => documentsCreateManyVehiclesInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default documentsCreateManyVehiclesInputEnvelopeSchema;
