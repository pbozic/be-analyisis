import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_rolesCreateManyUserInputSchema } from './user_rolesCreateManyUserInputSchema';

export const user_rolesCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.user_rolesCreateManyUserInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => user_rolesCreateManyUserInputSchema),
			z.lazy(() => user_rolesCreateManyUserInputSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default user_rolesCreateManyUserInputEnvelopeSchema;
