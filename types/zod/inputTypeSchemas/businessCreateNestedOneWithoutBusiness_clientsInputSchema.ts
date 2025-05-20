import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutBusiness_clientsInputSchema } from './businessCreateWithoutBusiness_clientsInputSchema';
import { businessUncheckedCreateWithoutBusiness_clientsInputSchema } from './businessUncheckedCreateWithoutBusiness_clientsInputSchema';
import { businessCreateOrConnectWithoutBusiness_clientsInputSchema } from './businessCreateOrConnectWithoutBusiness_clientsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutBusiness_clientsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutBusiness_clientsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutBusiness_clientsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutBusiness_clientsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutBusiness_clientsInputSchema;
