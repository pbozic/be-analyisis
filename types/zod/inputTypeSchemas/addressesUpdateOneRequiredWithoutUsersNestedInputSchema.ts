import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutUsersInputSchema } from './addressesCreateWithoutUsersInputSchema';
import { addressesUncheckedCreateWithoutUsersInputSchema } from './addressesUncheckedCreateWithoutUsersInputSchema';
import { addressesCreateOrConnectWithoutUsersInputSchema } from './addressesCreateOrConnectWithoutUsersInputSchema';
import { addressesUpsertWithoutUsersInputSchema } from './addressesUpsertWithoutUsersInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesUpdateToOneWithWhereWithoutUsersInputSchema } from './addressesUpdateToOneWithWhereWithoutUsersInputSchema';
import { addressesUpdateWithoutUsersInputSchema } from './addressesUpdateWithoutUsersInputSchema';
import { addressesUncheckedUpdateWithoutUsersInputSchema } from './addressesUncheckedUpdateWithoutUsersInputSchema';

export const addressesUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.addressesUpdateOneRequiredWithoutUsersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => addressesCreateWithoutUsersInputSchema),
					z.lazy(() => addressesUncheckedCreateWithoutUsersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutUsersInputSchema).optional(),
			upsert: z.lazy(() => addressesUpsertWithoutUsersInputSchema).optional(),
			connect: z.lazy(() => addressesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => addressesUpdateToOneWithWhereWithoutUsersInputSchema),
					z.lazy(() => addressesUpdateWithoutUsersInputSchema),
					z.lazy(() => addressesUncheckedUpdateWithoutUsersInputSchema),
				])
				.optional(),
		})
		.strict();

export default addressesUpdateOneRequiredWithoutUsersNestedInputSchema;
