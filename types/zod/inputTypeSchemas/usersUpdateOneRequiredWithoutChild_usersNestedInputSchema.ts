import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutChild_usersInputSchema } from './usersCreateWithoutChild_usersInputSchema';
import { usersUncheckedCreateWithoutChild_usersInputSchema } from './usersUncheckedCreateWithoutChild_usersInputSchema';
import { usersCreateOrConnectWithoutChild_usersInputSchema } from './usersCreateOrConnectWithoutChild_usersInputSchema';
import { usersUpsertWithoutChild_usersInputSchema } from './usersUpsertWithoutChild_usersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutChild_usersInputSchema } from './usersUpdateToOneWithWhereWithoutChild_usersInputSchema';
import { usersUpdateWithoutChild_usersInputSchema } from './usersUpdateWithoutChild_usersInputSchema';
import { usersUncheckedUpdateWithoutChild_usersInputSchema } from './usersUncheckedUpdateWithoutChild_usersInputSchema';

export const usersUpdateOneRequiredWithoutChild_usersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutChild_usersNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutChild_usersInputSchema),z.lazy(() => usersUncheckedCreateWithoutChild_usersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutChild_usersInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutChild_usersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutChild_usersInputSchema),z.lazy(() => usersUpdateWithoutChild_usersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutChild_usersInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutChild_usersNestedInputSchema;
