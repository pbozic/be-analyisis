import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCOMPANY_ROLEFilterSchema } from './NestedEnumCOMPANY_ROLEFilterSchema';

export const NestedEnumCOMPANY_ROLEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCOMPANY_ROLEWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => COMPANY_ROLESchema).optional(),
			in: z
				.lazy(() => COMPANY_ROLESchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => COMPANY_ROLESchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => COMPANY_ROLESchema),
					z.lazy(() => NestedEnumCOMPANY_ROLEWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumCOMPANY_ROLEFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumCOMPANY_ROLEFilterSchema).optional(),
		})
		.strict();

export default NestedEnumCOMPANY_ROLEWithAggregatesFilterSchema;
