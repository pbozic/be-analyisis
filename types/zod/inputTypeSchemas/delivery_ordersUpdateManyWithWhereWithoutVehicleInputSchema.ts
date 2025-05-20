import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';
import { delivery_ordersUpdateManyMutationInputSchema } from './delivery_ordersUpdateManyMutationInputSchema';
import { delivery_ordersUncheckedUpdateManyWithoutVehicleInputSchema } from './delivery_ordersUncheckedUpdateManyWithoutVehicleInputSchema';

export const delivery_ordersUpdateManyWithWhereWithoutVehicleInputSchema: z.ZodType<Prisma.delivery_ordersUpdateManyWithWhereWithoutVehicleInput> = z.object({
  where: z.lazy(() => delivery_ordersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => delivery_ordersUpdateManyMutationInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateManyWithoutVehicleInputSchema) ]),
}).strict();

export default delivery_ordersUpdateManyWithWhereWithoutVehicleInputSchema;
