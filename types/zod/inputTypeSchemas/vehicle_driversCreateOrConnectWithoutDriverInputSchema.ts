import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';
import { vehicle_driversCreateWithoutDriverInputSchema } from './vehicle_driversCreateWithoutDriverInputSchema';
import { vehicle_driversUncheckedCreateWithoutDriverInputSchema } from './vehicle_driversUncheckedCreateWithoutDriverInputSchema';

export const vehicle_driversCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.vehicle_driversCreateOrConnectWithoutDriverInput> =
	z
		.object({
			where: z.lazy(() => vehicle_driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => vehicle_driversCreateWithoutDriverInputSchema),
				z.lazy(() => vehicle_driversUncheckedCreateWithoutDriverInputSchema),
			]),
		})
		.strict();

export default vehicle_driversCreateOrConnectWithoutDriverInputSchema;
