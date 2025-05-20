import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const referralsCountOutputTypeSelectSchema: z.ZodType<Prisma.referralsCountOutputTypeSelect> = z
	.object({
		credits: z.boolean().optional(),
	})
	.strict();

export default referralsCountOutputTypeSelectSchema;
