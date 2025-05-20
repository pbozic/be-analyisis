import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutAccount_actionsInputSchema } from './businessUpdateWithoutAccount_actionsInputSchema';
import { businessUncheckedUpdateWithoutAccount_actionsInputSchema } from './businessUncheckedUpdateWithoutAccount_actionsInputSchema';

export const businessUpdateToOneWithWhereWithoutAccount_actionsInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutAccount_actionsInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutAccount_actionsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutAccount_actionsInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutAccount_actionsInputSchema;
