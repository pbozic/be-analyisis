import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesUpdateWithoutBusiness_usersInputSchema } from './addressesUpdateWithoutBusiness_usersInputSchema';
import { addressesUncheckedUpdateWithoutBusiness_usersInputSchema } from './addressesUncheckedUpdateWithoutBusiness_usersInputSchema';
import { addressesCreateWithoutBusiness_usersInputSchema } from './addressesCreateWithoutBusiness_usersInputSchema';
import { addressesUncheckedCreateWithoutBusiness_usersInputSchema } from './addressesUncheckedCreateWithoutBusiness_usersInputSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const addressesUpsertWithoutBusiness_usersInputSchema: z.ZodType<Prisma.addressesUpsertWithoutBusiness_usersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => addressesUpdateWithoutBusiness_usersInputSchema),
				z.lazy(() => addressesUncheckedUpdateWithoutBusiness_usersInputSchema),
			]),
			create: z.union([
				z.lazy(() => addressesCreateWithoutBusiness_usersInputSchema),
				z.lazy(() => addressesUncheckedCreateWithoutBusiness_usersInputSchema),
			]),
			where: z.lazy(() => addressesWhereInputSchema).optional(),
		})
		.strict();

export default addressesUpsertWithoutBusiness_usersInputSchema;
