import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const driver_activity_settingsMinOrderByAggregateInputSchema: z.ZodType<Prisma.driver_activity_settingsMinOrderByAggregateInput> =
	z
		.object({
			driver_activity_settings_id: z.lazy(() => SortOrderSchema).optional(),
			first_offline_lockout: z.lazy(() => SortOrderSchema).optional(),
			second_offline_lockout: z.lazy(() => SortOrderSchema).optional(),
			online_timeout: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			active: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export default driver_activity_settingsMinOrderByAggregateInputSchema;
