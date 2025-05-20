import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';
import { businessUpdateManyMutationInputSchema } from './businessUpdateManyMutationInputSchema';
import { businessUncheckedUpdateManyWithoutDelivery_addressInputSchema } from './businessUncheckedUpdateManyWithoutDelivery_addressInputSchema';

export const businessUpdateManyWithWhereWithoutDelivery_addressInputSchema: z.ZodType<Prisma.businessUpdateManyWithWhereWithoutDelivery_addressInput> =
	z
		.object({
			where: z.lazy(() => businessScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => businessUpdateManyMutationInputSchema),
				z.lazy(() => businessUncheckedUpdateManyWithoutDelivery_addressInputSchema),
			]),
		})
		.strict();

export default businessUpdateManyWithWhereWithoutDelivery_addressInputSchema;
