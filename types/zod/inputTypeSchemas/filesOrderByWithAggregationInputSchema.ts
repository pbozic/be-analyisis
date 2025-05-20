import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { filesCountOrderByAggregateInputSchema } from './filesCountOrderByAggregateInputSchema';
import { filesMaxOrderByAggregateInputSchema } from './filesMaxOrderByAggregateInputSchema';
import { filesMinOrderByAggregateInputSchema } from './filesMinOrderByAggregateInputSchema';

export const filesOrderByWithAggregationInputSchema: z.ZodType<Prisma.filesOrderByWithAggregationInput> = z
	.object({
		file_id: z.lazy(() => SortOrderSchema).optional(),
		url: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		file_type: z.lazy(() => SortOrderSchema).optional(),
		public: z.lazy(() => SortOrderSchema).optional(),
		mime_type: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		document_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		_count: z.lazy(() => filesCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => filesMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => filesMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export default filesOrderByWithAggregationInputSchema;
