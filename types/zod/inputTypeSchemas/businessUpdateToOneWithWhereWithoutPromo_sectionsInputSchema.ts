import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutPromo_sectionsInputSchema } from './businessUpdateWithoutPromo_sectionsInputSchema';
import { businessUncheckedUpdateWithoutPromo_sectionsInputSchema } from './businessUncheckedUpdateWithoutPromo_sectionsInputSchema';

export const businessUpdateToOneWithWhereWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutPromo_sectionsInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutPromo_sectionsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutPromo_sectionsInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutPromo_sectionsInputSchema;
