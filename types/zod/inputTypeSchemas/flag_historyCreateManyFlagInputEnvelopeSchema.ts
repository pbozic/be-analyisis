import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyCreateManyFlagInputSchema } from './flag_historyCreateManyFlagInputSchema';

export const flag_historyCreateManyFlagInputEnvelopeSchema: z.ZodType<Prisma.flag_historyCreateManyFlagInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => flag_historyCreateManyFlagInputSchema),
				z.lazy(() => flag_historyCreateManyFlagInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default flag_historyCreateManyFlagInputEnvelopeSchema;
