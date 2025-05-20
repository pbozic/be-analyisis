import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutVehicleInputSchema } from './delivery_ordersCreateWithoutVehicleInputSchema';
import { delivery_ordersUncheckedCreateWithoutVehicleInputSchema } from './delivery_ordersUncheckedCreateWithoutVehicleInputSchema';
import { delivery_ordersCreateOrConnectWithoutVehicleInputSchema } from './delivery_ordersCreateOrConnectWithoutVehicleInputSchema';
import { delivery_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema } from './delivery_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema';
import { delivery_ordersCreateManyVehicleInputEnvelopeSchema } from './delivery_ordersCreateManyVehicleInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema } from './delivery_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema';
import { delivery_ordersUpdateManyWithWhereWithoutVehicleInputSchema } from './delivery_ordersUpdateManyWithWhereWithoutVehicleInputSchema';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';

export const delivery_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema: z.ZodType<Prisma.delivery_ordersUncheckedUpdateManyWithoutVehicleNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema),
					z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutVehicleInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_ordersCreateManyVehicleInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema),
					z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutVehicleInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutVehicleInputSchema),
					z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutVehicleInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => delivery_ordersScalarWhereInputSchema),
					z.lazy(() => delivery_ordersScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersUncheckedUpdateManyWithoutVehicleNestedInputSchema;
