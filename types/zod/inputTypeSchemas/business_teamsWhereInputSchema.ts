import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersListRelationFilterSchema } from './UsersListRelationFilterSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const business_teamsWhereInputSchema: z.ZodType<Prisma.business_teamsWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => business_teamsWhereInputSchema), z.lazy(() => business_teamsWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => business_teamsWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => business_teamsWhereInputSchema), z.lazy(() => business_teamsWhereInputSchema).array()])
			.optional(),
		business_teams_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		team_name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		limit_per_person: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		users: z.lazy(() => UsersListRelationFilterSchema).optional(),
		business: z
			.union([z.lazy(() => BusinessRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
			.optional(),
	})
	.strict();

export default business_teamsWhereInputSchema;
