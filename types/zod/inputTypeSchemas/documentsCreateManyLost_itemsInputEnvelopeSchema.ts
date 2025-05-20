import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateManyLost_itemsInputSchema } from './documentsCreateManyLost_itemsInputSchema';

export const documentsCreateManyLost_itemsInputEnvelopeSchema: z.ZodType<Prisma.documentsCreateManyLost_itemsInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => documentsCreateManyLost_itemsInputSchema),
				z.lazy(() => documentsCreateManyLost_itemsInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default documentsCreateManyLost_itemsInputEnvelopeSchema;
