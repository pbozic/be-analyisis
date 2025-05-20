import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDaily_meal_driversInputSchema } from './businessCreateWithoutDaily_meal_driversInputSchema';
import { businessUncheckedCreateWithoutDaily_meal_driversInputSchema } from './businessUncheckedCreateWithoutDaily_meal_driversInputSchema';
import { businessCreateOrConnectWithoutDaily_meal_driversInputSchema } from './businessCreateOrConnectWithoutDaily_meal_driversInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutDaily_meal_driversInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutDaily_meal_driversInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutDaily_meal_driversInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutDaily_meal_driversInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutDaily_meal_driversInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutDaily_meal_driversInputSchema;
