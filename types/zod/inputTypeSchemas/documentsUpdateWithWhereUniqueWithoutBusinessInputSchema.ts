import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutBusinessInputSchema } from './documentsUpdateWithoutBusinessInputSchema';
import { documentsUncheckedUpdateWithoutBusinessInputSchema } from './documentsUncheckedUpdateWithoutBusinessInputSchema';

export const documentsUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.documentsUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateWithoutBusinessInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default documentsUpdateWithWhereUniqueWithoutBusinessInputSchema;
