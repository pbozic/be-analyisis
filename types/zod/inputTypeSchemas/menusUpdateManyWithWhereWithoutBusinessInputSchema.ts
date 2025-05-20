import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusScalarWhereInputSchema } from './menusScalarWhereInputSchema';
import { menusUpdateManyMutationInputSchema } from './menusUpdateManyMutationInputSchema';
import { menusUncheckedUpdateManyWithoutBusinessInputSchema } from './menusUncheckedUpdateManyWithoutBusinessInputSchema';

export const menusUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.menusUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => menusScalarWhereInputSchema),
  data: z.union([ z.lazy(() => menusUpdateManyMutationInputSchema),z.lazy(() => menusUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export default menusUpdateManyWithWhereWithoutBusinessInputSchema;
