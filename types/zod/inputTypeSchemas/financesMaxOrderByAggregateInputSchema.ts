import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const financesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.financesMaxOrderByAggregateInput> = z
	.object({
		finance_id: z.lazy(() => SortOrderSchema).optional(),
		bank_name: z.lazy(() => SortOrderSchema).optional(),
		account_holder: z.lazy(() => SortOrderSchema).optional(),
		account_number: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default financesMaxOrderByAggregateInputSchema;
