import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { EnumACTIVITY_TYPEWithAggregatesFilterSchema } from './EnumACTIVITY_TYPEWithAggregatesFilterSchema';
import { ACTIVITY_TYPESchema } from './ACTIVITY_TYPESchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const driver_activity_logsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.driver_activity_logsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => driver_activity_logsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => driver_activity_logsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => driver_activity_logsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => driver_activity_logsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => driver_activity_logsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			driver_activity_log_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			driver_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			activity_type: z
				.union([z.lazy(() => EnumACTIVITY_TYPEWithAggregatesFilterSchema), z.lazy(() => ACTIVITY_TYPESchema)])
				.optional(),
			started_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			ended_at: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
				.nullable(),
			timeout_at: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
				.nullable(),
			lockout_until: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
				.nullable(),
		})
		.strict();

export default driver_activity_logsScalarWhereWithAggregatesInputSchema;
