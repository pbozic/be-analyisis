import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutUser_rolesInputSchema } from './usersCreateWithoutUser_rolesInputSchema';
import { usersUncheckedCreateWithoutUser_rolesInputSchema } from './usersUncheckedCreateWithoutUser_rolesInputSchema';
import { usersCreateOrConnectWithoutUser_rolesInputSchema } from './usersCreateOrConnectWithoutUser_rolesInputSchema';
import { usersUpsertWithoutUser_rolesInputSchema } from './usersUpsertWithoutUser_rolesInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutUser_rolesInputSchema } from './usersUpdateToOneWithWhereWithoutUser_rolesInputSchema';
import { usersUpdateWithoutUser_rolesInputSchema } from './usersUpdateWithoutUser_rolesInputSchema';
import { usersUncheckedUpdateWithoutUser_rolesInputSchema } from './usersUncheckedUpdateWithoutUser_rolesInputSchema';

export const usersUpdateOneRequiredWithoutUser_rolesNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutUser_rolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutUser_rolesInputSchema),z.lazy(() => usersUncheckedCreateWithoutUser_rolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutUser_rolesInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutUser_rolesInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutUser_rolesInputSchema),z.lazy(() => usersUpdateWithoutUser_rolesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutUser_rolesInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutUser_rolesNestedInputSchema;
