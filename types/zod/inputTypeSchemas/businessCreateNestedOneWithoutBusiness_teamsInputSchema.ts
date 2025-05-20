import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutBusiness_teamsInputSchema } from './businessCreateWithoutBusiness_teamsInputSchema';
import { businessUncheckedCreateWithoutBusiness_teamsInputSchema } from './businessUncheckedCreateWithoutBusiness_teamsInputSchema';
import { businessCreateOrConnectWithoutBusiness_teamsInputSchema } from './businessCreateOrConnectWithoutBusiness_teamsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutBusiness_teamsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutBusiness_teamsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutBusiness_teamsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutBusiness_teamsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutBusiness_teamsInputSchema;
