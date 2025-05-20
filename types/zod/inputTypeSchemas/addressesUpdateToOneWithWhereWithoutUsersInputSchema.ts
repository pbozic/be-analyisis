import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { addressesUpdateWithoutUsersInputSchema } from './addressesUpdateWithoutUsersInputSchema';
import { addressesUncheckedUpdateWithoutUsersInputSchema } from './addressesUncheckedUpdateWithoutUsersInputSchema';

export const addressesUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.addressesUpdateToOneWithWhereWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => addressesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => addressesUpdateWithoutUsersInputSchema),
				z.lazy(() => addressesUncheckedUpdateWithoutUsersInputSchema),
			]),
		})
		.strict();

export default addressesUpdateToOneWithWhereWithoutUsersInputSchema;
