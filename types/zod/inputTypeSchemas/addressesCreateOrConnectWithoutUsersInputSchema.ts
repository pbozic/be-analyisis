import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesCreateWithoutUsersInputSchema } from './addressesCreateWithoutUsersInputSchema';
import { addressesUncheckedCreateWithoutUsersInputSchema } from './addressesUncheckedCreateWithoutUsersInputSchema';

export const addressesCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.addressesCreateOrConnectWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => addressesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => addressesCreateWithoutUsersInputSchema),
				z.lazy(() => addressesUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default addressesCreateOrConnectWithoutUsersInputSchema;
