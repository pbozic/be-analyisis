import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { group_usersUpdateManyMutationInputSchema } from '../inputTypeSchemas/group_usersUpdateManyMutationInputSchema';
import { group_usersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/group_usersUncheckedUpdateManyInputSchema';
import { group_usersWhereInputSchema } from '../inputTypeSchemas/group_usersWhereInputSchema';

export const group_usersUpdateManyArgsSchema: z.ZodType<Prisma.group_usersUpdateManyArgs> = z
	.object({
		data: z.union([group_usersUpdateManyMutationInputSchema, group_usersUncheckedUpdateManyInputSchema]),
		where: group_usersWhereInputSchema.optional(),
	})
	.strict();

export default group_usersUpdateManyArgsSchema;
