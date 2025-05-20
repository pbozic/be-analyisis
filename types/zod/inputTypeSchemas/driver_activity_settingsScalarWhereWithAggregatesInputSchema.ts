import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const driver_activity_settingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.driver_activity_settingsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => driver_activity_settingsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => driver_activity_settingsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => driver_activity_settingsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => driver_activity_settingsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => driver_activity_settingsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			driver_activity_settings_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			first_offline_lockout: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			second_offline_lockout: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			online_timeout: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			active: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		})
		.strict();

export default driver_activity_settingsScalarWhereWithAggregatesInputSchema;
