import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsWhereInputSchema } from '../inputTypeSchemas/local_productsWhereInputSchema';

export const local_productsDeleteManyArgsSchema: z.ZodType<Prisma.local_productsDeleteManyArgs> = z
	.object({
		where: local_productsWhereInputSchema.optional(),
	})
	.strict();

export default local_productsDeleteManyArgsSchema;
