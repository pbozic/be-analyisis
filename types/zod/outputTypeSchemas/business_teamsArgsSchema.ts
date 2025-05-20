import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsSelectSchema } from '../inputTypeSchemas/business_teamsSelectSchema';
import { business_teamsIncludeSchema } from '../inputTypeSchemas/business_teamsIncludeSchema';

export const business_teamsArgsSchema: z.ZodType<Prisma.business_teamsDefaultArgs> = z
	.object({
		select: z.lazy(() => business_teamsSelectSchema).optional(),
		include: z.lazy(() => business_teamsIncludeSchema).optional(),
	})
	.strict();

export default business_teamsArgsSchema;
