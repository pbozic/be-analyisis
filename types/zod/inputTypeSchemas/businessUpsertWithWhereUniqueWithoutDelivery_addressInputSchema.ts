import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutDelivery_addressInputSchema } from './businessUpdateWithoutDelivery_addressInputSchema';
import { businessUncheckedUpdateWithoutDelivery_addressInputSchema } from './businessUncheckedUpdateWithoutDelivery_addressInputSchema';
import { businessCreateWithoutDelivery_addressInputSchema } from './businessCreateWithoutDelivery_addressInputSchema';
import { businessUncheckedCreateWithoutDelivery_addressInputSchema } from './businessUncheckedCreateWithoutDelivery_addressInputSchema';

export const businessUpsertWithWhereUniqueWithoutDelivery_addressInputSchema: z.ZodType<Prisma.businessUpsertWithWhereUniqueWithoutDelivery_addressInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => businessUpdateWithoutDelivery_addressInputSchema),z.lazy(() => businessUncheckedUpdateWithoutDelivery_addressInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutDelivery_addressInputSchema),z.lazy(() => businessUncheckedCreateWithoutDelivery_addressInputSchema) ]),
}).strict();

export default businessUpsertWithWhereUniqueWithoutDelivery_addressInputSchema;
