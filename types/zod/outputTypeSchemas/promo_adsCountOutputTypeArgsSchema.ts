import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsCountOutputTypeSelectSchema } from './promo_adsCountOutputTypeSelectSchema';

export const promo_adsCountOutputTypeArgsSchema: z.ZodType<Prisma.promo_adsCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => promo_adsCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export default promo_adsCountOutputTypeSelectSchema;
