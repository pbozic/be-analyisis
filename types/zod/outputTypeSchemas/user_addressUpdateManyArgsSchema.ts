import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressUpdateManyMutationInputSchema } from '../inputTypeSchemas/user_addressUpdateManyMutationInputSchema';
import { user_addressUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/user_addressUncheckedUpdateManyInputSchema';
import { user_addressWhereInputSchema } from '../inputTypeSchemas/user_addressWhereInputSchema';

export const user_addressUpdateManyArgsSchema: z.ZodType<Prisma.user_addressUpdateManyArgs> = z
	.object({
		data: z.union([user_addressUpdateManyMutationInputSchema, user_addressUncheckedUpdateManyInputSchema]),
		where: user_addressWhereInputSchema.optional(),
	})
	.strict();

export default user_addressUpdateManyArgsSchema;
