import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { group_usersCreateWithoutParent_userInputSchema } from './group_usersCreateWithoutParent_userInputSchema';
import { group_usersUncheckedCreateWithoutParent_userInputSchema } from './group_usersUncheckedCreateWithoutParent_userInputSchema';
import { group_usersCreateOrConnectWithoutParent_userInputSchema } from './group_usersCreateOrConnectWithoutParent_userInputSchema';
import { group_usersUpsertWithWhereUniqueWithoutParent_userInputSchema } from './group_usersUpsertWithWhereUniqueWithoutParent_userInputSchema';
import { group_usersCreateManyParent_userInputEnvelopeSchema } from './group_usersCreateManyParent_userInputEnvelopeSchema';
import { group_usersWhereUniqueInputSchema } from './group_usersWhereUniqueInputSchema';
import { group_usersUpdateWithWhereUniqueWithoutParent_userInputSchema } from './group_usersUpdateWithWhereUniqueWithoutParent_userInputSchema';
import { group_usersUpdateManyWithWhereWithoutParent_userInputSchema } from './group_usersUpdateManyWithWhereWithoutParent_userInputSchema';
import { group_usersScalarWhereInputSchema } from './group_usersScalarWhereInputSchema';

export const group_usersUpdateManyWithoutParent_userNestedInputSchema: z.ZodType<Prisma.group_usersUpdateManyWithoutParent_userNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => group_usersUpsertWithWhereUniqueWithoutParent_userInputSchema),
					z.lazy(() => group_usersUpsertWithWhereUniqueWithoutParent_userInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => group_usersCreateManyParent_userInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => group_usersWhereUniqueInputSchema),
					z.lazy(() => group_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => group_usersWhereUniqueInputSchema),
					z.lazy(() => group_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => group_usersWhereUniqueInputSchema),
					z.lazy(() => group_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => group_usersWhereUniqueInputSchema),
					z.lazy(() => group_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => group_usersUpdateWithWhereUniqueWithoutParent_userInputSchema),
					z.lazy(() => group_usersUpdateWithWhereUniqueWithoutParent_userInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => group_usersUpdateManyWithWhereWithoutParent_userInputSchema),
					z.lazy(() => group_usersUpdateManyWithWhereWithoutParent_userInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => group_usersScalarWhereInputSchema),
					z.lazy(() => group_usersScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default group_usersUpdateManyWithoutParent_userNestedInputSchema;
