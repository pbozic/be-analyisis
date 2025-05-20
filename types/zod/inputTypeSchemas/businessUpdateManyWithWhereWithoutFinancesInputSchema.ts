import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';
import { businessUpdateManyMutationInputSchema } from './businessUpdateManyMutationInputSchema';
import { businessUncheckedUpdateManyWithoutFinancesInputSchema } from './businessUncheckedUpdateManyWithoutFinancesInputSchema';

export const businessUpdateManyWithWhereWithoutFinancesInputSchema: z.ZodType<Prisma.businessUpdateManyWithWhereWithoutFinancesInput> =
	z
		.object({
			where: z.lazy(() => businessScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => businessUpdateManyMutationInputSchema),
				z.lazy(() => businessUncheckedUpdateManyWithoutFinancesInputSchema),
			]),
		})
		.strict();

export default businessUpdateManyWithWhereWithoutFinancesInputSchema;
