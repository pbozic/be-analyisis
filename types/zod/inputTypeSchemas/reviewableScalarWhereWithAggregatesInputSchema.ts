import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';

export const reviewableScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.reviewableScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => reviewableScalarWhereWithAggregatesInputSchema),
					z.lazy(() => reviewableScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => reviewableScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => reviewableScalarWhereWithAggregatesInputSchema),
					z.lazy(() => reviewableScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			reviewable_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		})
		.strict();

export default reviewableScalarWhereWithAggregatesInputSchema;
