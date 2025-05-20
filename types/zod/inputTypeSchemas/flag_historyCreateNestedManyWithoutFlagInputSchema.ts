import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyCreateWithoutFlagInputSchema } from './flag_historyCreateWithoutFlagInputSchema';
import { flag_historyUncheckedCreateWithoutFlagInputSchema } from './flag_historyUncheckedCreateWithoutFlagInputSchema';
import { flag_historyCreateOrConnectWithoutFlagInputSchema } from './flag_historyCreateOrConnectWithoutFlagInputSchema';
import { flag_historyCreateManyFlagInputEnvelopeSchema } from './flag_historyCreateManyFlagInputEnvelopeSchema';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';

export const flag_historyCreateNestedManyWithoutFlagInputSchema: z.ZodType<Prisma.flag_historyCreateNestedManyWithoutFlagInput> = z.object({
  create: z.union([ z.lazy(() => flag_historyCreateWithoutFlagInputSchema),z.lazy(() => flag_historyCreateWithoutFlagInputSchema).array(),z.lazy(() => flag_historyUncheckedCreateWithoutFlagInputSchema),z.lazy(() => flag_historyUncheckedCreateWithoutFlagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => flag_historyCreateOrConnectWithoutFlagInputSchema),z.lazy(() => flag_historyCreateOrConnectWithoutFlagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => flag_historyCreateManyFlagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => flag_historyWhereUniqueInputSchema),z.lazy(() => flag_historyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default flag_historyCreateNestedManyWithoutFlagInputSchema;
