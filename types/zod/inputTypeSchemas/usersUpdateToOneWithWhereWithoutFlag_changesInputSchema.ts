import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutFlag_changesInputSchema } from './usersUpdateWithoutFlag_changesInputSchema';
import { usersUncheckedUpdateWithoutFlag_changesInputSchema } from './usersUncheckedUpdateWithoutFlag_changesInputSchema';

export const usersUpdateToOneWithWhereWithoutFlag_changesInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutFlag_changesInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutFlag_changesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutFlag_changesInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutFlag_changesInputSchema;
