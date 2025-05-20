import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutLost_itemsInputSchema } from './usersCreateWithoutLost_itemsInputSchema';
import { usersUncheckedCreateWithoutLost_itemsInputSchema } from './usersUncheckedCreateWithoutLost_itemsInputSchema';
import { usersCreateOrConnectWithoutLost_itemsInputSchema } from './usersCreateOrConnectWithoutLost_itemsInputSchema';
import { usersUpsertWithoutLost_itemsInputSchema } from './usersUpsertWithoutLost_itemsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutLost_itemsInputSchema } from './usersUpdateToOneWithWhereWithoutLost_itemsInputSchema';
import { usersUpdateWithoutLost_itemsInputSchema } from './usersUpdateWithoutLost_itemsInputSchema';
import { usersUncheckedUpdateWithoutLost_itemsInputSchema } from './usersUncheckedUpdateWithoutLost_itemsInputSchema';

export const usersUpdateOneWithoutLost_itemsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutLost_itemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutLost_itemsInputSchema),z.lazy(() => usersUncheckedCreateWithoutLost_itemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutLost_itemsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutLost_itemsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutLost_itemsInputSchema),z.lazy(() => usersUpdateWithoutLost_itemsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLost_itemsInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneWithoutLost_itemsNestedInputSchema;
