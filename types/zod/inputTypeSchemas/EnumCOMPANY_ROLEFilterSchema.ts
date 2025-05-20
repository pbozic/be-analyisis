import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { NestedEnumCOMPANY_ROLEFilterSchema } from './NestedEnumCOMPANY_ROLEFilterSchema';

export const EnumCOMPANY_ROLEFilterSchema: z.ZodType<Prisma.EnumCOMPANY_ROLEFilter> = z
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
		not: z.union([z.lazy(() => COMPANY_ROLESchema), z.lazy(() => NestedEnumCOMPANY_ROLEFilterSchema)]).optional(),
	})
	.strict();

export default EnumCOMPANY_ROLEFilterSchema;
