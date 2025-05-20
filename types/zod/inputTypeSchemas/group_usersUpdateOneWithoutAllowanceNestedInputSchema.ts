import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersCreateWithoutAllowanceInputSchema } from './group_usersCreateWithoutAllowanceInputSchema';
import { group_usersUncheckedCreateWithoutAllowanceInputSchema } from './group_usersUncheckedCreateWithoutAllowanceInputSchema';
import { group_usersCreateOrConnectWithoutAllowanceInputSchema } from './group_usersCreateOrConnectWithoutAllowanceInputSchema';
import { group_usersUpsertWithoutAllowanceInputSchema } from './group_usersUpsertWithoutAllowanceInputSchema';
import { group_usersWhereInputSchema } from './group_usersWhereInputSchema';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';
import { group_usersUpdateToOneWithWhereWithoutAllowanceInputSchema } from './group_usersUpdateToOneWithWhereWithoutAllowanceInputSchema';
import { group_usersUpdateWithoutAllowanceInputSchema } from './group_usersUpdateWithoutAllowanceInputSchema';
import { group_usersUncheckedUpdateWithoutAllowanceInputSchema } from './group_usersUncheckedUpdateWithoutAllowanceInputSchema';

export const group_usersUpdateOneWithoutAllowanceNestedInputSchema: z.ZodType<Prisma.group_usersUpdateOneWithoutAllowanceNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => group_usersCreateWithoutAllowanceInputSchema),
					z.lazy(() => group_usersUncheckedCreateWithoutAllowanceInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => group_usersCreateOrConnectWithoutAllowanceInputSchema).optional(),
			upsert: z.lazy(() => group_usersUpsertWithoutAllowanceInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => group_usersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => group_usersWhereInputSchema)]).optional(),
			connect: z.lazy(() => group_usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => group_usersUpdateToOneWithWhereWithoutAllowanceInputSchema),
					z.lazy(() => group_usersUpdateWithoutAllowanceInputSchema),
					z.lazy(() => group_usersUncheckedUpdateWithoutAllowanceInputSchema),
				])
				.optional(),
		})
		.strict();

export default group_usersUpdateOneWithoutAllowanceNestedInputSchema;
