import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutVehicle_specificationInputSchema } from './vehiclesCreateWithoutVehicle_specificationInputSchema';
import { vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema } from './vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema';
import { vehiclesCreateOrConnectWithoutVehicle_specificationInputSchema } from './vehiclesCreateOrConnectWithoutVehicle_specificationInputSchema';
import { vehiclesUpsertWithoutVehicle_specificationInputSchema } from './vehiclesUpsertWithoutVehicle_specificationInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateToOneWithWhereWithoutVehicle_specificationInputSchema } from './vehiclesUpdateToOneWithWhereWithoutVehicle_specificationInputSchema';
import { vehiclesUpdateWithoutVehicle_specificationInputSchema } from './vehiclesUpdateWithoutVehicle_specificationInputSchema';
import { vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema } from './vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema';

export const vehiclesUncheckedUpdateOneWithoutVehicle_specificationNestedInputSchema: z.ZodType<Prisma.vehiclesUncheckedUpdateOneWithoutVehicle_specificationNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => vehiclesCreateWithoutVehicle_specificationInputSchema),
					z.lazy(() => vehiclesUncheckedCreateWithoutVehicle_specificationInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutVehicle_specificationInputSchema).optional(),
			upsert: z.lazy(() => vehiclesUpsertWithoutVehicle_specificationInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => vehiclesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => vehiclesWhereInputSchema)]).optional(),
			connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => vehiclesUpdateToOneWithWhereWithoutVehicle_specificationInputSchema),
					z.lazy(() => vehiclesUpdateWithoutVehicle_specificationInputSchema),
					z.lazy(() => vehiclesUncheckedUpdateWithoutVehicle_specificationInputSchema),
				])
				.optional(),
		})
		.strict();

export default vehiclesUncheckedUpdateOneWithoutVehicle_specificationNestedInputSchema;
