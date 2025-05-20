import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { fiscal_devicesWhereInputSchema } from './fiscal_devicesWhereInputSchema';

export const Fiscal_devicesNullableRelationFilterSchema: z.ZodType<Prisma.Fiscal_devicesNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => fiscal_devicesWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => fiscal_devicesWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Fiscal_devicesNullableRelationFilterSchema;
