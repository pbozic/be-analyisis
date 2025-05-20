import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const flagsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.flagsScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => flagsScalarWhereWithAggregatesInputSchema),
				z.lazy(() => flagsScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => flagsScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => flagsScalarWhereWithAggregatesInputSchema),
				z.lazy(() => flagsScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		flag_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		status: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default flagsScalarWhereWithAggregatesInputSchema;
