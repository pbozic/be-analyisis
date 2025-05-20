import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateManyAddressInputSchema } from './businessCreateManyAddressInputSchema';

export const businessCreateManyAddressInputEnvelopeSchema: z.ZodType<Prisma.businessCreateManyAddressInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => businessCreateManyAddressInputSchema),
			z.lazy(() => businessCreateManyAddressInputSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default businessCreateManyAddressInputEnvelopeSchema;
