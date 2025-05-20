import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedOneWithoutBusiness_teamsInputSchema } from './businessCreateNestedOneWithoutBusiness_teamsInputSchema';

export const business_teamsCreateWithoutUsersInputSchema: z.ZodType<Prisma.business_teamsCreateWithoutUsersInput> = z
	.object({
		business_teams_id: z.string().uuid().optional(),
		team_name: z.string(),
		limit_per_person: z.number(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		business: z.lazy(() => businessCreateNestedOneWithoutBusiness_teamsInputSchema),
	})
	.strict();

export default business_teamsCreateWithoutUsersInputSchema;
