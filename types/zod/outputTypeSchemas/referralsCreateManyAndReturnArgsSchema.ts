import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsCreateManyInputSchema } from '../inputTypeSchemas/referralsCreateManyInputSchema';

export const referralsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.referralsCreateManyAndReturnArgs> = z
	.object({
		data: z.union([referralsCreateManyInputSchema, referralsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default referralsCreateManyAndReturnArgsSchema;
