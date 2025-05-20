import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutBusiness_teamsInputSchema } from './businessCreateWithoutBusiness_teamsInputSchema';
import { businessUncheckedCreateWithoutBusiness_teamsInputSchema } from './businessUncheckedCreateWithoutBusiness_teamsInputSchema';

export const businessCreateOrConnectWithoutBusiness_teamsInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutBusiness_teamsInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_teamsInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_teamsInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutBusiness_teamsInputSchema;
