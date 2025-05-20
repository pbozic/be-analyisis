import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsWhereInputSchema } from './lost_itemsWhereInputSchema';

export const Lost_itemsListRelationFilterSchema: z.ZodType<Prisma.Lost_itemsListRelationFilter> = z
	.object({
		every: z.lazy(() => lost_itemsWhereInputSchema).optional(),
		some: z.lazy(() => lost_itemsWhereInputSchema).optional(),
		none: z.lazy(() => lost_itemsWhereInputSchema).optional(),
	})
	.strict();

export default Lost_itemsListRelationFilterSchema;
