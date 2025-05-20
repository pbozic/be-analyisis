import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutBusiness_usersInputSchema } from './addressesCreateWithoutBusiness_usersInputSchema';
import { addressesUncheckedCreateWithoutBusiness_usersInputSchema } from './addressesUncheckedCreateWithoutBusiness_usersInputSchema';
import { addressesCreateOrConnectWithoutBusiness_usersInputSchema } from './addressesCreateOrConnectWithoutBusiness_usersInputSchema';
import { addressesUpsertWithoutBusiness_usersInputSchema } from './addressesUpsertWithoutBusiness_usersInputSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesUpdateToOneWithWhereWithoutBusiness_usersInputSchema } from './addressesUpdateToOneWithWhereWithoutBusiness_usersInputSchema';
import { addressesUpdateWithoutBusiness_usersInputSchema } from './addressesUpdateWithoutBusiness_usersInputSchema';
import { addressesUncheckedUpdateWithoutBusiness_usersInputSchema } from './addressesUncheckedUpdateWithoutBusiness_usersInputSchema';

export const addressesUpdateOneWithoutBusiness_usersNestedInputSchema: z.ZodType<Prisma.addressesUpdateOneWithoutBusiness_usersNestedInput> = z.object({
  create: z.union([ z.lazy(() => addressesCreateWithoutBusiness_usersInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusiness_usersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutBusiness_usersInputSchema).optional(),
  upsert: z.lazy(() => addressesUpsertWithoutBusiness_usersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => addressesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => addressesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => addressesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => addressesUpdateToOneWithWhereWithoutBusiness_usersInputSchema),z.lazy(() => addressesUpdateWithoutBusiness_usersInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutBusiness_usersInputSchema) ]).optional(),
}).strict();

export default addressesUpdateOneWithoutBusiness_usersNestedInputSchema;
