import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const vehicle_driversScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.vehicle_driversScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => vehicle_driversScalarWhereWithAggregatesInputSchema),
					z.lazy(() => vehicle_driversScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => vehicle_driversScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => vehicle_driversScalarWhereWithAggregatesInputSchema),
					z.lazy(() => vehicle_driversScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			vehicle_drivers_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			vehicle_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			driver_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			can_drive: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default vehicle_driversScalarWhereWithAggregatesInputSchema;
