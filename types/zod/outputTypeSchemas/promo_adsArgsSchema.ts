import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsSelectSchema } from '../inputTypeSchemas/promo_adsSelectSchema';
import { promo_adsIncludeSchema } from '../inputTypeSchemas/promo_adsIncludeSchema';

export const promo_adsArgsSchema: z.ZodType<Prisma.promo_adsDefaultArgs> = z
	.object({
		select: z.lazy(() => promo_adsSelectSchema).optional(),
		include: z.lazy(() => promo_adsIncludeSchema).optional(),
	})
	.strict();

export default promo_adsArgsSchema;
