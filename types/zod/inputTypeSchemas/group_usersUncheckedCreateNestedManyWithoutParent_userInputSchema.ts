import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersCreateWithoutParent_userInputSchema } from './group_usersCreateWithoutParent_userInputSchema';
import { group_usersUncheckedCreateWithoutParent_userInputSchema } from './group_usersUncheckedCreateWithoutParent_userInputSchema';
import { group_usersCreateOrConnectWithoutParent_userInputSchema } from './group_usersCreateOrConnectWithoutParent_userInputSchema';
import { group_usersCreateManyParent_userInputEnvelopeSchema } from './group_usersCreateManyParent_userInputEnvelopeSchema';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';

export const group_usersUncheckedCreateNestedManyWithoutParent_userInputSchema: z.ZodType<Prisma.group_usersUncheckedCreateNestedManyWithoutParent_userInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => group_usersCreateWithoutParent_userInputSchema),
					z.lazy(() => group_usersCreateWithoutParent_userInputSchema).array(),
					z.lazy(() => group_usersUncheckedCreateWithoutParent_userInputSchema),
					z.lazy(() => group_usersUncheckedCreateWithoutParent_userInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => group_usersCreateOrConnectWithoutParent_userInputSchema),
					z.lazy(() => group_usersCreateOrConnectWithoutParent_userInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => group_usersCreateManyParent_userInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => group_usersWhereUniqueInputSchema),
					z.lazy(() => group_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default group_usersUncheckedCreateNestedManyWithoutParent_userInputSchema;
