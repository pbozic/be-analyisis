import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyCreateWithoutWordInputSchema } from './word_buyCreateWithoutWordInputSchema';
import { word_buyUncheckedCreateWithoutWordInputSchema } from './word_buyUncheckedCreateWithoutWordInputSchema';
import { word_buyCreateOrConnectWithoutWordInputSchema } from './word_buyCreateOrConnectWithoutWordInputSchema';
import { word_buyCreateManyWordInputEnvelopeSchema } from './word_buyCreateManyWordInputEnvelopeSchema';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';

export const word_buyUncheckedCreateNestedManyWithoutWordInputSchema: z.ZodType<Prisma.word_buyUncheckedCreateNestedManyWithoutWordInput> = z.object({
  create: z.union([ z.lazy(() => word_buyCreateWithoutWordInputSchema),z.lazy(() => word_buyCreateWithoutWordInputSchema).array(),z.lazy(() => word_buyUncheckedCreateWithoutWordInputSchema),z.lazy(() => word_buyUncheckedCreateWithoutWordInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => word_buyCreateOrConnectWithoutWordInputSchema),z.lazy(() => word_buyCreateOrConnectWithoutWordInputSchema).array() ]).optional(),
  createMany: z.lazy(() => word_buyCreateManyWordInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => word_buyWhereUniqueInputSchema),z.lazy(() => word_buyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default word_buyUncheckedCreateNestedManyWithoutWordInputSchema;
