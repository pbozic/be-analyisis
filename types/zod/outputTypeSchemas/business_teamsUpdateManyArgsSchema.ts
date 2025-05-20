import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsUpdateManyMutationInputSchema } from '../inputTypeSchemas/business_teamsUpdateManyMutationInputSchema';
import { business_teamsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/business_teamsUncheckedUpdateManyInputSchema';
import { business_teamsWhereInputSchema } from '../inputTypeSchemas/business_teamsWhereInputSchema';

export const business_teamsUpdateManyArgsSchema: z.ZodType<Prisma.business_teamsUpdateManyArgs> = z
	.object({
		data: z.union([business_teamsUpdateManyMutationInputSchema, business_teamsUncheckedUpdateManyInputSchema]),
		where: business_teamsWhereInputSchema.optional(),
	})
	.strict();

export default business_teamsUpdateManyArgsSchema;
