import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const fiscal_devicesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.fiscal_devicesScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => fiscal_devicesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => fiscal_devicesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => fiscal_devicesScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => fiscal_devicesScalarWhereWithAggregatesInputSchema),
					z.lazy(() => fiscal_devicesScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			fiscal_devices_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default fiscal_devicesScalarWhereWithAggregatesInputSchema;
