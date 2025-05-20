import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutWord_buysInputSchema } from './businessUpdateWithoutWord_buysInputSchema';
import { businessUncheckedUpdateWithoutWord_buysInputSchema } from './businessUncheckedUpdateWithoutWord_buysInputSchema';
import { businessCreateWithoutWord_buysInputSchema } from './businessCreateWithoutWord_buysInputSchema';
import { businessUncheckedCreateWithoutWord_buysInputSchema } from './businessUncheckedCreateWithoutWord_buysInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutWord_buysInputSchema: z.ZodType<Prisma.businessUpsertWithoutWord_buysInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutWord_buysInputSchema),z.lazy(() => businessUncheckedUpdateWithoutWord_buysInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutWord_buysInputSchema),z.lazy(() => businessUncheckedCreateWithoutWord_buysInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutWord_buysInputSchema;
