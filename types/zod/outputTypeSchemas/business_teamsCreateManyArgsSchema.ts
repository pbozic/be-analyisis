import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsCreateManyInputSchema } from '../inputTypeSchemas/business_teamsCreateManyInputSchema';

export const business_teamsCreateManyArgsSchema: z.ZodType<Prisma.business_teamsCreateManyArgs> = z
	.object({
		data: z.union([business_teamsCreateManyInputSchema, business_teamsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default business_teamsCreateManyArgsSchema;
