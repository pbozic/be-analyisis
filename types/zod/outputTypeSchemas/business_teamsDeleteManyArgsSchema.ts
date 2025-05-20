import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsWhereInputSchema } from '../inputTypeSchemas/business_teamsWhereInputSchema';

export const business_teamsDeleteManyArgsSchema: z.ZodType<Prisma.business_teamsDeleteManyArgs> = z
	.object({
		where: business_teamsWhereInputSchema.optional(),
	})
	.strict();

export default business_teamsDeleteManyArgsSchema;
