import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const promo_adsCountOutputTypeSelectSchema: z.ZodType<Prisma.promo_adsCountOutputTypeSelect> = z
	.object({
		banner: z.boolean().optional(),
		categories: z.boolean().optional(),
	})
	.strict();

export default promo_adsCountOutputTypeSelectSchema;
