import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutBusiness_usersInputSchema } from './businessCreateWithoutBusiness_usersInputSchema';
import { businessUncheckedCreateWithoutBusiness_usersInputSchema } from './businessUncheckedCreateWithoutBusiness_usersInputSchema';
import { businessCreateOrConnectWithoutBusiness_usersInputSchema } from './businessCreateOrConnectWithoutBusiness_usersInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutBusiness_usersInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutBusiness_usersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutBusiness_usersInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutBusiness_usersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutBusiness_usersInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutBusiness_usersInputSchema;
