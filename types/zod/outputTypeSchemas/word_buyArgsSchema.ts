import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_buySelectSchema } from '../inputTypeSchemas/word_buySelectSchema';
import { word_buyIncludeSchema } from '../inputTypeSchemas/word_buyIncludeSchema';

export const word_buyArgsSchema: z.ZodType<Prisma.word_buyDefaultArgs> = z
	.object({
		select: z.lazy(() => word_buySelectSchema).optional(),
		include: z.lazy(() => word_buyIncludeSchema).optional(),
	})
	.strict();

export default word_buyArgsSchema;
