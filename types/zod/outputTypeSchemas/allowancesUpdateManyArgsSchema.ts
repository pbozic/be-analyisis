import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allowancesUpdateManyMutationInputSchema } from '../inputTypeSchemas/allowancesUpdateManyMutationInputSchema';
import { allowancesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/allowancesUncheckedUpdateManyInputSchema';
import { allowancesWhereInputSchema } from '../inputTypeSchemas/allowancesWhereInputSchema';

export const allowancesUpdateManyArgsSchema: z.ZodType<Prisma.allowancesUpdateManyArgs> = z
	.object({
		data: z.union([allowancesUpdateManyMutationInputSchema, allowancesUncheckedUpdateManyInputSchema]),
		where: allowancesWhereInputSchema.optional(),
	})
	.strict();

export default allowancesUpdateManyArgsSchema;
