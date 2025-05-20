import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driver_history_locationsCreateWithoutOrderInputSchema } from './delivery_driver_history_locationsCreateWithoutOrderInputSchema';
import { delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema } from './delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema';
import { delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema } from './delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema';
import { delivery_driver_history_locationsCreateManyOrderInputEnvelopeSchema } from './delivery_driver_history_locationsCreateManyOrderInputEnvelopeSchema';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from './delivery_driver_history_locationsWhereUniqueInputSchema';

export const delivery_driver_history_locationsCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsCreateNestedManyWithoutOrderInput> = z.object({
  create: z.union([ z.lazy(() => delivery_driver_history_locationsCreateWithoutOrderInputSchema),z.lazy(() => delivery_driver_history_locationsCreateWithoutOrderInputSchema).array(),z.lazy(() => delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema),z.lazy(() => delivery_driver_history_locationsUncheckedCreateWithoutOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema),z.lazy(() => delivery_driver_history_locationsCreateOrConnectWithoutOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => delivery_driver_history_locationsCreateManyOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema),z.lazy(() => delivery_driver_history_locationsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default delivery_driver_history_locationsCreateNestedManyWithoutOrderInputSchema;
