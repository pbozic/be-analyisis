import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutBusinessesInputSchema } from './addressesCreateWithoutBusinessesInputSchema';
import { addressesUncheckedCreateWithoutBusinessesInputSchema } from './addressesUncheckedCreateWithoutBusinessesInputSchema';
import { addressesCreateOrConnectWithoutBusinessesInputSchema } from './addressesCreateOrConnectWithoutBusinessesInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';

export const addressesCreateNestedOneWithoutBusinessesInputSchema: z.ZodType<Prisma.addressesCreateNestedOneWithoutBusinessesInput> = z.object({
  create: z.union([ z.lazy(() => addressesCreateWithoutBusinessesInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusinessesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutBusinessesInputSchema).optional(),
  connect: z.lazy(() => addressesWhereUniqueInputSchema).optional()
}).strict();

export default addressesCreateNestedOneWithoutBusinessesInputSchema;
