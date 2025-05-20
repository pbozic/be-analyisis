import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutBusinesses_delivery_addressInputSchema } from './addressesCreateWithoutBusinesses_delivery_addressInputSchema';
import { addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema } from './addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema';
import { addressesCreateOrConnectWithoutBusinesses_delivery_addressInputSchema } from './addressesCreateOrConnectWithoutBusinesses_delivery_addressInputSchema';
import { addressesUpsertWithoutBusinesses_delivery_addressInputSchema } from './addressesUpsertWithoutBusinesses_delivery_addressInputSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesUpdateToOneWithWhereWithoutBusinesses_delivery_addressInputSchema } from './addressesUpdateToOneWithWhereWithoutBusinesses_delivery_addressInputSchema';
import { addressesUpdateWithoutBusinesses_delivery_addressInputSchema } from './addressesUpdateWithoutBusinesses_delivery_addressInputSchema';
import { addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema } from './addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema';

export const addressesUpdateOneWithoutBusinesses_delivery_addressNestedInputSchema: z.ZodType<Prisma.addressesUpdateOneWithoutBusinesses_delivery_addressNestedInput> = z.object({
  create: z.union([ z.lazy(() => addressesCreateWithoutBusinesses_delivery_addressInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusinesses_delivery_addressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutBusinesses_delivery_addressInputSchema).optional(),
  upsert: z.lazy(() => addressesUpsertWithoutBusinesses_delivery_addressInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => addressesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => addressesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => addressesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => addressesUpdateToOneWithWhereWithoutBusinesses_delivery_addressInputSchema),z.lazy(() => addressesUpdateWithoutBusinesses_delivery_addressInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutBusinesses_delivery_addressInputSchema) ]).optional(),
}).strict();

export default addressesUpdateOneWithoutBusinesses_delivery_addressNestedInputSchema;
