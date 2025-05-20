import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { addressesUpdateWithoutBusiness_usersInputSchema } from './addressesUpdateWithoutBusiness_usersInputSchema';
import { addressesUncheckedUpdateWithoutBusiness_usersInputSchema } from './addressesUncheckedUpdateWithoutBusiness_usersInputSchema';

export const addressesUpdateToOneWithWhereWithoutBusiness_usersInputSchema: z.ZodType<Prisma.addressesUpdateToOneWithWhereWithoutBusiness_usersInput> = z.object({
  where: z.lazy(() => addressesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => addressesUpdateWithoutBusiness_usersInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutBusiness_usersInputSchema) ]),
}).strict();

export default addressesUpdateToOneWithWhereWithoutBusiness_usersInputSchema;
