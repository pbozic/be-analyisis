import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';

export const ReferralsListRelationFilterSchema: z.ZodType<Prisma.ReferralsListRelationFilter> = z
	.object({
		every: z.lazy(() => referralsWhereInputSchema).optional(),
		some: z.lazy(() => referralsWhereInputSchema).optional(),
		none: z.lazy(() => referralsWhereInputSchema).optional(),
	})
	.strict();

export default ReferralsListRelationFilterSchema;
