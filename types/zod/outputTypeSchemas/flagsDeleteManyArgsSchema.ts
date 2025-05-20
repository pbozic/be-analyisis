import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flagsWhereInputSchema } from '../inputTypeSchemas/flagsWhereInputSchema';

export const flagsDeleteManyArgsSchema: z.ZodType<Prisma.flagsDeleteManyArgs> = z
	.object({
		where: flagsWhereInputSchema.optional(),
	})
	.strict();

export default flagsDeleteManyArgsSchema;
