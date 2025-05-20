import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateManyAction_creatorInputSchema } from './account_actionsCreateManyAction_creatorInputSchema';

export const account_actionsCreateManyAction_creatorInputEnvelopeSchema: z.ZodType<Prisma.account_actionsCreateManyAction_creatorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => account_actionsCreateManyAction_creatorInputSchema),
				z.lazy(() => account_actionsCreateManyAction_creatorInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default account_actionsCreateManyAction_creatorInputEnvelopeSchema;
