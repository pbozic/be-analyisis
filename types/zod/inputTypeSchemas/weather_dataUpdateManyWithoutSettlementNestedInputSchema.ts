import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataCreateWithoutSettlementInputSchema } from './weather_dataCreateWithoutSettlementInputSchema';
import { weather_dataUncheckedCreateWithoutSettlementInputSchema } from './weather_dataUncheckedCreateWithoutSettlementInputSchema';
import { weather_dataCreateOrConnectWithoutSettlementInputSchema } from './weather_dataCreateOrConnectWithoutSettlementInputSchema';
import { weather_dataUpsertWithWhereUniqueWithoutSettlementInputSchema } from './weather_dataUpsertWithWhereUniqueWithoutSettlementInputSchema';
import { weather_dataCreateManySettlementInputEnvelopeSchema } from './weather_dataCreateManySettlementInputEnvelopeSchema';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';
import { weather_dataUpdateWithWhereUniqueWithoutSettlementInputSchema } from './weather_dataUpdateWithWhereUniqueWithoutSettlementInputSchema';
import { weather_dataUpdateManyWithWhereWithoutSettlementInputSchema } from './weather_dataUpdateManyWithWhereWithoutSettlementInputSchema';
import { weather_dataScalarWhereInputSchema } from './weather_dataScalarWhereInputSchema';

export const weather_dataUpdateManyWithoutSettlementNestedInputSchema: z.ZodType<Prisma.weather_dataUpdateManyWithoutSettlementNestedInput> = z.object({
  create: z.union([ z.lazy(() => weather_dataCreateWithoutSettlementInputSchema),z.lazy(() => weather_dataCreateWithoutSettlementInputSchema).array(),z.lazy(() => weather_dataUncheckedCreateWithoutSettlementInputSchema),z.lazy(() => weather_dataUncheckedCreateWithoutSettlementInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => weather_dataCreateOrConnectWithoutSettlementInputSchema),z.lazy(() => weather_dataCreateOrConnectWithoutSettlementInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => weather_dataUpsertWithWhereUniqueWithoutSettlementInputSchema),z.lazy(() => weather_dataUpsertWithWhereUniqueWithoutSettlementInputSchema).array() ]).optional(),
  createMany: z.lazy(() => weather_dataCreateManySettlementInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => weather_dataWhereUniqueInputSchema),z.lazy(() => weather_dataWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => weather_dataWhereUniqueInputSchema),z.lazy(() => weather_dataWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => weather_dataWhereUniqueInputSchema),z.lazy(() => weather_dataWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => weather_dataWhereUniqueInputSchema),z.lazy(() => weather_dataWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => weather_dataUpdateWithWhereUniqueWithoutSettlementInputSchema),z.lazy(() => weather_dataUpdateWithWhereUniqueWithoutSettlementInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => weather_dataUpdateManyWithWhereWithoutSettlementInputSchema),z.lazy(() => weather_dataUpdateManyWithWhereWithoutSettlementInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => weather_dataScalarWhereInputSchema),z.lazy(() => weather_dataScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default weather_dataUpdateManyWithoutSettlementNestedInputSchema;
