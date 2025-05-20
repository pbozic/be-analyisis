import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutBusiness_teamsInputSchema } from './usersCreateWithoutBusiness_teamsInputSchema';
import { usersUncheckedCreateWithoutBusiness_teamsInputSchema } from './usersUncheckedCreateWithoutBusiness_teamsInputSchema';
import { usersCreateOrConnectWithoutBusiness_teamsInputSchema } from './usersCreateOrConnectWithoutBusiness_teamsInputSchema';
import { usersCreateManyBusiness_teamsInputEnvelopeSchema } from './usersCreateManyBusiness_teamsInputEnvelopeSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersUncheckedCreateNestedManyWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.usersUncheckedCreateNestedManyWithoutBusiness_teamsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutBusiness_teamsInputSchema),
					z.lazy(() => usersCreateWithoutBusiness_teamsInputSchema).array(),
					z.lazy(() => usersUncheckedCreateWithoutBusiness_teamsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutBusiness_teamsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => usersCreateOrConnectWithoutBusiness_teamsInputSchema),
					z.lazy(() => usersCreateOrConnectWithoutBusiness_teamsInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => usersCreateManyBusiness_teamsInputEnvelopeSchema).optional(),
			connect: z
				.union([z.lazy(() => usersWhereUniqueInputSchema), z.lazy(() => usersWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export default usersUncheckedCreateNestedManyWithoutBusiness_teamsInputSchema;
