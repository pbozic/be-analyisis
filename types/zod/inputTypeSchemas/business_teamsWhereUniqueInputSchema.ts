import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsWhereInputSchema } from './business_teamsWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersListRelationFilterSchema } from './UsersListRelationFilterSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const business_teamsWhereUniqueInputSchema: z.ZodType<Prisma.business_teamsWhereUniqueInput> = z
	.union([
		z.object({
			business_teams_id: z.string().uuid(),
			team_name: z.string(),
		}),
		z.object({
			business_teams_id: z.string().uuid(),
		}),
		z.object({
			team_name: z.string(),
		}),
	])
	.and(
		z
			.object({
				business_teams_id: z.string().uuid().optional(),
				team_name: z.string().optional(),
				AND: z
					.union([
						z.lazy(() => business_teamsWhereInputSchema),
						z.lazy(() => business_teamsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => business_teamsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => business_teamsWhereInputSchema),
						z.lazy(() => business_teamsWhereInputSchema).array(),
					])
					.optional(),
				business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				limit_per_person: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				users: z.lazy(() => UsersListRelationFilterSchema).optional(),
				business: z
					.union([z.lazy(() => BusinessRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional(),
			})
			.strict()
	);

export default business_teamsWhereUniqueInputSchema;
