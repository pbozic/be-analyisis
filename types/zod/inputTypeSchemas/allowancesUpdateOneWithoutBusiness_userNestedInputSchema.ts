import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesCreateWithoutBusiness_userInputSchema } from './allowancesCreateWithoutBusiness_userInputSchema';
import { allowancesUncheckedCreateWithoutBusiness_userInputSchema } from './allowancesUncheckedCreateWithoutBusiness_userInputSchema';
import { allowancesCreateOrConnectWithoutBusiness_userInputSchema } from './allowancesCreateOrConnectWithoutBusiness_userInputSchema';
import { allowancesUpsertWithoutBusiness_userInputSchema } from './allowancesUpsertWithoutBusiness_userInputSchema';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';
import { allowancesWhereUniqueInputSchema } from './allowancesWhereUniqueInputSchema';
import { allowancesUpdateToOneWithWhereWithoutBusiness_userInputSchema } from './allowancesUpdateToOneWithWhereWithoutBusiness_userInputSchema';
import { allowancesUpdateWithoutBusiness_userInputSchema } from './allowancesUpdateWithoutBusiness_userInputSchema';
import { allowancesUncheckedUpdateWithoutBusiness_userInputSchema } from './allowancesUncheckedUpdateWithoutBusiness_userInputSchema';

export const allowancesUpdateOneWithoutBusiness_userNestedInputSchema: z.ZodType<Prisma.allowancesUpdateOneWithoutBusiness_userNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => allowancesCreateWithoutBusiness_userInputSchema),
					z.lazy(() => allowancesUncheckedCreateWithoutBusiness_userInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => allowancesCreateOrConnectWithoutBusiness_userInputSchema).optional(),
			upsert: z.lazy(() => allowancesUpsertWithoutBusiness_userInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => allowancesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => allowancesWhereInputSchema)]).optional(),
			connect: z.lazy(() => allowancesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => allowancesUpdateToOneWithWhereWithoutBusiness_userInputSchema),
					z.lazy(() => allowancesUpdateWithoutBusiness_userInputSchema),
					z.lazy(() => allowancesUncheckedUpdateWithoutBusiness_userInputSchema),
				])
				.optional(),
		})
		.strict();

export default allowancesUpdateOneWithoutBusiness_userNestedInputSchema;
