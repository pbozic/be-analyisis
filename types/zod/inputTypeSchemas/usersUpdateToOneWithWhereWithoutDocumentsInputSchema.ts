import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutDocumentsInputSchema } from './usersUpdateWithoutDocumentsInputSchema';
import { usersUncheckedUpdateWithoutDocumentsInputSchema } from './usersUncheckedUpdateWithoutDocumentsInputSchema';

export const usersUpdateToOneWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutDocumentsInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutDocumentsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutDocumentsInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutDocumentsInputSchema;
