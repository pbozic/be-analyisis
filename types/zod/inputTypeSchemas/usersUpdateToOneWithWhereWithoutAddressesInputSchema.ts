import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutAddressesInputSchema } from './usersUpdateWithoutAddressesInputSchema';
import { usersUncheckedUpdateWithoutAddressesInputSchema } from './usersUncheckedUpdateWithoutAddressesInputSchema';

export const usersUpdateToOneWithWhereWithoutAddressesInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutAddressesInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutAddressesInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutAddressesInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutAddressesInputSchema;
