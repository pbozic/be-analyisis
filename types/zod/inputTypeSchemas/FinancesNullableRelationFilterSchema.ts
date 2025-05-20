import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { financesWhereInputSchema } from './financesWhereInputSchema';

export const FinancesNullableRelationFilterSchema: z.ZodType<Prisma.FinancesNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => financesWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => financesWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default FinancesNullableRelationFilterSchema;
