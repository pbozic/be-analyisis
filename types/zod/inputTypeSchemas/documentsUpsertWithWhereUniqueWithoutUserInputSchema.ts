import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutUserInputSchema } from './documentsUpdateWithoutUserInputSchema';
import { documentsUncheckedUpdateWithoutUserInputSchema } from './documentsUncheckedUpdateWithoutUserInputSchema';
import { documentsCreateWithoutUserInputSchema } from './documentsCreateWithoutUserInputSchema';
import { documentsUncheckedCreateWithoutUserInputSchema } from './documentsUncheckedCreateWithoutUserInputSchema';

export const documentsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.documentsUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => documentsUpdateWithoutUserInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => documentsCreateWithoutUserInputSchema),z.lazy(() => documentsUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default documentsUpsertWithWhereUniqueWithoutUserInputSchema;
