import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutDelivery_addressInputSchema } from './businessCreateWithoutDelivery_addressInputSchema';
import { businessUncheckedCreateWithoutDelivery_addressInputSchema } from './businessUncheckedCreateWithoutDelivery_addressInputSchema';

export const businessCreateOrConnectWithoutDelivery_addressInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutDelivery_addressInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutDelivery_addressInputSchema),z.lazy(() => businessUncheckedCreateWithoutDelivery_addressInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutDelivery_addressInputSchema;
