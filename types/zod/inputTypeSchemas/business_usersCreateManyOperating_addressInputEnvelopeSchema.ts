import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateManyOperating_addressInputSchema } from './business_usersCreateManyOperating_addressInputSchema';

export const business_usersCreateManyOperating_addressInputEnvelopeSchema: z.ZodType<Prisma.business_usersCreateManyOperating_addressInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => business_usersCreateManyOperating_addressInputSchema),
				z.lazy(() => business_usersCreateManyOperating_addressInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default business_usersCreateManyOperating_addressInputEnvelopeSchema;
