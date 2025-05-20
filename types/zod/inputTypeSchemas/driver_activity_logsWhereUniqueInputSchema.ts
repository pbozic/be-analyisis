import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_activity_logsWhereInputSchema } from './driver_activity_logsWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumACTIVITY_TYPEFilterSchema } from './EnumACTIVITY_TYPEFilterSchema';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DriversRelationFilterSchema } from './DriversRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driver_activity_logsWhereUniqueInputSchema: z.ZodType<Prisma.driver_activity_logsWhereUniqueInput> = z
	.object({
		driver_activity_log_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				driver_activity_log_id: z.string().uuid().optional(),
				AND: z
					.union([
						z.lazy(() => driver_activity_logsWhereInputSchema),
						z.lazy(() => driver_activity_logsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => driver_activity_logsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => driver_activity_logsWhereInputSchema),
						z.lazy(() => driver_activity_logsWhereInputSchema).array(),
					])
					.optional(),
				driver_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				activity_type: z
					.union([z.lazy(() => EnumACTIVITY_TYPEFilterSchema), z.lazy(() => ACTIVITY_TYPESchema)])
					.optional(),
				started_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				ended_at: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				timeout_at: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				lockout_until: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				driver: z
					.union([z.lazy(() => DriversRelationFilterSchema), z.lazy(() => driversWhereInputSchema)])
					.optional(),
			})
			.strict()
	);

export default driver_activity_logsWhereUniqueInputSchema;
