import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutLate_eventsInputSchema } from './scoring_pointsCreateWithoutLate_eventsInputSchema';
import { scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema } from './scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema';
import { scoring_pointsCreateOrConnectWithoutLate_eventsInputSchema } from './scoring_pointsCreateOrConnectWithoutLate_eventsInputSchema';
import { scoring_pointsUpsertWithoutLate_eventsInputSchema } from './scoring_pointsUpsertWithoutLate_eventsInputSchema';
import { scoring_pointsWhereInputSchema } from './scoring_pointsWhereInputSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateToOneWithWhereWithoutLate_eventsInputSchema } from './scoring_pointsUpdateToOneWithWhereWithoutLate_eventsInputSchema';
import { scoring_pointsUpdateWithoutLate_eventsInputSchema } from './scoring_pointsUpdateWithoutLate_eventsInputSchema';
import { scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema } from './scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema';

export const scoring_pointsUpdateOneWithoutLate_eventsNestedInputSchema: z.ZodType<Prisma.scoring_pointsUpdateOneWithoutLate_eventsNestedInput> = z.object({
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutLate_eventsInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutLate_eventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => scoring_pointsCreateOrConnectWithoutLate_eventsInputSchema).optional(),
  upsert: z.lazy(() => scoring_pointsUpsertWithoutLate_eventsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => scoring_pointsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => scoring_pointsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => scoring_pointsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => scoring_pointsUpdateToOneWithWhereWithoutLate_eventsInputSchema),z.lazy(() => scoring_pointsUpdateWithoutLate_eventsInputSchema),z.lazy(() => scoring_pointsUncheckedUpdateWithoutLate_eventsInputSchema) ]).optional(),
}).strict();

export default scoring_pointsUpdateOneWithoutLate_eventsNestedInputSchema;
