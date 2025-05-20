import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressCreateWithoutUsersInputSchema } from './user_addressCreateWithoutUsersInputSchema';
import { user_addressUncheckedCreateWithoutUsersInputSchema } from './user_addressUncheckedCreateWithoutUsersInputSchema';
import { user_addressCreateOrConnectWithoutUsersInputSchema } from './user_addressCreateOrConnectWithoutUsersInputSchema';
import { user_addressUpsertWithWhereUniqueWithoutUsersInputSchema } from './user_addressUpsertWithWhereUniqueWithoutUsersInputSchema';
import { user_addressCreateManyUsersInputEnvelopeSchema } from './user_addressCreateManyUsersInputEnvelopeSchema';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';
import { user_addressUpdateWithWhereUniqueWithoutUsersInputSchema } from './user_addressUpdateWithWhereUniqueWithoutUsersInputSchema';
import { user_addressUpdateManyWithWhereWithoutUsersInputSchema } from './user_addressUpdateManyWithWhereWithoutUsersInputSchema';
import { user_addressScalarWhereInputSchema } from './user_addressScalarWhereInputSchema';

export const user_addressUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.user_addressUpdateManyWithoutUsersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => user_addressCreateWithoutUsersInputSchema),
					z.lazy(() => user_addressCreateWithoutUsersInputSchema).array(),
					z.lazy(() => user_addressUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => user_addressUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => user_addressCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => user_addressCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => user_addressUpsertWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => user_addressUpsertWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => user_addressCreateManyUsersInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => user_addressWhereUniqueInputSchema),
					z.lazy(() => user_addressWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => user_addressWhereUniqueInputSchema),
					z.lazy(() => user_addressWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => user_addressWhereUniqueInputSchema),
					z.lazy(() => user_addressWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => user_addressWhereUniqueInputSchema),
					z.lazy(() => user_addressWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => user_addressUpdateWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => user_addressUpdateWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => user_addressUpdateManyWithWhereWithoutUsersInputSchema),
					z.lazy(() => user_addressUpdateManyWithWhereWithoutUsersInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => user_addressScalarWhereInputSchema),
					z.lazy(() => user_addressScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default user_addressUpdateManyWithoutUsersNestedInputSchema;
