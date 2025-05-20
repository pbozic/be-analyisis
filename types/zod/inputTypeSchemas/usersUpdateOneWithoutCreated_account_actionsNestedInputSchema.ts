import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutCreated_account_actionsInputSchema } from './usersCreateWithoutCreated_account_actionsInputSchema';
import { usersUncheckedCreateWithoutCreated_account_actionsInputSchema } from './usersUncheckedCreateWithoutCreated_account_actionsInputSchema';
import { usersCreateOrConnectWithoutCreated_account_actionsInputSchema } from './usersCreateOrConnectWithoutCreated_account_actionsInputSchema';
import { usersUpsertWithoutCreated_account_actionsInputSchema } from './usersUpsertWithoutCreated_account_actionsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutCreated_account_actionsInputSchema } from './usersUpdateToOneWithWhereWithoutCreated_account_actionsInputSchema';
import { usersUpdateWithoutCreated_account_actionsInputSchema } from './usersUpdateWithoutCreated_account_actionsInputSchema';
import { usersUncheckedUpdateWithoutCreated_account_actionsInputSchema } from './usersUncheckedUpdateWithoutCreated_account_actionsInputSchema';

export const usersUpdateOneWithoutCreated_account_actionsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutCreated_account_actionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutCreated_account_actionsInputSchema),z.lazy(() => usersUncheckedCreateWithoutCreated_account_actionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCreated_account_actionsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutCreated_account_actionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutCreated_account_actionsInputSchema),z.lazy(() => usersUpdateWithoutCreated_account_actionsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCreated_account_actionsInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneWithoutCreated_account_actionsNestedInputSchema;
