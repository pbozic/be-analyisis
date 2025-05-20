import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { documentsOrderByWithRelationInputSchema } from './documentsOrderByWithRelationInputSchema';
import { categoriesOrderByRelationAggregateInputSchema } from './categoriesOrderByRelationAggregateInputSchema';
import { promo_bannersOrderByRelationAggregateInputSchema } from './promo_bannersOrderByRelationAggregateInputSchema';

export const filesOrderByWithRelationInputSchema: z.ZodType<Prisma.filesOrderByWithRelationInput> = z
	.object({
		file_id: z.lazy(() => SortOrderSchema).optional(),
		url: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		file_type: z.lazy(() => SortOrderSchema).optional(),
		public: z.lazy(() => SortOrderSchema).optional(),
		mime_type: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		document_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		documents: z.lazy(() => documentsOrderByWithRelationInputSchema).optional(),
		categories: z.lazy(() => categoriesOrderByRelationAggregateInputSchema).optional(),
		promo_banners: z.lazy(() => promo_bannersOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default filesOrderByWithRelationInputSchema;
