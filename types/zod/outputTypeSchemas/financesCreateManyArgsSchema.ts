import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesCreateManyInputSchema } from '../inputTypeSchemas/financesCreateManyInputSchema';

export const financesCreateManyArgsSchema: z.ZodType<Prisma.financesCreateManyArgs> = z
	.object({
		data: z.union([financesCreateManyInputSchema, financesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default financesCreateManyArgsSchema;
