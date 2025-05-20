import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { transactionsCountOutputTypeSelectSchema } from './transactionsCountOutputTypeSelectSchema';

export const transactionsCountOutputTypeArgsSchema: z.ZodType<Prisma.transactionsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => transactionsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default transactionsCountOutputTypeSelectSchema;
