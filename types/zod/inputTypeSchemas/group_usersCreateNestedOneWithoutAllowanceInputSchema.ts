import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersCreateWithoutAllowanceInputSchema } from './group_usersCreateWithoutAllowanceInputSchema';
import { group_usersUncheckedCreateWithoutAllowanceInputSchema } from './group_usersUncheckedCreateWithoutAllowanceInputSchema';
import { group_usersCreateOrConnectWithoutAllowanceInputSchema } from './group_usersCreateOrConnectWithoutAllowanceInputSchema';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';

export const group_usersCreateNestedOneWithoutAllowanceInputSchema: z.ZodType<Prisma.group_usersCreateNestedOneWithoutAllowanceInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => group_usersCreateWithoutAllowanceInputSchema),
					z.lazy(() => group_usersUncheckedCreateWithoutAllowanceInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => group_usersCreateOrConnectWithoutAllowanceInputSchema).optional(),
			connect: z.lazy(() => group_usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default group_usersCreateNestedOneWithoutAllowanceInputSchema;
