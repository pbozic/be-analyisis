import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { flag_historyCreateWithoutFlagInputSchema } from './flag_historyCreateWithoutFlagInputSchema';
import { flag_historyUncheckedCreateWithoutFlagInputSchema } from './flag_historyUncheckedCreateWithoutFlagInputSchema';
import { flag_historyCreateOrConnectWithoutFlagInputSchema } from './flag_historyCreateOrConnectWithoutFlagInputSchema';
import { flag_historyUpsertWithWhereUniqueWithoutFlagInputSchema } from './flag_historyUpsertWithWhereUniqueWithoutFlagInputSchema';
import { flag_historyCreateManyFlagInputEnvelopeSchema } from './flag_historyCreateManyFlagInputEnvelopeSchema';
import { flag_historyWhereUniqueInputSchema } from './flag_historyWhereUniqueInputSchema';
import { flag_historyUpdateWithWhereUniqueWithoutFlagInputSchema } from './flag_historyUpdateWithWhereUniqueWithoutFlagInputSchema';
import { flag_historyUpdateManyWithWhereWithoutFlagInputSchema } from './flag_historyUpdateManyWithWhereWithoutFlagInputSchema';
import { flag_historyScalarWhereInputSchema } from './flag_historyScalarWhereInputSchema';

export const flag_historyUncheckedUpdateManyWithoutFlagNestedInputSchema: z.ZodType<Prisma.flag_historyUncheckedUpdateManyWithoutFlagNestedInput> = z.object({
  create: z.union([ z.lazy(() => flag_historyCreateWithoutFlagInputSchema),z.lazy(() => flag_historyCreateWithoutFlagInputSchema).array(),z.lazy(() => flag_historyUncheckedCreateWithoutFlagInputSchema),z.lazy(() => flag_historyUncheckedCreateWithoutFlagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => flag_historyCreateOrConnectWithoutFlagInputSchema),z.lazy(() => flag_historyCreateOrConnectWithoutFlagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => flag_historyUpsertWithWhereUniqueWithoutFlagInputSchema),z.lazy(() => flag_historyUpsertWithWhereUniqueWithoutFlagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => flag_historyCreateManyFlagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => flag_historyWhereUniqueInputSchema),z.lazy(() => flag_historyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => flag_historyWhereUniqueInputSchema),z.lazy(() => flag_historyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => flag_historyWhereUniqueInputSchema),z.lazy(() => flag_historyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => flag_historyWhereUniqueInputSchema),z.lazy(() => flag_historyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => flag_historyUpdateWithWhereUniqueWithoutFlagInputSchema),z.lazy(() => flag_historyUpdateWithWhereUniqueWithoutFlagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => flag_historyUpdateManyWithWhereWithoutFlagInputSchema),z.lazy(() => flag_historyUpdateManyWithWhereWithoutFlagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => flag_historyScalarWhereInputSchema),z.lazy(() => flag_historyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default flag_historyUncheckedUpdateManyWithoutFlagNestedInputSchema;
