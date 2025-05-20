import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutBusinessesInputSchema } from './scoring_pointsCreateWithoutBusinessesInputSchema';
import { scoring_pointsUncheckedCreateWithoutBusinessesInputSchema } from './scoring_pointsUncheckedCreateWithoutBusinessesInputSchema';
import { scoring_pointsCreateOrConnectWithoutBusinessesInputSchema } from './scoring_pointsCreateOrConnectWithoutBusinessesInputSchema';
import { scoring_pointsCreateManyBusinessesInputEnvelopeSchema } from './scoring_pointsCreateManyBusinessesInputEnvelopeSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';

export const scoring_pointsUncheckedCreateNestedManyWithoutBusinessesInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedCreateNestedManyWithoutBusinessesInput> = z.object({
  create: z.union([ z.lazy(() => scoring_pointsCreateWithoutBusinessesInputSchema),z.lazy(() => scoring_pointsCreateWithoutBusinessesInputSchema).array(),z.lazy(() => scoring_pointsUncheckedCreateWithoutBusinessesInputSchema),z.lazy(() => scoring_pointsUncheckedCreateWithoutBusinessesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => scoring_pointsCreateOrConnectWithoutBusinessesInputSchema),z.lazy(() => scoring_pointsCreateOrConnectWithoutBusinessesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => scoring_pointsCreateManyBusinessesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => scoring_pointsWhereUniqueInputSchema),z.lazy(() => scoring_pointsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default scoring_pointsUncheckedCreateNestedManyWithoutBusinessesInputSchema;
