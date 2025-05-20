import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsSelectSchema } from '../inputTypeSchemas/referralsSelectSchema';
import { referralsIncludeSchema } from '../inputTypeSchemas/referralsIncludeSchema';

export const referralsArgsSchema: z.ZodType<Prisma.referralsDefaultArgs> = z
	.object({
		select: z.lazy(() => referralsSelectSchema).optional(),
		include: z.lazy(() => referralsIncludeSchema).optional(),
	})
	.strict();

export default referralsArgsSchema;
