import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutVehicleInputSchema } from './taxi_ordersCreateWithoutVehicleInputSchema';
import { taxi_ordersUncheckedCreateWithoutVehicleInputSchema } from './taxi_ordersUncheckedCreateWithoutVehicleInputSchema';
import { taxi_ordersCreateOrConnectWithoutVehicleInputSchema } from './taxi_ordersCreateOrConnectWithoutVehicleInputSchema';
import { taxi_ordersCreateManyVehicleInputEnvelopeSchema } from './taxi_ordersCreateManyVehicleInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';

export const taxi_ordersCreateNestedManyWithoutVehicleInputSchema: z.ZodType<Prisma.taxi_ordersCreateNestedManyWithoutVehicleInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutVehicleInputSchema),
					z.lazy(() => taxi_ordersCreateWithoutVehicleInputSchema).array(),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutVehicleInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutVehicleInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => taxi_ordersCreateOrConnectWithoutVehicleInputSchema),
					z.lazy(() => taxi_ordersCreateOrConnectWithoutVehicleInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => taxi_ordersCreateManyVehicleInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => taxi_ordersWhereUniqueInputSchema),
					z.lazy(() => taxi_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersCreateNestedManyWithoutVehicleInputSchema;
