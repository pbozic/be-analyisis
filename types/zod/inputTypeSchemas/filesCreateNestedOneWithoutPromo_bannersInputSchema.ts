import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateWithoutPromo_bannersInputSchema } from './filesCreateWithoutPromo_bannersInputSchema';
import { filesUncheckedCreateWithoutPromo_bannersInputSchema } from './filesUncheckedCreateWithoutPromo_bannersInputSchema';
import { filesCreateOrConnectWithoutPromo_bannersInputSchema } from './filesCreateOrConnectWithoutPromo_bannersInputSchema';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';

export const filesCreateNestedOneWithoutPromo_bannersInputSchema: z.ZodType<Prisma.filesCreateNestedOneWithoutPromo_bannersInput> = z.object({
  create: z.union([ z.lazy(() => filesCreateWithoutPromo_bannersInputSchema),z.lazy(() => filesUncheckedCreateWithoutPromo_bannersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutPromo_bannersInputSchema).optional(),
  connect: z.lazy(() => filesWhereUniqueInputSchema).optional()
}).strict();

export default filesCreateNestedOneWithoutPromo_bannersInputSchema;
