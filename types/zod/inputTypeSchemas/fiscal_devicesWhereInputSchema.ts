import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BusinessListRelationFilterSchema } from './BusinessListRelationFilterSchema';

export const fiscal_devicesWhereInputSchema: z.ZodType<Prisma.fiscal_devicesWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => fiscal_devicesWhereInputSchema), z.lazy(() => fiscal_devicesWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => fiscal_devicesWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => fiscal_devicesWhereInputSchema), z.lazy(() => fiscal_devicesWhereInputSchema).array()])
			.optional(),
		fiscal_devices_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		businesses: z.lazy(() => BusinessListRelationFilterSchema).optional(),
	})
	.strict();

export default fiscal_devicesWhereInputSchema;
