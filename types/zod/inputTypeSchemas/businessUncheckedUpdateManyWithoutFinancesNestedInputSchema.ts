import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutFinancesInputSchema } from './businessCreateWithoutFinancesInputSchema';
import { businessUncheckedCreateWithoutFinancesInputSchema } from './businessUncheckedCreateWithoutFinancesInputSchema';
import { businessCreateOrConnectWithoutFinancesInputSchema } from './businessCreateOrConnectWithoutFinancesInputSchema';
import { businessUpsertWithWhereUniqueWithoutFinancesInputSchema } from './businessUpsertWithWhereUniqueWithoutFinancesInputSchema';
import { businessCreateManyFinancesInputEnvelopeSchema } from './businessCreateManyFinancesInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithWhereUniqueWithoutFinancesInputSchema } from './businessUpdateWithWhereUniqueWithoutFinancesInputSchema';
import { businessUpdateManyWithWhereWithoutFinancesInputSchema } from './businessUpdateManyWithWhereWithoutFinancesInputSchema';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';

export const businessUncheckedUpdateManyWithoutFinancesNestedInputSchema: z.ZodType<Prisma.businessUncheckedUpdateManyWithoutFinancesNestedInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutFinancesInputSchema),z.lazy(() => businessCreateWithoutFinancesInputSchema).array(),z.lazy(() => businessUncheckedCreateWithoutFinancesInputSchema),z.lazy(() => businessUncheckedCreateWithoutFinancesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => businessCreateOrConnectWithoutFinancesInputSchema),z.lazy(() => businessCreateOrConnectWithoutFinancesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => businessUpsertWithWhereUniqueWithoutFinancesInputSchema),z.lazy(() => businessUpsertWithWhereUniqueWithoutFinancesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => businessCreateManyFinancesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => businessUpdateWithWhereUniqueWithoutFinancesInputSchema),z.lazy(() => businessUpdateWithWhereUniqueWithoutFinancesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => businessUpdateManyWithWhereWithoutFinancesInputSchema),z.lazy(() => businessUpdateManyWithWhereWithoutFinancesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => businessScalarWhereInputSchema),z.lazy(() => businessScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default businessUncheckedUpdateManyWithoutFinancesNestedInputSchema;
