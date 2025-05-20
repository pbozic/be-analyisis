import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsWhereUniqueInputSchema } from './promo_adsWhereUniqueInputSchema';
import { promo_adsCreateWithoutBannerInputSchema } from './promo_adsCreateWithoutBannerInputSchema';
import { promo_adsUncheckedCreateWithoutBannerInputSchema } from './promo_adsUncheckedCreateWithoutBannerInputSchema';

export const promo_adsCreateOrConnectWithoutBannerInputSchema: z.ZodType<Prisma.promo_adsCreateOrConnectWithoutBannerInput> = z.object({
  where: z.lazy(() => promo_adsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => promo_adsCreateWithoutBannerInputSchema),z.lazy(() => promo_adsUncheckedCreateWithoutBannerInputSchema) ]),
}).strict();

export default promo_adsCreateOrConnectWithoutBannerInputSchema;
