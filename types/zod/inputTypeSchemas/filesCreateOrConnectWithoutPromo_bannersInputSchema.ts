import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';
import { filesCreateWithoutPromo_bannersInputSchema } from './filesCreateWithoutPromo_bannersInputSchema';
import { filesUncheckedCreateWithoutPromo_bannersInputSchema } from './filesUncheckedCreateWithoutPromo_bannersInputSchema';

export const filesCreateOrConnectWithoutPromo_bannersInputSchema: z.ZodType<Prisma.filesCreateOrConnectWithoutPromo_bannersInput> = z.object({
  where: z.lazy(() => filesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => filesCreateWithoutPromo_bannersInputSchema),z.lazy(() => filesUncheckedCreateWithoutPromo_bannersInputSchema) ]),
}).strict();

export default filesCreateOrConnectWithoutPromo_bannersInputSchema;
