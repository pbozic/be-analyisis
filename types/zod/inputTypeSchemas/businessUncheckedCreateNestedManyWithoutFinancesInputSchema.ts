import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutFinancesInputSchema } from './businessCreateWithoutFinancesInputSchema';
import { businessUncheckedCreateWithoutFinancesInputSchema } from './businessUncheckedCreateWithoutFinancesInputSchema';
import { businessCreateOrConnectWithoutFinancesInputSchema } from './businessCreateOrConnectWithoutFinancesInputSchema';
import { businessCreateManyFinancesInputEnvelopeSchema } from './businessCreateManyFinancesInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessUncheckedCreateNestedManyWithoutFinancesInputSchema: z.ZodType<Prisma.businessUncheckedCreateNestedManyWithoutFinancesInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutFinancesInputSchema),z.lazy(() => businessCreateWithoutFinancesInputSchema).array(),z.lazy(() => businessUncheckedCreateWithoutFinancesInputSchema),z.lazy(() => businessUncheckedCreateWithoutFinancesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => businessCreateOrConnectWithoutFinancesInputSchema),z.lazy(() => businessCreateOrConnectWithoutFinancesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => businessCreateManyFinancesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default businessUncheckedCreateNestedManyWithoutFinancesInputSchema;
