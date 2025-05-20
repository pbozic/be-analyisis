import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { vehicle_specificationsCountOrderByAggregateInputSchema } from './vehicle_specificationsCountOrderByAggregateInputSchema';
import { vehicle_specificationsMaxOrderByAggregateInputSchema } from './vehicle_specificationsMaxOrderByAggregateInputSchema';
import { vehicle_specificationsMinOrderByAggregateInputSchema } from './vehicle_specificationsMinOrderByAggregateInputSchema';

export const vehicle_specificationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.vehicle_specificationsOrderByWithAggregationInput> =
	z
		.object({
			vehicle_specification_id: z.lazy(() => SortOrderSchema).optional(),
			class: z.lazy(() => SortOrderSchema).optional(),
			category: z.lazy(() => SortOrderSchema).optional(),
			people: z.lazy(() => SortOrderSchema).optional(),
			start_cost: z.lazy(() => SortOrderSchema).optional(),
			per_kilometre: z.lazy(() => SortOrderSchema).optional(),
			per_minute: z.lazy(() => SortOrderSchema).optional(),
			vehicle_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
			_count: z.lazy(() => vehicle_specificationsCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => vehicle_specificationsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => vehicle_specificationsMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default vehicle_specificationsOrderByWithAggregationInputSchema;
