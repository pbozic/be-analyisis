import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesUpdateManyMutationInputSchema } from '../inputTypeSchemas/user_rolesUpdateManyMutationInputSchema';
import { user_rolesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/user_rolesUncheckedUpdateManyInputSchema';
import { user_rolesWhereInputSchema } from '../inputTypeSchemas/user_rolesWhereInputSchema';

export const user_rolesUpdateManyArgsSchema: z.ZodType<Prisma.user_rolesUpdateManyArgs> = z
	.object({
		data: z.union([user_rolesUpdateManyMutationInputSchema, user_rolesUncheckedUpdateManyInputSchema]),
		where: user_rolesWhereInputSchema.optional(),
	})
	.strict();

export default user_rolesUpdateManyArgsSchema;
