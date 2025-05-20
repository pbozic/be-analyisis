import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const weather_dataOrderByRelationAggregateInputSchema: z.ZodType<Prisma.weather_dataOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default weather_dataOrderByRelationAggregateInputSchema;
