import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyCreateManyBusinessInputSchema } from './word_buyCreateManyBusinessInputSchema';

export const word_buyCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.word_buyCreateManyBusinessInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => word_buyCreateManyBusinessInputSchema),
				z.lazy(() => word_buyCreateManyBusinessInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default word_buyCreateManyBusinessInputEnvelopeSchema;
