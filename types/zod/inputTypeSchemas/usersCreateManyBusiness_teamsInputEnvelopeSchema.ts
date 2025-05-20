import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateManyBusiness_teamsInputSchema } from './usersCreateManyBusiness_teamsInputSchema';

export const usersCreateManyBusiness_teamsInputEnvelopeSchema: z.ZodType<Prisma.usersCreateManyBusiness_teamsInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => usersCreateManyBusiness_teamsInputSchema),
				z.lazy(() => usersCreateManyBusiness_teamsInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default usersCreateManyBusiness_teamsInputEnvelopeSchema;
