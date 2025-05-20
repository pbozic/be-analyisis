import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_ads_categorySelectSchema } from '../inputTypeSchemas/promo_ads_categorySelectSchema';
import { promo_ads_categoryIncludeSchema } from '../inputTypeSchemas/promo_ads_categoryIncludeSchema';

export const promo_ads_categoryArgsSchema: z.ZodType<Prisma.promo_ads_categoryDefaultArgs> = z
	.object({
		select: z.lazy(() => promo_ads_categorySelectSchema).optional(),
		include: z.lazy(() => promo_ads_categoryIncludeSchema).optional(),
	})
	.strict();

export default promo_ads_categoryArgsSchema;
