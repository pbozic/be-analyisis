import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { businessOrderByRelationAggregateInputSchema } from './businessOrderByRelationAggregateInputSchema';

export const fiscal_devicesOrderByWithRelationInputSchema: z.ZodType<Prisma.fiscal_devicesOrderByWithRelationInput> = z
	.object({
		fiscal_devices_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		businesses: z.lazy(() => businessOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default fiscal_devicesOrderByWithRelationInputSchema;
