import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateManyBusinessInputSchema } from './account_actionsCreateManyBusinessInputSchema';

export const account_actionsCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.account_actionsCreateManyBusinessInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => account_actionsCreateManyBusinessInputSchema),
				z.lazy(() => account_actionsCreateManyBusinessInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default account_actionsCreateManyBusinessInputEnvelopeSchema;
