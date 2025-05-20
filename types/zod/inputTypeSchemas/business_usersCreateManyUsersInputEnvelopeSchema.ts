import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateManyUsersInputSchema } from './business_usersCreateManyUsersInputSchema';

export const business_usersCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.business_usersCreateManyUsersInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => business_usersCreateManyUsersInputSchema),
				z.lazy(() => business_usersCreateManyUsersInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default business_usersCreateManyUsersInputEnvelopeSchema;
