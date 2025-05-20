import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';
import { translatableUpdateWithoutPromo_sectionsInputSchema } from './translatableUpdateWithoutPromo_sectionsInputSchema';
import { translatableUncheckedUpdateWithoutPromo_sectionsInputSchema } from './translatableUncheckedUpdateWithoutPromo_sectionsInputSchema';

export const translatableUpdateToOneWithWhereWithoutPromo_sectionsInputSchema: z.ZodType<Prisma.translatableUpdateToOneWithWhereWithoutPromo_sectionsInput> = z.object({
  where: z.lazy(() => translatableWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => translatableUpdateWithoutPromo_sectionsInputSchema),z.lazy(() => translatableUncheckedUpdateWithoutPromo_sectionsInputSchema) ]),
}).strict();

export default translatableUpdateToOneWithWhereWithoutPromo_sectionsInputSchema;
