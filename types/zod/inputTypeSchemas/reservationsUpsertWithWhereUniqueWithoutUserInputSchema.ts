import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';
import { reservationsUpdateWithoutUserInputSchema } from './reservationsUpdateWithoutUserInputSchema';
import { reservationsUncheckedUpdateWithoutUserInputSchema } from './reservationsUncheckedUpdateWithoutUserInputSchema';
import { reservationsCreateWithoutUserInputSchema } from './reservationsCreateWithoutUserInputSchema';
import { reservationsUncheckedCreateWithoutUserInputSchema } from './reservationsUncheckedCreateWithoutUserInputSchema';

export const reservationsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.reservationsUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => reservationsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => reservationsUpdateWithoutUserInputSchema),z.lazy(() => reservationsUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => reservationsCreateWithoutUserInputSchema),z.lazy(() => reservationsUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default reservationsUpsertWithWhereUniqueWithoutUserInputSchema;
