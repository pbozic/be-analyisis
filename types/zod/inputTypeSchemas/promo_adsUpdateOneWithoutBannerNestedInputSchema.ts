import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsCreateWithoutBannerInputSchema } from './promo_adsCreateWithoutBannerInputSchema';
import { promo_adsUncheckedCreateWithoutBannerInputSchema } from './promo_adsUncheckedCreateWithoutBannerInputSchema';
import { promo_adsCreateOrConnectWithoutBannerInputSchema } from './promo_adsCreateOrConnectWithoutBannerInputSchema';
import { promo_adsUpsertWithoutBannerInputSchema } from './promo_adsUpsertWithoutBannerInputSchema';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';
import { promo_adsWhereUniqueInputSchema } from './promo_adsWhereUniqueInputSchema';
import { promo_adsUpdateToOneWithWhereWithoutBannerInputSchema } from './promo_adsUpdateToOneWithWhereWithoutBannerInputSchema';
import { promo_adsUpdateWithoutBannerInputSchema } from './promo_adsUpdateWithoutBannerInputSchema';
import { promo_adsUncheckedUpdateWithoutBannerInputSchema } from './promo_adsUncheckedUpdateWithoutBannerInputSchema';

export const promo_adsUpdateOneWithoutBannerNestedInputSchema: z.ZodType<Prisma.promo_adsUpdateOneWithoutBannerNestedInput> = z.object({
  create: z.union([ z.lazy(() => promo_adsCreateWithoutBannerInputSchema),z.lazy(() => promo_adsUncheckedCreateWithoutBannerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => promo_adsCreateOrConnectWithoutBannerInputSchema).optional(),
  upsert: z.lazy(() => promo_adsUpsertWithoutBannerInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => promo_adsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => promo_adsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => promo_adsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => promo_adsUpdateToOneWithWhereWithoutBannerInputSchema),z.lazy(() => promo_adsUpdateWithoutBannerInputSchema),z.lazy(() => promo_adsUncheckedUpdateWithoutBannerInputSchema) ]).optional(),
}).strict();

export default promo_adsUpdateOneWithoutBannerNestedInputSchema;
