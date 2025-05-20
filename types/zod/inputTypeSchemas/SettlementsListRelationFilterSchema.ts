import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsWhereInputSchema } from './settlementsWhereInputSchema';

export const SettlementsListRelationFilterSchema: z.ZodType<Prisma.SettlementsListRelationFilter> = z
	.object({
		every: z.lazy(() => settlementsWhereInputSchema).optional(),
		some: z.lazy(() => settlementsWhereInputSchema).optional(),
		none: z.lazy(() => settlementsWhereInputSchema).optional(),
	})
	.strict();

export default SettlementsListRelationFilterSchema;
