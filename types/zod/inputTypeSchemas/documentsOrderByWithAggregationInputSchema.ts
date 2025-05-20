import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { documentsCountOrderByAggregateInputSchema } from './documentsCountOrderByAggregateInputSchema';
import { documentsMaxOrderByAggregateInputSchema } from './documentsMaxOrderByAggregateInputSchema';
import { documentsMinOrderByAggregateInputSchema } from './documentsMinOrderByAggregateInputSchema';

export const documentsOrderByWithAggregationInputSchema: z.ZodType<Prisma.documentsOrderByWithAggregationInput> = z
	.object({
		document_id: z.lazy(() => SortOrderSchema).optional(),
		document_type: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		expiration_date: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		issue_date: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		additional_info: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		public: z.lazy(() => SortOrderSchema).optional(),
		driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		delivery_driver_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		user_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		vehicle_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		menu_item_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		lost_item_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		transaction_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		_count: z.lazy(() => documentsCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => documentsMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => documentsMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default documentsOrderByWithAggregationInputSchema;
