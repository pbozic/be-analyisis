import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesCreateWithoutBusiness_usersInputSchema } from './addressesCreateWithoutBusiness_usersInputSchema';
import { addressesUncheckedCreateWithoutBusiness_usersInputSchema } from './addressesUncheckedCreateWithoutBusiness_usersInputSchema';

export const addressesCreateOrConnectWithoutBusiness_usersInputSchema: z.ZodType<Prisma.addressesCreateOrConnectWithoutBusiness_usersInput> =
	z
		.object({
			where: z.lazy(() => addressesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => addressesCreateWithoutBusiness_usersInputSchema),
				z.lazy(() => addressesUncheckedCreateWithoutBusiness_usersInputSchema),
			]),
		})
		.strict();

export default addressesCreateOrConnectWithoutBusiness_usersInputSchema;
