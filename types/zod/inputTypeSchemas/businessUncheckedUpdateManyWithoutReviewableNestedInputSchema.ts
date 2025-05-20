import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutReviewableInputSchema } from './businessCreateWithoutReviewableInputSchema';
import { businessUncheckedCreateWithoutReviewableInputSchema } from './businessUncheckedCreateWithoutReviewableInputSchema';
import { businessCreateOrConnectWithoutReviewableInputSchema } from './businessCreateOrConnectWithoutReviewableInputSchema';
import { businessUpsertWithWhereUniqueWithoutReviewableInputSchema } from './businessUpsertWithWhereUniqueWithoutReviewableInputSchema';
import { businessCreateManyReviewableInputEnvelopeSchema } from './businessCreateManyReviewableInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithWhereUniqueWithoutReviewableInputSchema } from './businessUpdateWithWhereUniqueWithoutReviewableInputSchema';
import { businessUpdateManyWithWhereWithoutReviewableInputSchema } from './businessUpdateManyWithWhereWithoutReviewableInputSchema';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';

export const businessUncheckedUpdateManyWithoutReviewableNestedInputSchema: z.ZodType<Prisma.businessUncheckedUpdateManyWithoutReviewableNestedInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutReviewableInputSchema),z.lazy(() => businessCreateWithoutReviewableInputSchema).array(),z.lazy(() => businessUncheckedCreateWithoutReviewableInputSchema),z.lazy(() => businessUncheckedCreateWithoutReviewableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => businessCreateOrConnectWithoutReviewableInputSchema),z.lazy(() => businessCreateOrConnectWithoutReviewableInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => businessUpsertWithWhereUniqueWithoutReviewableInputSchema),z.lazy(() => businessUpsertWithWhereUniqueWithoutReviewableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => businessCreateManyReviewableInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => businessWhereUniqueInputSchema),z.lazy(() => businessWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => businessUpdateWithWhereUniqueWithoutReviewableInputSchema),z.lazy(() => businessUpdateWithWhereUniqueWithoutReviewableInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => businessUpdateManyWithWhereWithoutReviewableInputSchema),z.lazy(() => businessUpdateManyWithWhereWithoutReviewableInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => businessScalarWhereInputSchema),z.lazy(() => businessScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default businessUncheckedUpdateManyWithoutReviewableNestedInputSchema;
