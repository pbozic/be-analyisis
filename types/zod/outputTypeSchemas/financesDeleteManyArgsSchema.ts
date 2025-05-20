import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesWhereInputSchema } from '../inputTypeSchemas/financesWhereInputSchema';

export const financesDeleteManyArgsSchema: z.ZodType<Prisma.financesDeleteManyArgs> = z
	.object({
		where: financesWhereInputSchema.optional(),
	})
	.strict();

export default financesDeleteManyArgsSchema;
