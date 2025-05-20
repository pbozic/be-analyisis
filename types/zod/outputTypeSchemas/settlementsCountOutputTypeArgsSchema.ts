import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { settlementsCountOutputTypeSelectSchema } from './settlementsCountOutputTypeSelectSchema';

export const settlementsCountOutputTypeArgsSchema: z.ZodType<Prisma.settlementsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => settlementsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default settlementsCountOutputTypeSelectSchema;
