import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { driver_activity_settingsCountOrderByAggregateInputSchema } from './driver_activity_settingsCountOrderByAggregateInputSchema';
import { driver_activity_settingsAvgOrderByAggregateInputSchema } from './driver_activity_settingsAvgOrderByAggregateInputSchema';
import { driver_activity_settingsMaxOrderByAggregateInputSchema } from './driver_activity_settingsMaxOrderByAggregateInputSchema';
import { driver_activity_settingsMinOrderByAggregateInputSchema } from './driver_activity_settingsMinOrderByAggregateInputSchema';
import { driver_activity_settingsSumOrderByAggregateInputSchema } from './driver_activity_settingsSumOrderByAggregateInputSchema';

export const driver_activity_settingsOrderByWithAggregationInputSchema: z.ZodType<Prisma.driver_activity_settingsOrderByWithAggregationInput> =
	z
		.object({
			driver_activity_settings_id: z.lazy(() => SortOrderSchema).optional(),
			first_offline_lockout: z.lazy(() => SortOrderSchema).optional(),
			second_offline_lockout: z.lazy(() => SortOrderSchema).optional(),
			online_timeout: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			active: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => driver_activity_settingsCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => driver_activity_settingsAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => driver_activity_settingsMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => driver_activity_settingsMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => driver_activity_settingsSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export default driver_activity_settingsOrderByWithAggregationInputSchema;
