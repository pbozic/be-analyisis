import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allowancesSelectSchema } from '../inputTypeSchemas/allowancesSelectSchema';
import { allowancesIncludeSchema } from '../inputTypeSchemas/allowancesIncludeSchema';

export const allowancesArgsSchema: z.ZodType<Prisma.allowancesDefaultArgs> = z
	.object({
		select: z.lazy(() => allowancesSelectSchema).optional(),
		include: z.lazy(() => allowancesIncludeSchema).optional(),
	})
	.strict();

export default allowancesArgsSchema;
