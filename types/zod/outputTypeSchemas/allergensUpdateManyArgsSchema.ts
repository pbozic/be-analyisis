import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensUpdateManyMutationInputSchema } from '../inputTypeSchemas/allergensUpdateManyMutationInputSchema';
import { allergensUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/allergensUncheckedUpdateManyInputSchema';
import { allergensWhereInputSchema } from '../inputTypeSchemas/allergensWhereInputSchema';

export const allergensUpdateManyArgsSchema: z.ZodType<Prisma.allergensUpdateManyArgs> = z
	.object({
		data: z.union([allergensUpdateManyMutationInputSchema, allergensUncheckedUpdateManyInputSchema]),
		where: allergensWhereInputSchema.optional(),
	})
	.strict();

export default allergensUpdateManyArgsSchema;
