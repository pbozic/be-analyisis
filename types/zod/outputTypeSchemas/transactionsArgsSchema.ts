import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { transactionsSelectSchema } from '../inputTypeSchemas/transactionsSelectSchema';
import { transactionsIncludeSchema } from '../inputTypeSchemas/transactionsIncludeSchema';

export const transactionsArgsSchema: z.ZodType<Prisma.transactionsDefaultArgs> = z
	.object({
		select: z.lazy(() => transactionsSelectSchema).optional(),
		include: z.lazy(() => transactionsIncludeSchema).optional(),
	})
	.strict();

export default transactionsArgsSchema;
