import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';
import { filesUpdateWithoutDocumentsInputSchema } from './filesUpdateWithoutDocumentsInputSchema';
import { filesUncheckedUpdateWithoutDocumentsInputSchema } from './filesUncheckedUpdateWithoutDocumentsInputSchema';

export const filesUpdateWithWhereUniqueWithoutDocumentsInputSchema: z.ZodType<Prisma.filesUpdateWithWhereUniqueWithoutDocumentsInput> = z.object({
  where: z.lazy(() => filesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => filesUpdateWithoutDocumentsInputSchema),z.lazy(() => filesUncheckedUpdateWithoutDocumentsInputSchema) ]),
}).strict();

export default filesUpdateWithWhereUniqueWithoutDocumentsInputSchema;
