import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsUpdateManyMutationInputSchema } from '../inputTypeSchemas/translationsUpdateManyMutationInputSchema';
import { translationsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/translationsUncheckedUpdateManyInputSchema';
import { translationsWhereInputSchema } from '../inputTypeSchemas/translationsWhereInputSchema';

export const translationsUpdateManyArgsSchema: z.ZodType<Prisma.translationsUpdateManyArgs> = z
	.object({
		data: z.union([translationsUpdateManyMutationInputSchema, translationsUncheckedUpdateManyInputSchema]),
		where: translationsWhereInputSchema.optional(),
	})
	.strict();

export default translationsUpdateManyArgsSchema;
