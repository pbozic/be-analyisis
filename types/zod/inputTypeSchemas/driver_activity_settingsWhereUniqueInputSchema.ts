import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_settingsWhereInputSchema } from './driver_activity_settingsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const driver_activity_settingsWhereUniqueInputSchema: z.ZodType<Prisma.driver_activity_settingsWhereUniqueInput> =
	z
		.object({
			driver_activity_settings_id: z.string().uuid(),
		})
		.and(
			z
				.object({
					driver_activity_settings_id: z.string().uuid().optional(),
					AND: z
						.union([
							z.lazy(() => driver_activity_settingsWhereInputSchema),
							z.lazy(() => driver_activity_settingsWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => driver_activity_settingsWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => driver_activity_settingsWhereInputSchema),
							z.lazy(() => driver_activity_settingsWhereInputSchema).array(),
						])
						.optional(),
					first_offline_lockout: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
					second_offline_lockout: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
					online_timeout: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
					created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
					updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
					active: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				})
				.strict()
		);

export default driver_activity_settingsWhereUniqueInputSchema;
