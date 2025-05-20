import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryCreateWithoutCategoryInputSchema } from './promo_ads_categoryCreateWithoutCategoryInputSchema';
import { promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema } from './promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema';
import { promo_ads_categoryCreateOrConnectWithoutCategoryInputSchema } from './promo_ads_categoryCreateOrConnectWithoutCategoryInputSchema';
import { promo_ads_categoryUpsertWithWhereUniqueWithoutCategoryInputSchema } from './promo_ads_categoryUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { promo_ads_categoryCreateManyCategoryInputEnvelopeSchema } from './promo_ads_categoryCreateManyCategoryInputEnvelopeSchema';
import { promo_ads_categoryWhereUniqueInputSchema } from './promo_ads_categoryWhereUniqueInputSchema';
import { promo_ads_categoryUpdateWithWhereUniqueWithoutCategoryInputSchema } from './promo_ads_categoryUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { promo_ads_categoryUpdateManyWithWhereWithoutCategoryInputSchema } from './promo_ads_categoryUpdateManyWithWhereWithoutCategoryInputSchema';
import { promo_ads_categoryScalarWhereInputSchema } from './promo_ads_categoryScalarWhereInputSchema';

export const promo_ads_categoryUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => promo_ads_categoryCreateWithoutCategoryInputSchema),z.lazy(() => promo_ads_categoryCreateWithoutCategoryInputSchema).array(),z.lazy(() => promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => promo_ads_categoryCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => promo_ads_categoryCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => promo_ads_categoryUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => promo_ads_categoryUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => promo_ads_categoryCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => promo_ads_categoryUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => promo_ads_categoryUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => promo_ads_categoryUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => promo_ads_categoryUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => promo_ads_categoryScalarWhereInputSchema),z.lazy(() => promo_ads_categoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default promo_ads_categoryUpdateManyWithoutCategoryNestedInputSchema;
