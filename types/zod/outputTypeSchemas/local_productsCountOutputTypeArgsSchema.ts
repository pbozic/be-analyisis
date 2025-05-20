import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsCountOutputTypeSelectSchema } from './local_productsCountOutputTypeSelectSchema';

export const local_productsCountOutputTypeArgsSchema: z.ZodType<Prisma.local_productsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => local_productsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default local_productsCountOutputTypeSelectSchema;
