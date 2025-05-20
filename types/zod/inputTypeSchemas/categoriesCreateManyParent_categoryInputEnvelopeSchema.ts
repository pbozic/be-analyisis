import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateManyParent_categoryInputSchema } from './categoriesCreateManyParent_categoryInputSchema';

export const categoriesCreateManyParent_categoryInputEnvelopeSchema: z.ZodType<Prisma.categoriesCreateManyParent_categoryInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => categoriesCreateManyParent_categoryInputSchema),
				z.lazy(() => categoriesCreateManyParent_categoryInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default categoriesCreateManyParent_categoryInputEnvelopeSchema;
