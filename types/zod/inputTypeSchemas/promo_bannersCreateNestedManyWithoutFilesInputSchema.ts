import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersCreateWithoutFilesInputSchema } from './promo_bannersCreateWithoutFilesInputSchema';
import { promo_bannersUncheckedCreateWithoutFilesInputSchema } from './promo_bannersUncheckedCreateWithoutFilesInputSchema';
import { promo_bannersCreateOrConnectWithoutFilesInputSchema } from './promo_bannersCreateOrConnectWithoutFilesInputSchema';
import { promo_bannersCreateManyFilesInputEnvelopeSchema } from './promo_bannersCreateManyFilesInputEnvelopeSchema';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';

export const promo_bannersCreateNestedManyWithoutFilesInputSchema: z.ZodType<Prisma.promo_bannersCreateNestedManyWithoutFilesInput> = z.object({
  create: z.union([ z.lazy(() => promo_bannersCreateWithoutFilesInputSchema),z.lazy(() => promo_bannersCreateWithoutFilesInputSchema).array(),z.lazy(() => promo_bannersUncheckedCreateWithoutFilesInputSchema),z.lazy(() => promo_bannersUncheckedCreateWithoutFilesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => promo_bannersCreateOrConnectWithoutFilesInputSchema),z.lazy(() => promo_bannersCreateOrConnectWithoutFilesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => promo_bannersCreateManyFilesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => promo_bannersWhereUniqueInputSchema),z.lazy(() => promo_bannersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default promo_bannersCreateNestedManyWithoutFilesInputSchema;
