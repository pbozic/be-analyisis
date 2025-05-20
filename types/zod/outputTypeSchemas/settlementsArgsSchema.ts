import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { settlementsSelectSchema } from '../inputTypeSchemas/settlementsSelectSchema';
import { settlementsIncludeSchema } from '../inputTypeSchemas/settlementsIncludeSchema';

export const settlementsArgsSchema: z.ZodType<Prisma.settlementsDefaultArgs> = z
	.object({
		select: z.lazy(() => settlementsSelectSchema).optional(),
		include: z.lazy(() => settlementsIncludeSchema).optional(),
	})
	.strict();

export default settlementsArgsSchema;
