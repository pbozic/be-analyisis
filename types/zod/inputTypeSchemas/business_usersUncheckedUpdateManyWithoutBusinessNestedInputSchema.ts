import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutBusinessInputSchema } from './business_usersCreateWithoutBusinessInputSchema';
import { business_usersUncheckedCreateWithoutBusinessInputSchema } from './business_usersUncheckedCreateWithoutBusinessInputSchema';
import { business_usersCreateOrConnectWithoutBusinessInputSchema } from './business_usersCreateOrConnectWithoutBusinessInputSchema';
import { business_usersUpsertWithWhereUniqueWithoutBusinessInputSchema } from './business_usersUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { business_usersCreateManyBusinessInputEnvelopeSchema } from './business_usersCreateManyBusinessInputEnvelopeSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateWithWhereUniqueWithoutBusinessInputSchema } from './business_usersUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { business_usersUpdateManyWithWhereWithoutBusinessInputSchema } from './business_usersUpdateManyWithWhereWithoutBusinessInputSchema';
import { business_usersScalarWhereInputSchema } from './business_usersScalarWhereInputSchema';

export const business_usersUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.business_usersUncheckedUpdateManyWithoutBusinessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => business_usersCreateWithoutBusinessInputSchema),
					z.lazy(() => business_usersCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => business_usersUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => business_usersUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => business_usersCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => business_usersCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => business_usersUpsertWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => business_usersUpsertWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => business_usersCreateManyBusinessInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => business_usersWhereUniqueInputSchema),
					z.lazy(() => business_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => business_usersWhereUniqueInputSchema),
					z.lazy(() => business_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => business_usersWhereUniqueInputSchema),
					z.lazy(() => business_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => business_usersWhereUniqueInputSchema),
					z.lazy(() => business_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => business_usersUpdateWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => business_usersUpdateWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => business_usersUpdateManyWithWhereWithoutBusinessInputSchema),
					z.lazy(() => business_usersUpdateManyWithWhereWithoutBusinessInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => business_usersScalarWhereInputSchema),
					z.lazy(() => business_usersScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default business_usersUncheckedUpdateManyWithoutBusinessNestedInputSchema;
