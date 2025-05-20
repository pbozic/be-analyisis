import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsCountOutputTypeSelectSchema } from './referralsCountOutputTypeSelectSchema';

export const referralsCountOutputTypeArgsSchema: z.ZodType<Prisma.referralsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => referralsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default referralsCountOutputTypeSelectSchema;
