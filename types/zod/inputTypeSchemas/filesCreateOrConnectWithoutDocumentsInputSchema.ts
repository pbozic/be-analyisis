import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';
import { filesCreateWithoutDocumentsInputSchema } from './filesCreateWithoutDocumentsInputSchema';
import { filesUncheckedCreateWithoutDocumentsInputSchema } from './filesUncheckedCreateWithoutDocumentsInputSchema';

export const filesCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.filesCreateOrConnectWithoutDocumentsInput> = z.object({
  where: z.lazy(() => filesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => filesCreateWithoutDocumentsInputSchema),z.lazy(() => filesUncheckedCreateWithoutDocumentsInputSchema) ]),
}).strict();

export default filesCreateOrConnectWithoutDocumentsInputSchema;
