import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_rolesCreateWithoutUserInputSchema } from './user_rolesCreateWithoutUserInputSchema';
import { user_rolesUncheckedCreateWithoutUserInputSchema } from './user_rolesUncheckedCreateWithoutUserInputSchema';
import { user_rolesCreateOrConnectWithoutUserInputSchema } from './user_rolesCreateOrConnectWithoutUserInputSchema';
import { user_rolesCreateManyUserInputEnvelopeSchema } from './user_rolesCreateManyUserInputEnvelopeSchema';
import { user_rolesWhereUniqueInputSchema } from './user_rolesWhereUniqueInputSchema';

export const user_rolesUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.user_rolesUncheckedCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => user_rolesCreateWithoutUserInputSchema),
					z.lazy(() => user_rolesCreateWithoutUserInputSchema).array(),
					z.lazy(() => user_rolesUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => user_rolesUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => user_rolesCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => user_rolesCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => user_rolesCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => user_rolesWhereUniqueInputSchema),
					z.lazy(() => user_rolesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default user_rolesUncheckedCreateNestedManyWithoutUserInputSchema;
