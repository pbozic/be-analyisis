import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const addressesUniqueAddressIdentifierCompoundUniqueInputSchema: z.ZodType<Prisma.addressesUniqueAddressIdentifierCompoundUniqueInput> =
	z
		.object({
			address: z.string(),
			latitude: z.string(),
			longitude: z.string(),
		})
		.strict();

export default addressesUniqueAddressIdentifierCompoundUniqueInputSchema;
