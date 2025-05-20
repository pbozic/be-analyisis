import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { settlementsWhereInputSchema } from '../inputTypeSchemas/settlementsWhereInputSchema';

export const settlementsDeleteManyArgsSchema: z.ZodType<Prisma.settlementsDeleteManyArgs> = z
	.object({
		where: settlementsWhereInputSchema.optional(),
	})
	.strict();

export default settlementsDeleteManyArgsSchema;
