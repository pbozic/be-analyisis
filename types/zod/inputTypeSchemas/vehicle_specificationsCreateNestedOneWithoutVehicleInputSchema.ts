import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_specificationsCreateWithoutVehicleInputSchema } from './vehicle_specificationsCreateWithoutVehicleInputSchema';
import { vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema } from './vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema';
import { vehicle_specificationsCreateOrConnectWithoutVehicleInputSchema } from './vehicle_specificationsCreateOrConnectWithoutVehicleInputSchema';
import { vehicle_specificationsWhereUniqueInputSchema } from './vehicle_specificationsWhereUniqueInputSchema';

export const vehicle_specificationsCreateNestedOneWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_specificationsCreateNestedOneWithoutVehicleInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => vehicle_specificationsCreateWithoutVehicleInputSchema),
					z.lazy(() => vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => vehicle_specificationsCreateOrConnectWithoutVehicleInputSchema).optional(),
			connect: z.lazy(() => vehicle_specificationsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default vehicle_specificationsCreateNestedOneWithoutVehicleInputSchema;
