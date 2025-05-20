import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutParent_businessInputSchema } from './businessUpdateWithoutParent_businessInputSchema';
import { businessUncheckedUpdateWithoutParent_businessInputSchema } from './businessUncheckedUpdateWithoutParent_businessInputSchema';

export const businessUpdateWithWhereUniqueWithoutParent_businessInputSchema: z.ZodType<Prisma.businessUpdateWithWhereUniqueWithoutParent_businessInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => businessUpdateWithoutParent_businessInputSchema),z.lazy(() => businessUncheckedUpdateWithoutParent_businessInputSchema) ]),
}).strict();

export default businessUpdateWithWhereUniqueWithoutParent_businessInputSchema;
