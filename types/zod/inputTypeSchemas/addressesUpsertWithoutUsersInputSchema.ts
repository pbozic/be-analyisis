import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesUpdateWithoutUsersInputSchema } from './addressesUpdateWithoutUsersInputSchema';
import { addressesUncheckedUpdateWithoutUsersInputSchema } from './addressesUncheckedUpdateWithoutUsersInputSchema';
import { addressesCreateWithoutUsersInputSchema } from './addressesCreateWithoutUsersInputSchema';
import { addressesUncheckedCreateWithoutUsersInputSchema } from './addressesUncheckedCreateWithoutUsersInputSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const addressesUpsertWithoutUsersInputSchema: z.ZodType<Prisma.addressesUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => addressesUpdateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => addressesCreateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedCreateWithoutUsersInputSchema) ]),
  where: z.lazy(() => addressesWhereInputSchema).optional()
}).strict();

export default addressesUpsertWithoutUsersInputSchema;
