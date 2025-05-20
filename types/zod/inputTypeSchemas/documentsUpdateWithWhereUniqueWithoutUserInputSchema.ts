import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutUserInputSchema } from './documentsUpdateWithoutUserInputSchema';
import { documentsUncheckedUpdateWithoutUserInputSchema } from './documentsUncheckedUpdateWithoutUserInputSchema';

export const documentsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.documentsUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => documentsUpdateWithoutUserInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default documentsUpdateWithWhereUniqueWithoutUserInputSchema;
