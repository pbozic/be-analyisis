import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { transactionsCreateManyInputSchema } from '../inputTypeSchemas/transactionsCreateManyInputSchema';

export const transactionsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.transactionsCreateManyAndReturnArgs> = z
	.object({
		data: z.union([transactionsCreateManyInputSchema, transactionsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default transactionsCreateManyAndReturnArgsSchema;
