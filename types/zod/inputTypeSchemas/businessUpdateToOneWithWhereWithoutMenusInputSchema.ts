import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutMenusInputSchema } from './businessUpdateWithoutMenusInputSchema';
import { businessUncheckedUpdateWithoutMenusInputSchema } from './businessUncheckedUpdateWithoutMenusInputSchema';

export const businessUpdateToOneWithWhereWithoutMenusInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutMenusInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutMenusInputSchema),z.lazy(() => businessUncheckedUpdateWithoutMenusInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutMenusInputSchema;
