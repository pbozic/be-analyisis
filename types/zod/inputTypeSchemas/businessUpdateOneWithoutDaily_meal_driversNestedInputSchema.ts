import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDaily_meal_driversInputSchema } from './businessCreateWithoutDaily_meal_driversInputSchema';
import { businessUncheckedCreateWithoutDaily_meal_driversInputSchema } from './businessUncheckedCreateWithoutDaily_meal_driversInputSchema';
import { businessCreateOrConnectWithoutDaily_meal_driversInputSchema } from './businessCreateOrConnectWithoutDaily_meal_driversInputSchema';
import { businessUpsertWithoutDaily_meal_driversInputSchema } from './businessUpsertWithoutDaily_meal_driversInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutDaily_meal_driversInputSchema } from './businessUpdateToOneWithWhereWithoutDaily_meal_driversInputSchema';
import { businessUpdateWithoutDaily_meal_driversInputSchema } from './businessUpdateWithoutDaily_meal_driversInputSchema';
import { businessUncheckedUpdateWithoutDaily_meal_driversInputSchema } from './businessUncheckedUpdateWithoutDaily_meal_driversInputSchema';

export const businessUpdateOneWithoutDaily_meal_driversNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutDaily_meal_driversNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutDaily_meal_driversInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutDaily_meal_driversInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutDaily_meal_driversInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutDaily_meal_driversInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutDaily_meal_driversInputSchema),
					z.lazy(() => businessUpdateWithoutDaily_meal_driversInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutDaily_meal_driversInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneWithoutDaily_meal_driversNestedInputSchema;
