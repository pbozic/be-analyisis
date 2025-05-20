import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutUserInputSchema } from './delivery_driversCreateWithoutUserInputSchema';
import { delivery_driversUncheckedCreateWithoutUserInputSchema } from './delivery_driversUncheckedCreateWithoutUserInputSchema';
import { delivery_driversCreateOrConnectWithoutUserInputSchema } from './delivery_driversCreateOrConnectWithoutUserInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';

export const delivery_driversCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.delivery_driversCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutUserInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional()
}).strict();

export default delivery_driversCreateNestedOneWithoutUserInputSchema;
