import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateManyInputSchema } from '../inputTypeSchemas/filesCreateManyInputSchema';

export const filesCreateManyArgsSchema: z.ZodType<Prisma.filesCreateManyArgs> = z
	.object({
		data: z.union([filesCreateManyInputSchema, filesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default filesCreateManyArgsSchema;
