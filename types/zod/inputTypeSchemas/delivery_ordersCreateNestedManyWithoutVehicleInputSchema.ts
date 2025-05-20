import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutVehicleInputSchema } from './delivery_ordersCreateWithoutVehicleInputSchema';
import { delivery_ordersUncheckedCreateWithoutVehicleInputSchema } from './delivery_ordersUncheckedCreateWithoutVehicleInputSchema';
import { delivery_ordersCreateOrConnectWithoutVehicleInputSchema } from './delivery_ordersCreateOrConnectWithoutVehicleInputSchema';
import { delivery_ordersCreateManyVehicleInputEnvelopeSchema } from './delivery_ordersCreateManyVehicleInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedManyWithoutVehicleInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedManyWithoutVehicleInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutVehicleInputSchema),
					z.lazy(() => delivery_ordersCreateWithoutVehicleInputSchema).array(),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutVehicleInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutVehicleInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_ordersCreateOrConnectWithoutVehicleInputSchema),
					z.lazy(() => delivery_ordersCreateOrConnectWithoutVehicleInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_ordersCreateManyVehicleInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersCreateNestedManyWithoutVehicleInputSchema;
