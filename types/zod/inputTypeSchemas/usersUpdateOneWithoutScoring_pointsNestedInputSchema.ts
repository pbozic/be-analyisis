import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutScoring_pointsInputSchema } from './usersCreateWithoutScoring_pointsInputSchema';
import { usersUncheckedCreateWithoutScoring_pointsInputSchema } from './usersUncheckedCreateWithoutScoring_pointsInputSchema';
import { usersCreateOrConnectWithoutScoring_pointsInputSchema } from './usersCreateOrConnectWithoutScoring_pointsInputSchema';
import { usersUpsertWithoutScoring_pointsInputSchema } from './usersUpsertWithoutScoring_pointsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutScoring_pointsInputSchema } from './usersUpdateToOneWithWhereWithoutScoring_pointsInputSchema';
import { usersUpdateWithoutScoring_pointsInputSchema } from './usersUpdateWithoutScoring_pointsInputSchema';
import { usersUncheckedUpdateWithoutScoring_pointsInputSchema } from './usersUncheckedUpdateWithoutScoring_pointsInputSchema';

export const usersUpdateOneWithoutScoring_pointsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutScoring_pointsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutScoring_pointsInputSchema),z.lazy(() => usersUncheckedCreateWithoutScoring_pointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutScoring_pointsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutScoring_pointsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutScoring_pointsInputSchema),z.lazy(() => usersUpdateWithoutScoring_pointsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutScoring_pointsInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneWithoutScoring_pointsNestedInputSchema;
