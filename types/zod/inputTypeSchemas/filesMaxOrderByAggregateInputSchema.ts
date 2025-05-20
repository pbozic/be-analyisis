import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const filesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.filesMaxOrderByAggregateInput> = z
	.object({
		file_id: z.lazy(() => SortOrderSchema).optional(),
		url: z.lazy(() => SortOrderSchema).optional(),
		file_type: z.lazy(() => SortOrderSchema).optional(),
		public: z.lazy(() => SortOrderSchema).optional(),
		mime_type: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		document_id: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default filesMaxOrderByAggregateInputSchema;
