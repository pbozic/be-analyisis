import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsCountOutputTypeSelectSchema } from './wordsCountOutputTypeSelectSchema';

export const wordsCountOutputTypeArgsSchema: z.ZodType<Prisma.wordsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => wordsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default wordsCountOutputTypeSelectSchema;
