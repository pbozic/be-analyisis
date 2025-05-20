import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutFinancesInputSchema } from './businessUpdateWithoutFinancesInputSchema';
import { businessUncheckedUpdateWithoutFinancesInputSchema } from './businessUncheckedUpdateWithoutFinancesInputSchema';
import { businessCreateWithoutFinancesInputSchema } from './businessCreateWithoutFinancesInputSchema';
import { businessUncheckedCreateWithoutFinancesInputSchema } from './businessUncheckedCreateWithoutFinancesInputSchema';

export const businessUpsertWithWhereUniqueWithoutFinancesInputSchema: z.ZodType<Prisma.businessUpsertWithWhereUniqueWithoutFinancesInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => businessUpdateWithoutFinancesInputSchema),z.lazy(() => businessUncheckedUpdateWithoutFinancesInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutFinancesInputSchema),z.lazy(() => businessUncheckedCreateWithoutFinancesInputSchema) ]),
}).strict();

export default businessUpsertWithWhereUniqueWithoutFinancesInputSchema;
