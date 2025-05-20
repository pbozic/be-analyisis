import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDriverInputSchema } from './usersCreateWithoutDriverInputSchema';
import { usersUncheckedCreateWithoutDriverInputSchema } from './usersUncheckedCreateWithoutDriverInputSchema';
import { usersCreateOrConnectWithoutDriverInputSchema } from './usersCreateOrConnectWithoutDriverInputSchema';
import { usersUpsertWithoutDriverInputSchema } from './usersUpsertWithoutDriverInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutDriverInputSchema } from './usersUpdateToOneWithWhereWithoutDriverInputSchema';
import { usersUpdateWithoutDriverInputSchema } from './usersUpdateWithoutDriverInputSchema';
import { usersUncheckedUpdateWithoutDriverInputSchema } from './usersUncheckedUpdateWithoutDriverInputSchema';

export const usersUpdateOneWithoutDriverNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutDriverNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutDriverInputSchema),z.lazy(() => usersUncheckedCreateWithoutDriverInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDriverInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutDriverInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutDriverInputSchema),z.lazy(() => usersUpdateWithoutDriverInputSchema),z.lazy(() => usersUncheckedUpdateWithoutDriverInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneWithoutDriverNestedInputSchema;
