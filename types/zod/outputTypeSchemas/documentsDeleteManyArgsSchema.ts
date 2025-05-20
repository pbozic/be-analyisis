import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsWhereInputSchema } from '../inputTypeSchemas/documentsWhereInputSchema';

export const documentsDeleteManyArgsSchema: z.ZodType<Prisma.documentsDeleteManyArgs> = z
	.object({
		where: documentsWhereInputSchema.optional(),
	})
	.strict();

export default documentsDeleteManyArgsSchema;
