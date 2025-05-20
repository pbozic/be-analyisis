import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutBusinessInputSchema } from './documentsUpdateWithoutBusinessInputSchema';
import { documentsUncheckedUpdateWithoutBusinessInputSchema } from './documentsUncheckedUpdateWithoutBusinessInputSchema';
import { documentsCreateWithoutBusinessInputSchema } from './documentsCreateWithoutBusinessInputSchema';
import { documentsUncheckedCreateWithoutBusinessInputSchema } from './documentsUncheckedCreateWithoutBusinessInputSchema';

export const documentsUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.documentsUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => documentsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => documentsUpdateWithoutBusinessInputSchema),z.lazy(() => documentsUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => documentsCreateWithoutBusinessInputSchema),z.lazy(() => documentsUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default documentsUpsertWithWhereUniqueWithoutBusinessInputSchema;
