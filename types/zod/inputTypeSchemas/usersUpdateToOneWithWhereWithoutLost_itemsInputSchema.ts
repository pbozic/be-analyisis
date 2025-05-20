import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutLost_itemsInputSchema } from './usersUpdateWithoutLost_itemsInputSchema';
import { usersUncheckedUpdateWithoutLost_itemsInputSchema } from './usersUncheckedUpdateWithoutLost_itemsInputSchema';

export const usersUpdateToOneWithWhereWithoutLost_itemsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutLost_itemsInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutLost_itemsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutLost_itemsInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutLost_itemsInputSchema;
