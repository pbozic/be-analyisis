import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const AddressesNullableRelationFilterSchema: z.ZodType<Prisma.AddressesNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => addressesWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => addressesWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default AddressesNullableRelationFilterSchema;
