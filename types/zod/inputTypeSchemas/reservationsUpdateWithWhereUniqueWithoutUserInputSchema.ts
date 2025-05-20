import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';
import { reservationsUpdateWithoutUserInputSchema } from './reservationsUpdateWithoutUserInputSchema';
import { reservationsUncheckedUpdateWithoutUserInputSchema } from './reservationsUncheckedUpdateWithoutUserInputSchema';

export const reservationsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.reservationsUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => reservationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => reservationsUpdateWithoutUserInputSchema),z.lazy(() => reservationsUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default reservationsUpdateWithWhereUniqueWithoutUserInputSchema;
