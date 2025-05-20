import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyCreateWithoutUserInputSchema } from './flag_historyCreateWithoutUserInputSchema';
import { flag_historyUncheckedCreateWithoutUserInputSchema } from './flag_historyUncheckedCreateWithoutUserInputSchema';
import { flag_historyCreateOrConnectWithoutUserInputSchema } from './flag_historyCreateOrConnectWithoutUserInputSchema';
import { flag_historyCreateManyUserInputEnvelopeSchema } from './flag_historyCreateManyUserInputEnvelopeSchema';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';

export const flag_historyUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.flag_historyUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => flag_historyCreateWithoutUserInputSchema),z.lazy(() => flag_historyCreateWithoutUserInputSchema).array(),z.lazy(() => flag_historyUncheckedCreateWithoutUserInputSchema),z.lazy(() => flag_historyUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => flag_historyCreateOrConnectWithoutUserInputSchema),z.lazy(() => flag_historyCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => flag_historyCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => flag_historyWhereUniqueInputSchema),z.lazy(() => flag_historyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default flag_historyUncheckedCreateNestedManyWithoutUserInputSchema;
