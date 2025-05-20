import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDriverInputSchema } from './usersCreateWithoutDriverInputSchema';
import { usersUncheckedCreateWithoutDriverInputSchema } from './usersUncheckedCreateWithoutDriverInputSchema';
import { usersCreateOrConnectWithoutDriverInputSchema } from './usersCreateOrConnectWithoutDriverInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutDriverInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutDriverInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutDriverInputSchema),z.lazy(() => usersUncheckedCreateWithoutDriverInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDriverInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutDriverInputSchema;
