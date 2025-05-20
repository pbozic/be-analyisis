import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedManyWithoutBusiness_teamsInputSchema } from './usersCreateNestedManyWithoutBusiness_teamsInputSchema';
import { businessCreateNestedOneWithoutBusiness_teamsInputSchema } from './businessCreateNestedOneWithoutBusiness_teamsInputSchema';

export const business_teamsCreateInputSchema: z.ZodType<Prisma.business_teamsCreateInput> = z
	.object({
		business_teams_id: z.string().uuid().optional(),
		team_name: z.string(),
		limit_per_person: z.number(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		users: z.lazy(() => usersCreateNestedManyWithoutBusiness_teamsInputSchema).optional(),
		business: z.lazy(() => businessCreateNestedOneWithoutBusiness_teamsInputSchema),
	})
	.strict();

export default business_teamsCreateInputSchema;
