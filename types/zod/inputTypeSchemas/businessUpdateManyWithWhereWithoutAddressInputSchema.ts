import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';
import { businessUpdateManyMutationInputSchema } from './businessUpdateManyMutationInputSchema';
import { businessUncheckedUpdateManyWithoutAddressInputSchema } from './businessUncheckedUpdateManyWithoutAddressInputSchema';

export const businessUpdateManyWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.businessUpdateManyWithWhereWithoutAddressInput> =
	z
		.object({
			where: z.lazy(() => businessScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => businessUpdateManyMutationInputSchema),
				z.lazy(() => businessUncheckedUpdateManyWithoutAddressInputSchema),
			]),
		})
		.strict();

export default businessUpdateManyWithWhereWithoutAddressInputSchema;
