import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutBusiness_clientsInputSchema } from './businessCreateWithoutBusiness_clientsInputSchema';
import { businessUncheckedCreateWithoutBusiness_clientsInputSchema } from './businessUncheckedCreateWithoutBusiness_clientsInputSchema';

export const businessCreateOrConnectWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutBusiness_clientsInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => businessCreateWithoutBusiness_clientsInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutBusiness_clientsInputSchema),
			]),
		})
		.strict();

export default businessCreateOrConnectWithoutBusiness_clientsInputSchema;
