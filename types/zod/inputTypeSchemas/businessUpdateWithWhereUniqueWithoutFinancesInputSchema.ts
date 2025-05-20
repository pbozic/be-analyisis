import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutFinancesInputSchema } from './businessUpdateWithoutFinancesInputSchema';
import { businessUncheckedUpdateWithoutFinancesInputSchema } from './businessUncheckedUpdateWithoutFinancesInputSchema';

export const businessUpdateWithWhereUniqueWithoutFinancesInputSchema: z.ZodType<Prisma.businessUpdateWithWhereUniqueWithoutFinancesInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => businessUpdateWithoutFinancesInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutFinancesInputSchema),
			]),
		})
		.strict();

export default businessUpdateWithWhereUniqueWithoutFinancesInputSchema;
