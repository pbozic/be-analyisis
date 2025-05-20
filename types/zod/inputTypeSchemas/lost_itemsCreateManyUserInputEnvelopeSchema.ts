import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsCreateManyUserInputSchema } from './lost_itemsCreateManyUserInputSchema';

export const lost_itemsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.lost_itemsCreateManyUserInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => lost_itemsCreateManyUserInputSchema),
			z.lazy(() => lost_itemsCreateManyUserInputSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default lost_itemsCreateManyUserInputEnvelopeSchema;
