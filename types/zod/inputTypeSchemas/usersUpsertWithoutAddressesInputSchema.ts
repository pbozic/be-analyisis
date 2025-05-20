import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutAddressesInputSchema } from './usersUpdateWithoutAddressesInputSchema';
import { usersUncheckedUpdateWithoutAddressesInputSchema } from './usersUncheckedUpdateWithoutAddressesInputSchema';
import { usersCreateWithoutAddressesInputSchema } from './usersCreateWithoutAddressesInputSchema';
import { usersUncheckedCreateWithoutAddressesInputSchema } from './usersUncheckedCreateWithoutAddressesInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutAddressesInputSchema: z.ZodType<Prisma.usersUpsertWithoutAddressesInput> = z
	.object({
		update: z.union([
			z.lazy(() => usersUpdateWithoutAddressesInputSchema),
			z.lazy(() => usersUncheckedUpdateWithoutAddressesInputSchema),
		]),
		create: z.union([
			z.lazy(() => usersCreateWithoutAddressesInputSchema),
			z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema),
		]),
		where: z.lazy(() => usersWhereInputSchema).optional(),
	})
	.strict();

export default usersUpsertWithoutAddressesInputSchema;
