import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flagsWhereInputSchema } from './flagsWhereInputSchema';

export const FlagsRelationFilterSchema: z.ZodType<Prisma.FlagsRelationFilter> = z
	.object({
		is: z.lazy(() => flagsWhereInputSchema).optional(),
		isNot: z.lazy(() => flagsWhereInputSchema).optional(),
	})
	.strict();

export default FlagsRelationFilterSchema;
