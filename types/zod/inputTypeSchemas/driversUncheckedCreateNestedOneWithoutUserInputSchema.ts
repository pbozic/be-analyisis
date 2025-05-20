import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutUserInputSchema } from './driversCreateWithoutUserInputSchema';
import { driversUncheckedCreateWithoutUserInputSchema } from './driversUncheckedCreateWithoutUserInputSchema';
import { driversCreateOrConnectWithoutUserInputSchema } from './driversCreateOrConnectWithoutUserInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.driversUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => driversCreateWithoutUserInputSchema),z.lazy(() => driversUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => driversWhereUniqueInputSchema).optional()
}).strict();

export default driversUncheckedCreateNestedOneWithoutUserInputSchema;
