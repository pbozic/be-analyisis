import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutLost_itemsInputSchema } from './usersCreateWithoutLost_itemsInputSchema';
import { usersUncheckedCreateWithoutLost_itemsInputSchema } from './usersUncheckedCreateWithoutLost_itemsInputSchema';
import { usersCreateOrConnectWithoutLost_itemsInputSchema } from './usersCreateOrConnectWithoutLost_itemsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutLost_itemsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutLost_itemsInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutLost_itemsInputSchema),z.lazy(() => usersUncheckedCreateWithoutLost_itemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutLost_itemsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutLost_itemsInputSchema;
