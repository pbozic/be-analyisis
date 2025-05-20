import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutBusiness_clientsInputSchema } from './businessUpdateWithoutBusiness_clientsInputSchema';
import { businessUncheckedUpdateWithoutBusiness_clientsInputSchema } from './businessUncheckedUpdateWithoutBusiness_clientsInputSchema';

export const businessUpdateToOneWithWhereWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutBusiness_clientsInput> =
	z
		.object({
			where: z.lazy(() => businessWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => businessUpdateWithoutBusiness_clientsInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutBusiness_clientsInputSchema),
			]),
		})
		.strict();

export default businessUpdateToOneWithWhereWithoutBusiness_clientsInputSchema;
