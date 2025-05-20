import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutBusinesses_delivery_addressInputSchema } from './addressesCreateWithoutBusinesses_delivery_addressInputSchema';
import { addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema } from './addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema';
import { addressesCreateOrConnectWithoutBusinesses_delivery_addressInputSchema } from './addressesCreateOrConnectWithoutBusinesses_delivery_addressInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';

export const addressesCreateNestedOneWithoutBusinesses_delivery_addressInputSchema: z.ZodType<Prisma.addressesCreateNestedOneWithoutBusinesses_delivery_addressInput> = z.object({
  create: z.union([ z.lazy(() => addressesCreateWithoutBusinesses_delivery_addressInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutBusinesses_delivery_addressInputSchema).optional(),
  connect: z.lazy(() => addressesWhereUniqueInputSchema).optional()
}).strict();

export default addressesCreateNestedOneWithoutBusinesses_delivery_addressInputSchema;
