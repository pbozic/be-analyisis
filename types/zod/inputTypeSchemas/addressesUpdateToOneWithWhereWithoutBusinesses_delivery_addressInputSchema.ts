import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { addressesUpdateWithoutBusinesses_delivery_addressInputSchema } from './addressesUpdateWithoutBusinesses_delivery_addressInputSchema';
import { addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema } from './addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema';

export const addressesUpdateToOneWithWhereWithoutBusinesses_delivery_addressInputSchema: z.ZodType<Prisma.addressesUpdateToOneWithWhereWithoutBusinesses_delivery_addressInput> =
	z
		.object({
			where: z.lazy(() => addressesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => addressesUpdateWithoutBusinesses_delivery_addressInputSchema),
				z.lazy(() => addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema),
			]),
		})
		.strict();

export default addressesUpdateToOneWithWhereWithoutBusinesses_delivery_addressInputSchema;
