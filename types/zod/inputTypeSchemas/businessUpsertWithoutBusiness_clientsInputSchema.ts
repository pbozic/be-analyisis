import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutBusiness_clientsInputSchema } from './businessUpdateWithoutBusiness_clientsInputSchema';
import { businessUncheckedUpdateWithoutBusiness_clientsInputSchema } from './businessUncheckedUpdateWithoutBusiness_clientsInputSchema';
import { businessCreateWithoutBusiness_clientsInputSchema } from './businessCreateWithoutBusiness_clientsInputSchema';
import { businessUncheckedCreateWithoutBusiness_clientsInputSchema } from './businessUncheckedCreateWithoutBusiness_clientsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.businessUpsertWithoutBusiness_clientsInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutBusiness_clientsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutBusiness_clientsInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_clientsInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_clientsInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutBusiness_clientsInputSchema;
