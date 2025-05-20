import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusCountOutputTypeSelectSchema } from './menusCountOutputTypeSelectSchema';

export const menusCountOutputTypeArgsSchema: z.ZodType<Prisma.menusCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => menusCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default menusCountOutputTypeSelectSchema;
