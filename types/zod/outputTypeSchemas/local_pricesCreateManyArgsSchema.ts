import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesCreateManyInputSchema } from '../inputTypeSchemas/local_pricesCreateManyInputSchema';

export const local_pricesCreateManyArgsSchema: z.ZodType<Prisma.local_pricesCreateManyArgs> = z
	.object({
		data: z.union([local_pricesCreateManyInputSchema, local_pricesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default local_pricesCreateManyArgsSchema;
