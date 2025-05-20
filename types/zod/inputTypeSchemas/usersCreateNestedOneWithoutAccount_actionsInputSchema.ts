import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutAccount_actionsInputSchema } from './usersCreateWithoutAccount_actionsInputSchema';
import { usersUncheckedCreateWithoutAccount_actionsInputSchema } from './usersUncheckedCreateWithoutAccount_actionsInputSchema';
import { usersCreateOrConnectWithoutAccount_actionsInputSchema } from './usersCreateOrConnectWithoutAccount_actionsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutAccount_actionsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutAccount_actionsInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutAccount_actionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutAccount_actionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutAccount_actionsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutAccount_actionsInputSchema;
