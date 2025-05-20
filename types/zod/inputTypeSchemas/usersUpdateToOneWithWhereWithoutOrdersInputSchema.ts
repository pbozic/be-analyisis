import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutOrdersInputSchema } from './usersUpdateWithoutOrdersInputSchema';
import { usersUncheckedUpdateWithoutOrdersInputSchema } from './usersUncheckedUpdateWithoutOrdersInputSchema';

export const usersUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutOrdersInputSchema;
