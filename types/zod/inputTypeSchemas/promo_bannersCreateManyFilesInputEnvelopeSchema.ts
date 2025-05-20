import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersCreateManyFilesInputSchema } from './promo_bannersCreateManyFilesInputSchema';

export const promo_bannersCreateManyFilesInputEnvelopeSchema: z.ZodType<Prisma.promo_bannersCreateManyFilesInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => promo_bannersCreateManyFilesInputSchema),
				z.lazy(() => promo_bannersCreateManyFilesInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default promo_bannersCreateManyFilesInputEnvelopeSchema;
