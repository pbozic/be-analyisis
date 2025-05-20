import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutCurrent_vehicleInputSchema } from './driversCreateWithoutCurrent_vehicleInputSchema';
import { driversUncheckedCreateWithoutCurrent_vehicleInputSchema } from './driversUncheckedCreateWithoutCurrent_vehicleInputSchema';
import { driversCreateOrConnectWithoutCurrent_vehicleInputSchema } from './driversCreateOrConnectWithoutCurrent_vehicleInputSchema';
import { driversUpsertWithoutCurrent_vehicleInputSchema } from './driversUpsertWithoutCurrent_vehicleInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutCurrent_vehicleInputSchema } from './driversUpdateToOneWithWhereWithoutCurrent_vehicleInputSchema';
import { driversUpdateWithoutCurrent_vehicleInputSchema } from './driversUpdateWithoutCurrent_vehicleInputSchema';
import { driversUncheckedUpdateWithoutCurrent_vehicleInputSchema } from './driversUncheckedUpdateWithoutCurrent_vehicleInputSchema';

export const driversUpdateOneWithoutCurrent_vehicleNestedInputSchema: z.ZodType<Prisma.driversUpdateOneWithoutCurrent_vehicleNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutCurrent_vehicleInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutCurrent_vehicleInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutCurrent_vehicleInputSchema).optional(),
			upsert: z.lazy(() => driversUpsertWithoutCurrent_vehicleInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => driversUpdateToOneWithWhereWithoutCurrent_vehicleInputSchema),
					z.lazy(() => driversUpdateWithoutCurrent_vehicleInputSchema),
					z.lazy(() => driversUncheckedUpdateWithoutCurrent_vehicleInputSchema),
				])
				.optional(),
		})
		.strict();

export default driversUpdateOneWithoutCurrent_vehicleNestedInputSchema;
