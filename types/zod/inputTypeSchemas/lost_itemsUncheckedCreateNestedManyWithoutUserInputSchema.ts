import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsCreateWithoutUserInputSchema } from './lost_itemsCreateWithoutUserInputSchema';
import { lost_itemsUncheckedCreateWithoutUserInputSchema } from './lost_itemsUncheckedCreateWithoutUserInputSchema';
import { lost_itemsCreateOrConnectWithoutUserInputSchema } from './lost_itemsCreateOrConnectWithoutUserInputSchema';
import { lost_itemsCreateManyUserInputEnvelopeSchema } from './lost_itemsCreateManyUserInputEnvelopeSchema';
import { lost_itemsWhereUniqueInputSchema } from './lost_itemsWhereUniqueInputSchema';

export const lost_itemsUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.lost_itemsUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => lost_itemsCreateWithoutUserInputSchema),z.lazy(() => lost_itemsCreateWithoutUserInputSchema).array(),z.lazy(() => lost_itemsUncheckedCreateWithoutUserInputSchema),z.lazy(() => lost_itemsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => lost_itemsCreateOrConnectWithoutUserInputSchema),z.lazy(() => lost_itemsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => lost_itemsCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => lost_itemsWhereUniqueInputSchema),z.lazy(() => lost_itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default lost_itemsUncheckedCreateNestedManyWithoutUserInputSchema;
