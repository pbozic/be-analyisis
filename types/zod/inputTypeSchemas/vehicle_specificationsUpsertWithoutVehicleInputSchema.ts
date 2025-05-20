import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_specificationsUpdateWithoutVehicleInputSchema } from './vehicle_specificationsUpdateWithoutVehicleInputSchema';
import { vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema } from './vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema';
import { vehicle_specificationsCreateWithoutVehicleInputSchema } from './vehicle_specificationsCreateWithoutVehicleInputSchema';
import { vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema } from './vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema';
import { vehicle_specificationsWhereInputSchema } from './vehicle_specificationsWhereInputSchema';

export const vehicle_specificationsUpsertWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_specificationsUpsertWithoutVehicleInput> = z.object({
  update: z.union([ z.lazy(() => vehicle_specificationsUpdateWithoutVehicleInputSchema),z.lazy(() => vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema) ]),
  create: z.union([ z.lazy(() => vehicle_specificationsCreateWithoutVehicleInputSchema),z.lazy(() => vehicle_specificationsUncheckedCreateWithoutVehicleInputSchema) ]),
  where: z.lazy(() => vehicle_specificationsWhereInputSchema).optional()
}).strict();

export default vehicle_specificationsUpsertWithoutVehicleInputSchema;
