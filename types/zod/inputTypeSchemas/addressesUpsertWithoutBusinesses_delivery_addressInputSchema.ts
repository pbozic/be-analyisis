import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesUpdateWithoutBusinesses_delivery_addressInputSchema } from './addressesUpdateWithoutBusinesses_delivery_addressInputSchema';
import { addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema } from './addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema';
import { addressesCreateWithoutBusinesses_delivery_addressInputSchema } from './addressesCreateWithoutBusinesses_delivery_addressInputSchema';
import { addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema } from './addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const addressesUpsertWithoutBusinesses_delivery_addressInputSchema: z.ZodType<Prisma.addressesUpsertWithoutBusinesses_delivery_addressInput> = z.object({
  update: z.union([ z.lazy(() => addressesUpdateWithoutBusinesses_delivery_addressInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema) ]),
  create: z.union([ z.lazy(() => addressesCreateWithoutBusinesses_delivery_addressInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema) ]),
  where: z.lazy(() => addressesWhereInputSchema).optional()
}).strict();

export default addressesUpsertWithoutBusinesses_delivery_addressInputSchema;
