import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataCreateWithoutSettlementInputSchema } from './weather_dataCreateWithoutSettlementInputSchema';
import { weather_dataUncheckedCreateWithoutSettlementInputSchema } from './weather_dataUncheckedCreateWithoutSettlementInputSchema';
import { weather_dataCreateOrConnectWithoutSettlementInputSchema } from './weather_dataCreateOrConnectWithoutSettlementInputSchema';
import { weather_dataCreateManySettlementInputEnvelopeSchema } from './weather_dataCreateManySettlementInputEnvelopeSchema';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';

export const weather_dataCreateNestedManyWithoutSettlementInputSchema: z.ZodType<Prisma.weather_dataCreateNestedManyWithoutSettlementInput> = z.object({
  create: z.union([ z.lazy(() => weather_dataCreateWithoutSettlementInputSchema),z.lazy(() => weather_dataCreateWithoutSettlementInputSchema).array(),z.lazy(() => weather_dataUncheckedCreateWithoutSettlementInputSchema),z.lazy(() => weather_dataUncheckedCreateWithoutSettlementInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => weather_dataCreateOrConnectWithoutSettlementInputSchema),z.lazy(() => weather_dataCreateOrConnectWithoutSettlementInputSchema).array() ]).optional(),
  createMany: z.lazy(() => weather_dataCreateManySettlementInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => weather_dataWhereUniqueInputSchema),z.lazy(() => weather_dataWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default weather_dataCreateNestedManyWithoutSettlementInputSchema;
