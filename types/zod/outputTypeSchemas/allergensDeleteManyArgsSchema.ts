import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensWhereInputSchema } from '../inputTypeSchemas/allergensWhereInputSchema';

export const allergensDeleteManyArgsSchema: z.ZodType<Prisma.allergensDeleteManyArgs> = z
	.object({
		where: allergensWhereInputSchema.optional(),
	})
	.strict();

export default allergensDeleteManyArgsSchema;
