import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutBusiness_usersInputSchema } from './businessUpdateWithoutBusiness_usersInputSchema';
import { businessUncheckedUpdateWithoutBusiness_usersInputSchema } from './businessUncheckedUpdateWithoutBusiness_usersInputSchema';

export const businessUpdateToOneWithWhereWithoutBusiness_usersInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutBusiness_usersInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutBusiness_usersInputSchema),z.lazy(() => businessUncheckedUpdateWithoutBusiness_usersInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutBusiness_usersInputSchema;
