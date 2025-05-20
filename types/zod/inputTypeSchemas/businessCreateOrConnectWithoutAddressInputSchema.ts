import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutAddressInputSchema } from './businessCreateWithoutAddressInputSchema';
import { businessUncheckedCreateWithoutAddressInputSchema } from './businessUncheckedCreateWithoutAddressInputSchema';

export const businessCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutAddressInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => businessCreateWithoutAddressInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutAddressInputSchema),
			]),
		})
		.strict();

export default businessCreateOrConnectWithoutAddressInputSchema;
