import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { settlementsCreateManyInputSchema } from '../inputTypeSchemas/settlementsCreateManyInputSchema';

export const settlementsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.settlementsCreateManyAndReturnArgs> = z
	.object({
		data: z.union([settlementsCreateManyInputSchema, settlementsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default settlementsCreateManyAndReturnArgsSchema;
