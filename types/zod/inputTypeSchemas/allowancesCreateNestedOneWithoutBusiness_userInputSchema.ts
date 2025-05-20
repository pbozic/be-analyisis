import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesCreateWithoutBusiness_userInputSchema } from './allowancesCreateWithoutBusiness_userInputSchema';
import { allowancesUncheckedCreateWithoutBusiness_userInputSchema } from './allowancesUncheckedCreateWithoutBusiness_userInputSchema';
import { allowancesCreateOrConnectWithoutBusiness_userInputSchema } from './allowancesCreateOrConnectWithoutBusiness_userInputSchema';
import { allowancesWhereUniqueInputSchema } from './allowancesWhereUniqueInputSchema';

export const allowancesCreateNestedOneWithoutBusiness_userInputSchema: z.ZodType<Prisma.allowancesCreateNestedOneWithoutBusiness_userInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => allowancesCreateWithoutBusiness_userInputSchema),
					z.lazy(() => allowancesUncheckedCreateWithoutBusiness_userInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => allowancesCreateOrConnectWithoutBusiness_userInputSchema).optional(),
			connect: z.lazy(() => allowancesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default allowancesCreateNestedOneWithoutBusiness_userInputSchema;
