import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const AddressesRelationFilterSchema: z.ZodType<Prisma.AddressesRelationFilter> = z
	.object({
		is: z.lazy(() => addressesWhereInputSchema).optional(),
		isNot: z.lazy(() => addressesWhereInputSchema).optional(),
	})
	.strict();

export default AddressesRelationFilterSchema;
