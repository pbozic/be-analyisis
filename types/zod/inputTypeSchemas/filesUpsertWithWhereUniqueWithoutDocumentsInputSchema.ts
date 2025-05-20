import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';
import { filesUpdateWithoutDocumentsInputSchema } from './filesUpdateWithoutDocumentsInputSchema';
import { filesUncheckedUpdateWithoutDocumentsInputSchema } from './filesUncheckedUpdateWithoutDocumentsInputSchema';
import { filesCreateWithoutDocumentsInputSchema } from './filesCreateWithoutDocumentsInputSchema';
import { filesUncheckedCreateWithoutDocumentsInputSchema } from './filesUncheckedCreateWithoutDocumentsInputSchema';

export const filesUpsertWithWhereUniqueWithoutDocumentsInputSchema: z.ZodType<Prisma.filesUpsertWithWhereUniqueWithoutDocumentsInput> = z.object({
  where: z.lazy(() => filesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => filesUpdateWithoutDocumentsInputSchema),z.lazy(() => filesUncheckedUpdateWithoutDocumentsInputSchema) ]),
  create: z.union([ z.lazy(() => filesCreateWithoutDocumentsInputSchema),z.lazy(() => filesUncheckedCreateWithoutDocumentsInputSchema) ]),
}).strict();

export default filesUpsertWithWhereUniqueWithoutDocumentsInputSchema;
