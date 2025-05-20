import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableWhereInputSchema } from '../inputTypeSchemas/translatableWhereInputSchema';

export const translatableDeleteManyArgsSchema: z.ZodType<Prisma.translatableDeleteManyArgs> = z
	.object({
		where: translatableWhereInputSchema.optional(),
	})
	.strict();

export default translatableDeleteManyArgsSchema;
