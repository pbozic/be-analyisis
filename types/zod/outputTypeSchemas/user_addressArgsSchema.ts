import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressSelectSchema } from '../inputTypeSchemas/user_addressSelectSchema';
import { user_addressIncludeSchema } from '../inputTypeSchemas/user_addressIncludeSchema';

export const user_addressArgsSchema: z.ZodType<Prisma.user_addressDefaultArgs> = z
	.object({
		select: z.lazy(() => user_addressSelectSchema).optional(),
		include: z.lazy(() => user_addressIncludeSchema).optional(),
	})
	.strict();

export default user_addressArgsSchema;
