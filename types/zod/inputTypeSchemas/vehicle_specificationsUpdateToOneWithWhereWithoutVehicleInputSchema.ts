import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_specificationsWhereInputSchema } from './vehicle_specificationsWhereInputSchema';
import { vehicle_specificationsUpdateWithoutVehicleInputSchema } from './vehicle_specificationsUpdateWithoutVehicleInputSchema';
import { vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema } from './vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema';

export const vehicle_specificationsUpdateToOneWithWhereWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_specificationsUpdateToOneWithWhereWithoutVehicleInput> = z.object({
  where: z.lazy(() => vehicle_specificationsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => vehicle_specificationsUpdateWithoutVehicleInputSchema),z.lazy(() => vehicle_specificationsUncheckedUpdateWithoutVehicleInputSchema) ]),
}).strict();

export default vehicle_specificationsUpdateToOneWithWhereWithoutVehicleInputSchema;
