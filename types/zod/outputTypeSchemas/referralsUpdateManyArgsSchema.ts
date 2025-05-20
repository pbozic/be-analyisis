import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsUpdateManyMutationInputSchema } from '../inputTypeSchemas/referralsUpdateManyMutationInputSchema';
import { referralsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/referralsUncheckedUpdateManyInputSchema';
import { referralsWhereInputSchema } from '../inputTypeSchemas/referralsWhereInputSchema';

export const referralsUpdateManyArgsSchema: z.ZodType<Prisma.referralsUpdateManyArgs> = z
	.object({
		data: z.union([referralsUpdateManyMutationInputSchema, referralsUncheckedUpdateManyInputSchema]),
		where: referralsWhereInputSchema.optional(),
	})
	.strict();

export default referralsUpdateManyArgsSchema;
