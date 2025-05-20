import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';

export const translatableScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.translatableScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => translatableScalarWhereWithAggregatesInputSchema),
					z.lazy(() => translatableScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => translatableScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => translatableScalarWhereWithAggregatesInputSchema),
					z.lazy(() => translatableScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			translatable_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		})
		.strict();

export default translatableScalarWhereWithAggregatesInputSchema;
