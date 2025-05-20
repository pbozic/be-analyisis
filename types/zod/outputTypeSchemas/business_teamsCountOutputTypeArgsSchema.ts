import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_teamsCountOutputTypeSelectSchema } from './business_teamsCountOutputTypeSelectSchema';

export const business_teamsCountOutputTypeArgsSchema: z.ZodType<Prisma.business_teamsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => business_teamsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default business_teamsCountOutputTypeSelectSchema;
