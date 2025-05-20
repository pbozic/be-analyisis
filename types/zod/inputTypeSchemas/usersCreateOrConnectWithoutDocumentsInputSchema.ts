import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutDocumentsInputSchema } from './usersCreateWithoutDocumentsInputSchema';
import { usersUncheckedCreateWithoutDocumentsInputSchema } from './usersUncheckedCreateWithoutDocumentsInputSchema';

export const usersCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutDocumentsInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutDocumentsInputSchema),z.lazy(() => usersUncheckedCreateWithoutDocumentsInputSchema) ]),
}).strict();

export default usersCreateOrConnectWithoutDocumentsInputSchema;
