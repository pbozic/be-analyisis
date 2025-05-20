import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { addressesUpdateWithoutBusinessesInputSchema } from './addressesUpdateWithoutBusinessesInputSchema';
import { addressesUncheckedUpdateWithoutBusinessesInputSchema } from './addressesUncheckedUpdateWithoutBusinessesInputSchema';

export const addressesUpdateToOneWithWhereWithoutBusinessesInputSchema: z.ZodType<Prisma.addressesUpdateToOneWithWhereWithoutBusinessesInput> =
	z
		.object({
			where: z.lazy(() => addressesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => addressesUpdateWithoutBusinessesInputSchema),
				z.lazy(() => addressesUncheckedUpdateWithoutBusinessesInputSchema),
			]),
		})
		.strict();

export default addressesUpdateToOneWithWhereWithoutBusinessesInputSchema;
