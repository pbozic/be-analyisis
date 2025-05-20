import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutBusiness_usersInputSchema } from './addressesCreateWithoutBusiness_usersInputSchema';
import { addressesUncheckedCreateWithoutBusiness_usersInputSchema } from './addressesUncheckedCreateWithoutBusiness_usersInputSchema';
import { addressesCreateOrConnectWithoutBusiness_usersInputSchema } from './addressesCreateOrConnectWithoutBusiness_usersInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';

export const addressesCreateNestedOneWithoutBusiness_usersInputSchema: z.ZodType<Prisma.addressesCreateNestedOneWithoutBusiness_usersInput> = z.object({
  create: z.union([ z.lazy(() => addressesCreateWithoutBusiness_usersInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusiness_usersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutBusiness_usersInputSchema).optional(),
  connect: z.lazy(() => addressesWhereUniqueInputSchema).optional()
}).strict();

export default addressesCreateNestedOneWithoutBusiness_usersInputSchema;
