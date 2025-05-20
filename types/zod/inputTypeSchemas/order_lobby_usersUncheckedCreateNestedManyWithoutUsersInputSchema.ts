import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersCreateWithoutUsersInputSchema } from './order_lobby_usersCreateWithoutUsersInputSchema';
import { order_lobby_usersUncheckedCreateWithoutUsersInputSchema } from './order_lobby_usersUncheckedCreateWithoutUsersInputSchema';
import { order_lobby_usersCreateOrConnectWithoutUsersInputSchema } from './order_lobby_usersCreateOrConnectWithoutUsersInputSchema';
import { order_lobby_usersCreateManyUsersInputEnvelopeSchema } from './order_lobby_usersCreateManyUsersInputEnvelopeSchema';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';

export const order_lobby_usersUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.order_lobby_usersUncheckedCreateNestedManyWithoutUsersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobby_usersCreateWithoutUsersInputSchema),
					z.lazy(() => order_lobby_usersCreateWithoutUsersInputSchema).array(),
					z.lazy(() => order_lobby_usersUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => order_lobby_usersUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => order_lobby_usersCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => order_lobby_usersCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => order_lobby_usersCreateManyUsersInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => order_lobby_usersWhereUniqueInputSchema),
					z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default order_lobby_usersUncheckedCreateNestedManyWithoutUsersInputSchema;
