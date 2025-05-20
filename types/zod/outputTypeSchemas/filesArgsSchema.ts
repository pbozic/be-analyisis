import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesSelectSchema } from '../inputTypeSchemas/filesSelectSchema';
import { filesIncludeSchema } from '../inputTypeSchemas/filesIncludeSchema';

export const filesArgsSchema: z.ZodType<Prisma.filesDefaultArgs> = z
	.object({
		select: z.lazy(() => filesSelectSchema).optional(),
		include: z.lazy(() => filesIncludeSchema).optional(),
	})
	.strict();

export default filesArgsSchema;
