import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsSelectSchema } from '../inputTypeSchemas/local_productsSelectSchema';
import { local_productsIncludeSchema } from '../inputTypeSchemas/local_productsIncludeSchema';

export const local_productsArgsSchema: z.ZodType<Prisma.local_productsDefaultArgs> = z
	.object({
		select: z.lazy(() => local_productsSelectSchema).optional(),
		include: z.lazy(() => local_productsIncludeSchema).optional(),
	})
	.strict();

export default local_productsArgsSchema;
