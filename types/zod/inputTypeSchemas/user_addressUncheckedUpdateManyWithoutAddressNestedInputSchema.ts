import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_addressCreateWithoutAddressInputSchema } from './user_addressCreateWithoutAddressInputSchema';
import { user_addressUncheckedCreateWithoutAddressInputSchema } from './user_addressUncheckedCreateWithoutAddressInputSchema';
import { user_addressCreateOrConnectWithoutAddressInputSchema } from './user_addressCreateOrConnectWithoutAddressInputSchema';
import { user_addressUpsertWithWhereUniqueWithoutAddressInputSchema } from './user_addressUpsertWithWhereUniqueWithoutAddressInputSchema';
import { user_addressCreateManyAddressInputEnvelopeSchema } from './user_addressCreateManyAddressInputEnvelopeSchema';
import { user_addressWhereUniqueInputSchema } from './user_addressWhereUniqueInputSchema';
import { user_addressUpdateWithWhereUniqueWithoutAddressInputSchema } from './user_addressUpdateWithWhereUniqueWithoutAddressInputSchema';
import { user_addressUpdateManyWithWhereWithoutAddressInputSchema } from './user_addressUpdateManyWithWhereWithoutAddressInputSchema';
import { user_addressScalarWhereInputSchema } from './user_addressScalarWhereInputSchema';

export const user_addressUncheckedUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.user_addressUncheckedUpdateManyWithoutAddressNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => user_addressCreateWithoutAddressInputSchema),
					z.lazy(() => user_addressCreateWithoutAddressInputSchema).array(),
					z.lazy(() => user_addressUncheckedCreateWithoutAddressInputSchema),
					z.lazy(() => user_addressUncheckedCreateWithoutAddressInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => user_addressCreateOrConnectWithoutAddressInputSchema),
					z.lazy(() => user_addressCreateOrConnectWithoutAddressInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => user_addressUpsertWithWhereUniqueWithoutAddressInputSchema),
					z.lazy(() => user_addressUpsertWithWhereUniqueWithoutAddressInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => user_addressCreateManyAddressInputEnvelopeSchema).optional(),
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
					z.lazy(() => user_addressUpdateWithWhereUniqueWithoutAddressInputSchema),
					z.lazy(() => user_addressUpdateWithWhereUniqueWithoutAddressInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => user_addressUpdateManyWithWhereWithoutAddressInputSchema),
					z.lazy(() => user_addressUpdateManyWithWhereWithoutAddressInputSchema).array(),
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

export default user_addressUncheckedUpdateManyWithoutAddressNestedInputSchema;
