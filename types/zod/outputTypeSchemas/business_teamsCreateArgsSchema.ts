import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsIncludeSchema } from '../inputTypeSchemas/business_teamsIncludeSchema';
import { business_teamsCreateInputSchema } from '../inputTypeSchemas/business_teamsCreateInputSchema';
import { business_teamsUncheckedCreateInputSchema } from '../inputTypeSchemas/business_teamsUncheckedCreateInputSchema';
import { usersFindManyArgsSchema } from '../outputTypeSchemas/usersFindManyArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { Business_teamsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Business_teamsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const business_teamsSelectSchema: z.ZodType<Prisma.business_teamsSelect> = z
	.object({
		business_teams_id: z.boolean().optional(),
		team_name: z.boolean().optional(),
		business_id: z.boolean().optional(),
		limit_per_person: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		users: z.union([z.boolean(), z.lazy(() => usersFindManyArgsSchema)]).optional(),
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Business_teamsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const business_teamsCreateArgsSchema: z.ZodType<Prisma.business_teamsCreateArgs> = z
	.object({
		select: business_teamsSelectSchema.optional(),
		include: business_teamsIncludeSchema.optional(),
		data: z.union([business_teamsCreateInputSchema, business_teamsUncheckedCreateInputSchema]),
	})
	.strict();

export default business_teamsCreateArgsSchema;
