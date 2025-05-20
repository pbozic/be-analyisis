import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateManyInputSchema } from '../inputTypeSchemas/filesCreateManyInputSchema';

export const filesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.filesCreateManyAndReturnArgs> = z
	.object({
		data: z.union([filesCreateManyInputSchema, filesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default filesCreateManyAndReturnArgsSchema;
