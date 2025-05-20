import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutDaily_meal_businessInputSchema } from './delivery_driversCreateWithoutDaily_meal_businessInputSchema';
import { delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema } from './delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema';
import { delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema } from './delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema';
import { delivery_driversCreateManyDaily_meal_businessInputEnvelopeSchema } from './delivery_driversCreateManyDaily_meal_businessInputEnvelopeSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';

export const delivery_driversUncheckedCreateNestedManyWithoutDaily_meal_businessInputSchema: z.ZodType<Prisma.delivery_driversUncheckedCreateNestedManyWithoutDaily_meal_businessInput> = z.object({
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutDaily_meal_businessInputSchema),z.lazy(() => delivery_driversCreateWithoutDaily_meal_businessInputSchema).array(),z.lazy(() => delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema),z.lazy(() => delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => delivery_driversCreateManyDaily_meal_businessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => delivery_driversWhereUniqueInputSchema),z.lazy(() => delivery_driversWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default delivery_driversUncheckedCreateNestedManyWithoutDaily_meal_businessInputSchema;
