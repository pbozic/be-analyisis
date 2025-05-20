import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutDelivery_addressInputSchema } from './businessUpdateWithoutDelivery_addressInputSchema';
import { businessUncheckedUpdateWithoutDelivery_addressInputSchema } from './businessUncheckedUpdateWithoutDelivery_addressInputSchema';

export const businessUpdateWithWhereUniqueWithoutDelivery_addressInputSchema: z.ZodType<Prisma.businessUpdateWithWhereUniqueWithoutDelivery_addressInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => businessUpdateWithoutDelivery_addressInputSchema),z.lazy(() => businessUncheckedUpdateWithoutDelivery_addressInputSchema) ]),
}).strict();

export default businessUpdateWithWhereUniqueWithoutDelivery_addressInputSchema;
