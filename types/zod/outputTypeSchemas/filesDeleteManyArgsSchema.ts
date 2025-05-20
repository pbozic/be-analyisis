import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereInputSchema } from '../inputTypeSchemas/filesWhereInputSchema';

export const filesDeleteManyArgsSchema: z.ZodType<Prisma.filesDeleteManyArgs> = z
	.object({
		where: filesWhereInputSchema.optional(),
	})
	.strict();

export default filesDeleteManyArgsSchema;
