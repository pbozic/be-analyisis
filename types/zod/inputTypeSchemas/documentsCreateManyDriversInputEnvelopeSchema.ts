import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateManyDriversInputSchema } from './documentsCreateManyDriversInputSchema';

export const documentsCreateManyDriversInputEnvelopeSchema: z.ZodType<Prisma.documentsCreateManyDriversInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => documentsCreateManyDriversInputSchema),
				z.lazy(() => documentsCreateManyDriversInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default documentsCreateManyDriversInputEnvelopeSchema;
