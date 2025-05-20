import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUncheckedCreateNestedManyWithoutBusiness_teamsInputSchema } from './usersUncheckedCreateNestedManyWithoutBusiness_teamsInputSchema';

export const business_teamsUncheckedCreateInputSchema: z.ZodType<Prisma.business_teamsUncheckedCreateInput> = z
	.object({
		business_teams_id: z.string().uuid().optional(),
		team_name: z.string(),
		business_id: z.string(),
		limit_per_person: z.number(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		users: z.lazy(() => usersUncheckedCreateNestedManyWithoutBusiness_teamsInputSchema).optional(),
	})
	.strict();

export default business_teamsUncheckedCreateInputSchema;
