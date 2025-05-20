import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const business_teamsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.business_teamsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => business_teamsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => business_teamsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => business_teamsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => business_teamsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => business_teamsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			business_teams_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			team_name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			business_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			limit_per_person: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default business_teamsScalarWhereWithAggregatesInputSchema;
