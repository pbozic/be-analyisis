import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutBusiness_usersInputSchema } from './businessUpdateWithoutBusiness_usersInputSchema';
import { businessUncheckedUpdateWithoutBusiness_usersInputSchema } from './businessUncheckedUpdateWithoutBusiness_usersInputSchema';
import { businessCreateWithoutBusiness_usersInputSchema } from './businessCreateWithoutBusiness_usersInputSchema';
import { businessUncheckedCreateWithoutBusiness_usersInputSchema } from './businessUncheckedCreateWithoutBusiness_usersInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutBusiness_usersInputSchema: z.ZodType<Prisma.businessUpsertWithoutBusiness_usersInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => businessUpdateWithoutBusiness_usersInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutBusiness_usersInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutBusiness_usersInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutBusiness_usersInputSchema),
			]),
			where: z.lazy(() => businessWhereInputSchema).optional(),
		})
		.strict();

export default businessUpsertWithoutBusiness_usersInputSchema;
