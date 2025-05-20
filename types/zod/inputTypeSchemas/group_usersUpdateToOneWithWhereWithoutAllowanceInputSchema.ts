import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';
import { group_usersUpdateWithoutAllowanceInputSchema } from './group_usersUpdateWithoutAllowanceInputSchema';
import { group_usersUncheckedUpdateWithoutAllowanceInputSchema } from './group_usersUncheckedUpdateWithoutAllowanceInputSchema';

export const group_usersUpdateToOneWithWhereWithoutAllowanceInputSchema: z.ZodType<Prisma.group_usersUpdateToOneWithWhereWithoutAllowanceInput> =
	z
		.object({
			where: z.lazy(() => group_usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => group_usersUpdateWithoutAllowanceInputSchema),
				z.lazy(() => group_usersUncheckedUpdateWithoutAllowanceInputSchema),
			]),
		})
		.strict();

export default group_usersUpdateToOneWithWhereWithoutAllowanceInputSchema;
