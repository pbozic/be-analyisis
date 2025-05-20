import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutVehiclesInputSchema } from './driversCreateWithoutVehiclesInputSchema';
import { driversUncheckedCreateWithoutVehiclesInputSchema } from './driversUncheckedCreateWithoutVehiclesInputSchema';
import { driversCreateOrConnectWithoutVehiclesInputSchema } from './driversCreateOrConnectWithoutVehiclesInputSchema';
import { driversUpsertWithoutVehiclesInputSchema } from './driversUpsertWithoutVehiclesInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutVehiclesInputSchema } from './driversUpdateToOneWithWhereWithoutVehiclesInputSchema';
import { driversUpdateWithoutVehiclesInputSchema } from './driversUpdateWithoutVehiclesInputSchema';
import { driversUncheckedUpdateWithoutVehiclesInputSchema } from './driversUncheckedUpdateWithoutVehiclesInputSchema';

export const driversUpdateOneRequiredWithoutVehiclesNestedInputSchema: z.ZodType<Prisma.driversUpdateOneRequiredWithoutVehiclesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutVehiclesInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutVehiclesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutVehiclesInputSchema).optional(),
			upsert: z.lazy(() => driversUpsertWithoutVehiclesInputSchema).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => driversUpdateToOneWithWhereWithoutVehiclesInputSchema),
					z.lazy(() => driversUpdateWithoutVehiclesInputSchema),
					z.lazy(() => driversUncheckedUpdateWithoutVehiclesInputSchema),
				])
				.optional(),
		})
		.strict();

export default driversUpdateOneRequiredWithoutVehiclesNestedInputSchema;
