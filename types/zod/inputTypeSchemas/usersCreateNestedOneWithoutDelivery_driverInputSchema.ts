import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDelivery_driverInputSchema } from './usersCreateWithoutDelivery_driverInputSchema';
import { usersUncheckedCreateWithoutDelivery_driverInputSchema } from './usersUncheckedCreateWithoutDelivery_driverInputSchema';
import { usersCreateOrConnectWithoutDelivery_driverInputSchema } from './usersCreateOrConnectWithoutDelivery_driverInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutDelivery_driverInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutDelivery_driverInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutDelivery_driverInputSchema),z.lazy(() => usersUncheckedCreateWithoutDelivery_driverInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDelivery_driverInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutDelivery_driverInputSchema;
