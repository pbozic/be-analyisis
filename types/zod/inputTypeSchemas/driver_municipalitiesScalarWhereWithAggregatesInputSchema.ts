import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const driver_municipalitiesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.driver_municipalitiesScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => driver_municipalitiesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => driver_municipalitiesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => driver_municipalitiesScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => driver_municipalitiesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => driver_municipalitiesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			driver_municipalities_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			driver_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			municipalities_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default driver_municipalitiesScalarWhereWithAggregatesInputSchema;
