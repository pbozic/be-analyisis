import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersCountOutputTypeSelectSchema } from './business_usersCountOutputTypeSelectSchema';

export const business_usersCountOutputTypeArgsSchema: z.ZodType<Prisma.business_usersCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => business_usersCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default business_usersCountOutputTypeSelectSchema;
