import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesCreateWithoutBusinessesInputSchema } from './addressesCreateWithoutBusinessesInputSchema';
import { addressesUncheckedCreateWithoutBusinessesInputSchema } from './addressesUncheckedCreateWithoutBusinessesInputSchema';

export const addressesCreateOrConnectWithoutBusinessesInputSchema: z.ZodType<Prisma.addressesCreateOrConnectWithoutBusinessesInput> = z.object({
  where: z.lazy(() => addressesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => addressesCreateWithoutBusinessesInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusinessesInputSchema) ]),
}).strict();

export default addressesCreateOrConnectWithoutBusinessesInputSchema;
