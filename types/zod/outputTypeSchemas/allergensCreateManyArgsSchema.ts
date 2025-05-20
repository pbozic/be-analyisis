import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensCreateManyInputSchema } from '../inputTypeSchemas/allergensCreateManyInputSchema';

export const allergensCreateManyArgsSchema: z.ZodType<Prisma.allergensCreateManyArgs> = z
	.object({
		data: z.union([allergensCreateManyInputSchema, allergensCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default allergensCreateManyArgsSchema;
