import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesWhereInputSchema } from '../inputTypeSchemas/local_pricesWhereInputSchema';

export const local_pricesDeleteManyArgsSchema: z.ZodType<Prisma.local_pricesDeleteManyArgs> = z
	.object({
		where: local_pricesWhereInputSchema.optional(),
	})
	.strict();

export default local_pricesDeleteManyArgsSchema;
