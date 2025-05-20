import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsCountOutputTypeSelectSchema } from './flagsCountOutputTypeSelectSchema';

export const flagsCountOutputTypeArgsSchema: z.ZodType<Prisma.flagsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => flagsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default flagsCountOutputTypeSelectSchema;
