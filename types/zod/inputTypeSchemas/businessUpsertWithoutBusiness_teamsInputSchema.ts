import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutBusiness_teamsInputSchema } from './businessUpdateWithoutBusiness_teamsInputSchema';
import { businessUncheckedUpdateWithoutBusiness_teamsInputSchema } from './businessUncheckedUpdateWithoutBusiness_teamsInputSchema';
import { businessCreateWithoutBusiness_teamsInputSchema } from './businessCreateWithoutBusiness_teamsInputSchema';
import { businessUncheckedCreateWithoutBusiness_teamsInputSchema } from './businessUncheckedCreateWithoutBusiness_teamsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.businessUpsertWithoutBusiness_teamsInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutBusiness_teamsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutBusiness_teamsInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_teamsInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_teamsInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutBusiness_teamsInputSchema;
