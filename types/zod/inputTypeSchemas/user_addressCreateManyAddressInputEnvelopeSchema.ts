import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressCreateManyAddressInputSchema } from './user_addressCreateManyAddressInputSchema';

export const user_addressCreateManyAddressInputEnvelopeSchema: z.ZodType<Prisma.user_addressCreateManyAddressInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => user_addressCreateManyAddressInputSchema),
				z.lazy(() => user_addressCreateManyAddressInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default user_addressCreateManyAddressInputEnvelopeSchema;
