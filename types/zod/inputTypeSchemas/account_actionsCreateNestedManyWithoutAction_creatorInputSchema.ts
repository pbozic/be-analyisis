import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateWithoutAction_creatorInputSchema } from './account_actionsCreateWithoutAction_creatorInputSchema';
import { account_actionsUncheckedCreateWithoutAction_creatorInputSchema } from './account_actionsUncheckedCreateWithoutAction_creatorInputSchema';
import { account_actionsCreateOrConnectWithoutAction_creatorInputSchema } from './account_actionsCreateOrConnectWithoutAction_creatorInputSchema';
import { account_actionsCreateManyAction_creatorInputEnvelopeSchema } from './account_actionsCreateManyAction_creatorInputEnvelopeSchema';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';

export const account_actionsCreateNestedManyWithoutAction_creatorInputSchema: z.ZodType<Prisma.account_actionsCreateNestedManyWithoutAction_creatorInput> = z.object({
  create: z.union([ z.lazy(() => account_actionsCreateWithoutAction_creatorInputSchema),z.lazy(() => account_actionsCreateWithoutAction_creatorInputSchema).array(),z.lazy(() => account_actionsUncheckedCreateWithoutAction_creatorInputSchema),z.lazy(() => account_actionsUncheckedCreateWithoutAction_creatorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => account_actionsCreateOrConnectWithoutAction_creatorInputSchema),z.lazy(() => account_actionsCreateOrConnectWithoutAction_creatorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => account_actionsCreateManyAction_creatorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => account_actionsWhereUniqueInputSchema),z.lazy(() => account_actionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default account_actionsCreateNestedManyWithoutAction_creatorInputSchema;
