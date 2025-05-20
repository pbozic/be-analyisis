import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusCreateManyBusinessInputSchema } from './menusCreateManyBusinessInputSchema';

export const menusCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.menusCreateManyBusinessInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => menusCreateManyBusinessInputSchema),
			z.lazy(() => menusCreateManyBusinessInputSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default menusCreateManyBusinessInputEnvelopeSchema;
