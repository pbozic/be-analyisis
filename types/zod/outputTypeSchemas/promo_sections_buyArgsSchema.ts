import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sections_buySelectSchema } from '../inputTypeSchemas/promo_sections_buySelectSchema';
import { promo_sections_buyIncludeSchema } from '../inputTypeSchemas/promo_sections_buyIncludeSchema';

export const promo_sections_buyArgsSchema: z.ZodType<Prisma.promo_sections_buyDefaultArgs> = z
	.object({
		select: z.lazy(() => promo_sections_buySelectSchema).optional(),
		include: z.lazy(() => promo_sections_buyIncludeSchema).optional(),
	})
	.strict();

export default promo_sections_buyArgsSchema;
