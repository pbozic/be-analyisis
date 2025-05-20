import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutBusiness_usersInputSchema } from './usersCreateWithoutBusiness_usersInputSchema';
import { usersUncheckedCreateWithoutBusiness_usersInputSchema } from './usersUncheckedCreateWithoutBusiness_usersInputSchema';
import { usersCreateOrConnectWithoutBusiness_usersInputSchema } from './usersCreateOrConnectWithoutBusiness_usersInputSchema';
import { usersUpsertWithoutBusiness_usersInputSchema } from './usersUpsertWithoutBusiness_usersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutBusiness_usersInputSchema } from './usersUpdateToOneWithWhereWithoutBusiness_usersInputSchema';
import { usersUpdateWithoutBusiness_usersInputSchema } from './usersUpdateWithoutBusiness_usersInputSchema';
import { usersUncheckedUpdateWithoutBusiness_usersInputSchema } from './usersUncheckedUpdateWithoutBusiness_usersInputSchema';

export const usersUpdateOneWithoutBusiness_usersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutBusiness_usersNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutBusiness_usersInputSchema),z.lazy(() => usersUncheckedCreateWithoutBusiness_usersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutBusiness_usersInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutBusiness_usersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutBusiness_usersInputSchema),z.lazy(() => usersUpdateWithoutBusiness_usersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutBusiness_usersInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneWithoutBusiness_usersNestedInputSchema;
