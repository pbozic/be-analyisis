import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateManyMenu_itemsInputSchema } from './documentsCreateManyMenu_itemsInputSchema';

export const documentsCreateManyMenu_itemsInputEnvelopeSchema: z.ZodType<Prisma.documentsCreateManyMenu_itemsInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => documentsCreateManyMenu_itemsInputSchema),
				z.lazy(() => documentsCreateManyMenu_itemsInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default documentsCreateManyMenu_itemsInputEnvelopeSchema;
