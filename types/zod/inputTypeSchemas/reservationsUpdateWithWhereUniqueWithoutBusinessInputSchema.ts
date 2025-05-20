import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';
import { reservationsUpdateWithoutBusinessInputSchema } from './reservationsUpdateWithoutBusinessInputSchema';
import { reservationsUncheckedUpdateWithoutBusinessInputSchema } from './reservationsUncheckedUpdateWithoutBusinessInputSchema';

export const reservationsUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.reservationsUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => reservationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => reservationsUpdateWithoutBusinessInputSchema),z.lazy(() => reservationsUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default reservationsUpdateWithWhereUniqueWithoutBusinessInputSchema;
