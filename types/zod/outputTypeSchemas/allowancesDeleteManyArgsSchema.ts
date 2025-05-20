import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allowancesWhereInputSchema } from '../inputTypeSchemas/allowancesWhereInputSchema';

export const allowancesDeleteManyArgsSchema: z.ZodType<Prisma.allowancesDeleteManyArgs> = z
	.object({
		where: allowancesWhereInputSchema.optional(),
	})
	.strict();

export default allowancesDeleteManyArgsSchema;
