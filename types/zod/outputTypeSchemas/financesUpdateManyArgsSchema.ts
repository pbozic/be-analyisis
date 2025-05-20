import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesUpdateManyMutationInputSchema } from '../inputTypeSchemas/financesUpdateManyMutationInputSchema';
import { financesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/financesUncheckedUpdateManyInputSchema';
import { financesWhereInputSchema } from '../inputTypeSchemas/financesWhereInputSchema';

export const financesUpdateManyArgsSchema: z.ZodType<Prisma.financesUpdateManyArgs> = z
	.object({
		data: z.union([financesUpdateManyMutationInputSchema, financesUncheckedUpdateManyInputSchema]),
		where: financesWhereInputSchema.optional(),
	})
	.strict();

export default financesUpdateManyArgsSchema;
