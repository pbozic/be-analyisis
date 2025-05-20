import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_rolesWhereUniqueInputSchema } from './user_rolesWhereUniqueInputSchema';
import { user_rolesUpdateWithoutUserInputSchema } from './user_rolesUpdateWithoutUserInputSchema';
import { user_rolesUncheckedUpdateWithoutUserInputSchema } from './user_rolesUncheckedUpdateWithoutUserInputSchema';

export const user_rolesUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.user_rolesUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => user_rolesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => user_rolesUpdateWithoutUserInputSchema),z.lazy(() => user_rolesUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default user_rolesUpdateWithWhereUniqueWithoutUserInputSchema;
