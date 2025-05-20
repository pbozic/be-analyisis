import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesScalarWhereInputSchema } from './filesScalarWhereInputSchema';
import { filesUpdateManyMutationInputSchema } from './filesUpdateManyMutationInputSchema';
import { filesUncheckedUpdateManyWithoutDocumentsInputSchema } from './filesUncheckedUpdateManyWithoutDocumentsInputSchema';

export const filesUpdateManyWithWhereWithoutDocumentsInputSchema: z.ZodType<Prisma.filesUpdateManyWithWhereWithoutDocumentsInput> = z.object({
  where: z.lazy(() => filesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => filesUpdateManyMutationInputSchema),z.lazy(() => filesUncheckedUpdateManyWithoutDocumentsInputSchema) ]),
}).strict();

export default filesUpdateManyWithWhereWithoutDocumentsInputSchema;
