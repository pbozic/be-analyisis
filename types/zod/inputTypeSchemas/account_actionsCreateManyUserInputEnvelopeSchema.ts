import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateManyUserInputSchema } from './account_actionsCreateManyUserInputSchema';

export const account_actionsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.account_actionsCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => account_actionsCreateManyUserInputSchema),
				z.lazy(() => account_actionsCreateManyUserInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default account_actionsCreateManyUserInputEnvelopeSchema;
