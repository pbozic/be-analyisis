import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversCreateWithoutVehicleInputSchema } from './vehicle_driversCreateWithoutVehicleInputSchema';
import { vehicle_driversUncheckedCreateWithoutVehicleInputSchema } from './vehicle_driversUncheckedCreateWithoutVehicleInputSchema';
import { vehicle_driversCreateOrConnectWithoutVehicleInputSchema } from './vehicle_driversCreateOrConnectWithoutVehicleInputSchema';
import { vehicle_driversCreateManyVehicleInputEnvelopeSchema } from './vehicle_driversCreateManyVehicleInputEnvelopeSchema';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';

export const vehicle_driversCreateNestedManyWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_driversCreateNestedManyWithoutVehicleInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => vehicle_driversCreateWithoutVehicleInputSchema),
					z.lazy(() => vehicle_driversCreateWithoutVehicleInputSchema).array(),
					z.lazy(() => vehicle_driversUncheckedCreateWithoutVehicleInputSchema),
					z.lazy(() => vehicle_driversUncheckedCreateWithoutVehicleInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => vehicle_driversCreateOrConnectWithoutVehicleInputSchema),
					z.lazy(() => vehicle_driversCreateOrConnectWithoutVehicleInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => vehicle_driversCreateManyVehicleInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => vehicle_driversWhereUniqueInputSchema),
					z.lazy(() => vehicle_driversWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default vehicle_driversCreateNestedManyWithoutVehicleInputSchema;
