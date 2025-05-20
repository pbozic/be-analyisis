import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesCreateWithoutProductInputSchema } from './local_pricesCreateWithoutProductInputSchema';
import { local_pricesUncheckedCreateWithoutProductInputSchema } from './local_pricesUncheckedCreateWithoutProductInputSchema';
import { local_pricesCreateOrConnectWithoutProductInputSchema } from './local_pricesCreateOrConnectWithoutProductInputSchema';
import { local_pricesCreateManyProductInputEnvelopeSchema } from './local_pricesCreateManyProductInputEnvelopeSchema';
import { local_pricesWhereUniqueInputSchema } from './local_pricesWhereUniqueInputSchema';

export const local_pricesUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.local_pricesUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => local_pricesCreateWithoutProductInputSchema),z.lazy(() => local_pricesCreateWithoutProductInputSchema).array(),z.lazy(() => local_pricesUncheckedCreateWithoutProductInputSchema),z.lazy(() => local_pricesUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => local_pricesCreateOrConnectWithoutProductInputSchema),z.lazy(() => local_pricesCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => local_pricesCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => local_pricesWhereUniqueInputSchema),z.lazy(() => local_pricesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default local_pricesUncheckedCreateNestedManyWithoutProductInputSchema;
