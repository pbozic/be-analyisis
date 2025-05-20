import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from './delivery_driver_history_locationsWhereUniqueInputSchema';
import { delivery_driver_history_locationsCreateWithoutOrderInputSchema } from './delivery_driver_history_locationsCreateWithoutOrderInputSchema';
import { delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema } from './delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema';

export const delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsCreateOrConnectWithoutOrderInput> = z.object({
  where: z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_driver_history_locationsCreateWithoutOrderInputSchema),z.lazy(() => delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema) ]),
}).strict();

export default delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema;
