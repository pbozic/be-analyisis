import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsCreateManyUserInputSchema } from './wallet_fundsCreateManyUserInputSchema';

export const wallet_fundsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.wallet_fundsCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => wallet_fundsCreateManyUserInputSchema),
				z.lazy(() => wallet_fundsCreateManyUserInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default wallet_fundsCreateManyUserInputEnvelopeSchema;
