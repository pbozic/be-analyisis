import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const fiscal_devicesMinOrderByAggregateInputSchema: z.ZodType<Prisma.fiscal_devicesMinOrderByAggregateInput> = z
	.object({
		fiscal_devices_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export default fiscal_devicesMinOrderByAggregateInputSchema;
