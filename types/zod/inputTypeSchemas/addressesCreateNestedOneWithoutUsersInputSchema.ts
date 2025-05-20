import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutUsersInputSchema } from './addressesCreateWithoutUsersInputSchema';
import { addressesUncheckedCreateWithoutUsersInputSchema } from './addressesUncheckedCreateWithoutUsersInputSchema';
import { addressesCreateOrConnectWithoutUsersInputSchema } from './addressesCreateOrConnectWithoutUsersInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';

export const addressesCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.addressesCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => addressesCreateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => addressesWhereUniqueInputSchema).optional()
}).strict();

export default addressesCreateNestedOneWithoutUsersInputSchema;
