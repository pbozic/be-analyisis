import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_rolesScalarWhereInputSchema } from './user_rolesScalarWhereInputSchema';
import { user_rolesUpdateManyMutationInputSchema } from './user_rolesUpdateManyMutationInputSchema';
import { user_rolesUncheckedUpdateManyWithoutUserInputSchema } from './user_rolesUncheckedUpdateManyWithoutUserInputSchema';

export const user_rolesUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.user_rolesUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => user_rolesScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => user_rolesUpdateManyMutationInputSchema),
				z.lazy(() => user_rolesUncheckedUpdateManyWithoutUserInputSchema),
			]),
		})
		.strict();

export default user_rolesUpdateManyWithWhereWithoutUserInputSchema;
