import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsCreateWithoutBannerInputSchema } from './promo_adsCreateWithoutBannerInputSchema';
import { promo_adsUncheckedCreateWithoutBannerInputSchema } from './promo_adsUncheckedCreateWithoutBannerInputSchema';
import { promo_adsCreateOrConnectWithoutBannerInputSchema } from './promo_adsCreateOrConnectWithoutBannerInputSchema';
import { promo_adsWhereUniqueInputSchema } from './promo_adsWhereUniqueInputSchema';

export const promo_adsCreateNestedOneWithoutBannerInputSchema: z.ZodType<Prisma.promo_adsCreateNestedOneWithoutBannerInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_adsCreateWithoutBannerInputSchema),
					z.lazy(() => promo_adsUncheckedCreateWithoutBannerInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => promo_adsCreateOrConnectWithoutBannerInputSchema).optional(),
			connect: z.lazy(() => promo_adsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default promo_adsCreateNestedOneWithoutBannerInputSchema;
