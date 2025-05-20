import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';
import { reservationsUpdateWithoutBusinessInputSchema } from './reservationsUpdateWithoutBusinessInputSchema';
import { reservationsUncheckedUpdateWithoutBusinessInputSchema } from './reservationsUncheckedUpdateWithoutBusinessInputSchema';
import { reservationsCreateWithoutBusinessInputSchema } from './reservationsCreateWithoutBusinessInputSchema';
import { reservationsUncheckedCreateWithoutBusinessInputSchema } from './reservationsUncheckedCreateWithoutBusinessInputSchema';

export const reservationsUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.reservationsUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => reservationsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => reservationsUpdateWithoutBusinessInputSchema),z.lazy(() => reservationsUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => reservationsCreateWithoutBusinessInputSchema),z.lazy(() => reservationsUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default reservationsUpsertWithWhereUniqueWithoutBusinessInputSchema;
