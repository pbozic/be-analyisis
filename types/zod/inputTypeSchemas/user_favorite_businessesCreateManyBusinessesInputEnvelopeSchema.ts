import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesCreateManyBusinessesInputSchema } from './user_favorite_businessesCreateManyBusinessesInputSchema';

export const user_favorite_businessesCreateManyBusinessesInputEnvelopeSchema: z.ZodType<Prisma.user_favorite_businessesCreateManyBusinessesInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => user_favorite_businessesCreateManyBusinessesInputSchema),
				z.lazy(() => user_favorite_businessesCreateManyBusinessesInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default user_favorite_businessesCreateManyBusinessesInputEnvelopeSchema;
