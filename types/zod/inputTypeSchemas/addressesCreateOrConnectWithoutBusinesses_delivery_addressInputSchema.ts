import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesCreateWithoutBusinesses_delivery_addressInputSchema } from './addressesCreateWithoutBusinesses_delivery_addressInputSchema';
import { addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema } from './addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema';

export const addressesCreateOrConnectWithoutBusinesses_delivery_addressInputSchema: z.ZodType<Prisma.addressesCreateOrConnectWithoutBusinesses_delivery_addressInput> = z.object({
  where: z.lazy(() => addressesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => addressesCreateWithoutBusinesses_delivery_addressInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema) ]),
}).strict();

export default addressesCreateOrConnectWithoutBusinesses_delivery_addressInputSchema;
