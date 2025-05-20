import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutOrdersInputSchema } from './usersCreateWithoutOrdersInputSchema';
import { usersUncheckedCreateWithoutOrdersInputSchema } from './usersUncheckedCreateWithoutOrdersInputSchema';
import { usersCreateOrConnectWithoutOrdersInputSchema } from './usersCreateOrConnectWithoutOrdersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutOrdersInputSchema;
