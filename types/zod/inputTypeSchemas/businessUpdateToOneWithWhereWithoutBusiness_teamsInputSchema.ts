import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutBusiness_teamsInputSchema } from './businessUpdateWithoutBusiness_teamsInputSchema';
import { businessUncheckedUpdateWithoutBusiness_teamsInputSchema } from './businessUncheckedUpdateWithoutBusiness_teamsInputSchema';

export const businessUpdateToOneWithWhereWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutBusiness_teamsInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutBusiness_teamsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutBusiness_teamsInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutBusiness_teamsInputSchema;
