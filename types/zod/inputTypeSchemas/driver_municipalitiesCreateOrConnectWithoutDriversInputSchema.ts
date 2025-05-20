import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';
import { driver_municipalitiesCreateWithoutDriversInputSchema } from './driver_municipalitiesCreateWithoutDriversInputSchema';
import { driver_municipalitiesUncheckedCreateWithoutDriversInputSchema } from './driver_municipalitiesUncheckedCreateWithoutDriversInputSchema';

export const driver_municipalitiesCreateOrConnectWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesCreateOrConnectWithoutDriversInput> =
	z
		.object({
			where: z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driver_municipalitiesCreateWithoutDriversInputSchema),
				z.lazy(() => driver_municipalitiesUncheckedCreateWithoutDriversInputSchema),
			]),
		})
		.strict();

export default driver_municipalitiesCreateOrConnectWithoutDriversInputSchema;
