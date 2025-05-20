import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';
import { reservationsCreateWithoutBusinessInputSchema } from './reservationsCreateWithoutBusinessInputSchema';
import { reservationsUncheckedCreateWithoutBusinessInputSchema } from './reservationsUncheckedCreateWithoutBusinessInputSchema';

export const reservationsCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.reservationsCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => reservationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => reservationsCreateWithoutBusinessInputSchema),z.lazy(() => reservationsUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default reservationsCreateOrConnectWithoutBusinessInputSchema;
