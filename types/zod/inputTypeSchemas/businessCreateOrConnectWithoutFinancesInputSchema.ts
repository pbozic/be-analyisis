import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutFinancesInputSchema } from './businessCreateWithoutFinancesInputSchema';
import { businessUncheckedCreateWithoutFinancesInputSchema } from './businessUncheckedCreateWithoutFinancesInputSchema';

export const businessCreateOrConnectWithoutFinancesInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutFinancesInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => businessCreateWithoutFinancesInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutFinancesInputSchema),
			]),
		})
		.strict();

export default businessCreateOrConnectWithoutFinancesInputSchema;
