import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesUpdateWithoutBusinessesInputSchema } from './addressesUpdateWithoutBusinessesInputSchema';
import { addressesUncheckedUpdateWithoutBusinessesInputSchema } from './addressesUncheckedUpdateWithoutBusinessesInputSchema';
import { addressesCreateWithoutBusinessesInputSchema } from './addressesCreateWithoutBusinessesInputSchema';
import { addressesUncheckedCreateWithoutBusinessesInputSchema } from './addressesUncheckedCreateWithoutBusinessesInputSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';

export const addressesUpsertWithoutBusinessesInputSchema: z.ZodType<Prisma.addressesUpsertWithoutBusinessesInput> = z.object({
  update: z.union([ z.lazy(() => addressesUpdateWithoutBusinessesInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutBusinessesInputSchema) ]),
  create: z.union([ z.lazy(() => addressesCreateWithoutBusinessesInputSchema),z.lazy(() => addressesUncheckedCreateWithoutBusinessesInputSchema) ]),
  where: z.lazy(() => addressesWhereInputSchema).optional()
}).strict();

export default addressesUpsertWithoutBusinessesInputSchema;
