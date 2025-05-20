import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutDriversInputSchema } from './documentsUpdateWithoutDriversInputSchema';
import { documentsUncheckedUpdateWithoutDriversInputSchema } from './documentsUncheckedUpdateWithoutDriversInputSchema';

export const documentsUpdateWithWhereUniqueWithoutDriversInputSchema: z.ZodType<Prisma.documentsUpdateWithWhereUniqueWithoutDriversInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateWithoutDriversInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutDriversInputSchema) ]),
}).strict();

export default documentsUpdateWithWhereUniqueWithoutDriversInputSchema;
