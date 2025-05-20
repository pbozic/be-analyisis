import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { reviewableOrderByWithRelationInputSchema } from './reviewableOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const reviewsOrderByWithRelationInputSchema: z.ZodType<Prisma.reviewsOrderByWithRelationInput> = z
	.object({
		review_id: z.lazy(() => SortOrderSchema).optional(),
		reviewable_id: z.lazy(() => SortOrderSchema).optional(),
		author_id: z.lazy(() => SortOrderSchema).optional(),
		rating: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		comment: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		feedback: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		reviewable: z.lazy(() => reviewableOrderByWithRelationInputSchema).optional(),
		author: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export default reviewsOrderByWithRelationInputSchema;
