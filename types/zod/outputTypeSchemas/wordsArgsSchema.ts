import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsSelectSchema } from '../inputTypeSchemas/wordsSelectSchema';
import { wordsIncludeSchema } from '../inputTypeSchemas/wordsIncludeSchema';

export const wordsArgsSchema: z.ZodType<Prisma.wordsDefaultArgs> = z
	.object({
		select: z.lazy(() => wordsSelectSchema).optional(),
		include: z.lazy(() => wordsIncludeSchema).optional(),
	})
	.strict();

export default wordsArgsSchema;
