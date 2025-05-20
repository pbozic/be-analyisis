import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsCreateManyInputSchema } from '../inputTypeSchemas/documentsCreateManyInputSchema';

export const documentsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.documentsCreateManyAndReturnArgs> = z
	.object({
		data: z.union([documentsCreateManyInputSchema, documentsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default documentsCreateManyAndReturnArgsSchema;
